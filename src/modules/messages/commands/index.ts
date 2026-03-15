import { MessageType } from "generated/prisma/client/enums";

// ── Send Message ──────────────────────────────────────────────────────────────
export class SendMessageCommand {
  constructor(
    public readonly senderId: string,
    public readonly type: MessageType,
    public readonly content: string | undefined,
    public readonly mediaUrl: string | undefined,
    public readonly replyToId: string | undefined,
    public readonly clientTempId: string | undefined,
    public readonly roomId: string | undefined,
    public readonly dmConversationId: string | undefined,
  ) {}
}

// ── Edit Message ──────────────────────────────────────────────────────────────
export class EditMessageCommand {
  constructor(
    public readonly messageId: string,
    public readonly requesterId: string,
    public readonly content: string,
  ) {}
}

// ── Delete Message ────────────────────────────────────────────────────────────
export class DeleteMessageCommand {
  constructor(
    public readonly messageId: string,
    public readonly requesterId: string,
    public readonly requesterRole: string,
  ) {}
}

// ── Add Reaction ──────────────────────────────────────────────────────────────
export class AddReactionCommand {
  constructor(
    public readonly messageId: string,
    public readonly userId: string,
    public readonly emoji: string,
  ) {}
}

// ── Remove Reaction ───────────────────────────────────────────────────────────
export class RemoveReactionCommand {
  constructor(
    public readonly messageId: string,
    public readonly userId: string,
    public readonly emoji: string,
  ) {}
}

// ── Pin Message ───────────────────────────────────────────────────────────────
export class PinMessageCommand {
  constructor(
    public readonly roomId: string,
    public readonly messageId: string,
    public readonly pinnedBy: string,
    public readonly requesterRole: string,
    public readonly isRoomModerator: boolean,
  ) {}
}

// ── Unpin Message ─────────────────────────────────────────────────────────────
export class UnpinMessageCommand {
  constructor(
    public readonly roomId: string,
    public readonly messageId: string,
    public readonly requesterRole: string,
    public readonly isRoomModerator: boolean,
  ) {}
}
