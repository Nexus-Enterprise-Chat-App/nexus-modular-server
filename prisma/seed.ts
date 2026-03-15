/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { MessageType, PrismaClient, RoomStatus, UserRole } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === 'production'
    ? {
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {}),
  connectionTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool as any);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  const passwordHash = await bcrypt.hash('Password1!', 12);

  // ── Users ────────────────────────────────────────────────────────────────
  const admin = await prisma.user.upsert({
    where: { email: 'admin@nexus.dev' },
    update: {},
    create: {
      email: 'admin@nexus.dev',
      handle: 'admin',
      name: 'Nexus Admin',
      passwordHash,
      role: UserRole.ADMIN,
      isActive: true,
      isVerified: true,
    },
  });

  const alice = await prisma.user.upsert({
    where: { email: 'alice@nexus.dev' },
    update: {},
    create: {
      email: 'alice@nexus.dev',
      handle: 'alice',
      name: 'Alice Johnson',
      passwordHash,
      role: UserRole.USER,
      bio: 'Frontend developer 🎨',
      isActive: true,
      isVerified: true,
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@nexus.dev' },
    update: {},
    create: {
      email: 'bob@nexus.dev',
      handle: 'bob',
      name: 'Bob Smith',
      passwordHash,
      role: UserRole.MODERATOR,
      bio: 'Backend engineer ⚙️',
      isActive: true,
      isVerified: true,
    },
  });

  // ── Rooms ────────────────────────────────────────────────────────────────
  const roomDefs = [
    {
      name: 'General',
      slug: 'general',
      description: 'General discussion',
      category: 'Community',
      tags: ['general'],
    },
    {
      name: 'Tech Talk',
      slug: 'tech-talk',
      description: 'All things tech',
      category: 'Technology',
      tags: ['tech', 'dev'],
    },
    {
      name: 'Design',
      slug: 'design',
      description: 'UI/UX and creative work',
      category: 'Creative',
      tags: ['design'],
    },
    {
      name: 'Gaming',
      slug: 'gaming',
      description: 'Games and esports',
      category: 'Gaming',
      tags: ['gaming'],
      slowModeSeconds: 5,
    },
    {
      name: 'Random',
      slug: 'random',
      description: 'Anything goes',
      category: 'Community',
      tags: ['random'],
    },
  ];

  const rooms: Record<string, any> = {};
  for (const def of roomDefs) {
    rooms[def.slug] = await prisma.room.upsert({
      where: { slug: def.slug },
      update: {},
      create: { ...def, status: RoomStatus.ACTIVE, createdBy: admin.id },
    });
  }

  // ── Moderators ───────────────────────────────────────────────────────────
  for (const slug of ['tech-talk', 'general']) {
    await prisma.roomModerator.upsert({
      where: { roomId_userId: { roomId: rooms[slug].id, userId: bob.id } },
      update: {},
      create: { roomId: rooms[slug].id, userId: bob.id, assignedBy: admin.id },
    });
  }

  // ── DM Conversation ──────────────────────────────────────────────────────
  const [p1Id, p2Id] = [alice.id, bob.id].sort();
  const dm = await prisma.dMConversation.upsert({
    where: { participant1Id_participant2Id: { participant1Id: p1Id, participant2Id: p2Id } },
    update: {},
    create: { participant1Id: p1Id, participant2Id: p2Id },
  });

  // ── Seed messages ────────────────────────────────────────────────────────
  const generalRoom = rooms['general'];
  const techRoom = rooms['tech-talk'];

  const generalMessages = await Promise.all([
    prisma.message.create({
      data: {
        type: MessageType.TEXT,
        content: 'Welcome to Nexus! 👋 Great to have everyone here.',
        senderId: admin.id,
        roomId: generalRoom.id,
      },
    }),
    prisma.message.create({
      data: {
        type: MessageType.TEXT,
        content: 'Hey everyone! Super excited to be part of this community 🎉',
        senderId: alice.id,
        roomId: generalRoom.id,
      },
    }),
    prisma.message.create({
      data: {
        type: MessageType.TEXT,
        content: 'This platform is incredible. Love the real-time chat experience!',
        senderId: bob.id,
        roomId: generalRoom.id,
      },
    }),
  ]);

  const techMessages = await Promise.all([
    prisma.message.create({
      data: {
        type: MessageType.TEXT,
        content: 'Anyone been following the latest NestJS v11 updates?',
        senderId: bob.id,
        roomId: techRoom.id,
      },
    }),
    prisma.message.create({
      data: {
        type: MessageType.TEXT,
        content: 'Yes! The new module federation support is a game changer 🚀',
        senderId: alice.id,
        roomId: techRoom.id,
        replyToId: undefined, // will set after
      },
    }),
  ]);

  // ── Reply to first tech message ───────────────────────────────────────────
  await prisma.message.create({
    data: {
      type: MessageType.TEXT,
      content: 'Totally agree. Also the improved type inference is 🔥',
      senderId: admin.id,
      roomId: techRoom.id,
      replyToId: techMessages[0].id,
    },
  });

  // ── Reactions ────────────────────────────────────────────────────────────
  await prisma.reaction.createMany({
    data: [
      { messageId: generalMessages[0].id, userId: alice.id, emoji: '👋' },
      { messageId: generalMessages[0].id, userId: bob.id, emoji: '👋' },
      { messageId: generalMessages[1].id, userId: admin.id, emoji: '🎉' },
      { messageId: techMessages[0].id, userId: alice.id, emoji: '🚀' },
    ],
    skipDuplicates: true,
  });

  // ── Pinned message ────────────────────────────────────────────────────────
  await prisma.pinnedMessage.upsert({
    where: { roomId_messageId: { roomId: generalRoom.id, messageId: generalMessages[0].id } },
    update: {},
    create: { roomId: generalRoom.id, messageId: generalMessages[0].id, pinnedBy: admin.id },
  });

  // ── DM messages ──────────────────────────────────────────────────────────
  const dm1 = await prisma.message.create({
    data: {
      type: MessageType.TEXT,
      content: 'Hey Alice! How are you settling in?',
      senderId: bob.id,
      dmConversationId: dm.id,
    },
  });
  await prisma.message.create({
    data: {
      type: MessageType.TEXT,
      content: 'Really well thanks! Love the platform 😊',
      senderId: alice.id,
      dmConversationId: dm.id,
      replyToId: dm1.id,
    },
  });

  // ── Block relationship (alice has blocked an imaginary spammer) ───────────
  // Skipped in seed — tested via API

  console.log('✅ Seed complete\n');
  console.log('📋 Dev credentials (password: Password1!):');
  console.log('  Admin:     admin@nexus.dev    (role: ADMIN)');
  console.log('  Moderator: bob@nexus.dev      (role: MODERATOR)');
  console.log('  User:      alice@nexus.dev    (role: USER)');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
