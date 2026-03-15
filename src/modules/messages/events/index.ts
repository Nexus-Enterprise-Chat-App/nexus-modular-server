import { MessageDto } from '../dto/messages.dto';

// ── Message Created ───────────────────────────────────────────────────────────
export class MessageCreatedEvent {
  constructor(public readonly message: MessageDto) {}
}

// ── Message Edited ────────────────────────────────────────────────────────────
export class MessageEditedEvent {
  constructor(public readonly message: MessageDto) {}
}

// ── Message Deleted ───────────────────────────────────────────────────────────
export class MessageDeletedEvent {
  constructor(
    public readonly messageId: string,
    public readonly roomId: string | null,
    public readonly dmConversationId: string | null,
  ) {}
}

// ── Reaction Added ────────────────────────────────────────────────────────────
export class ReactionAddedEvent {
  constructor(
    public readonly messageId: string,
    public readonly userId: string,
    public readonly emoji: string,
    public readonly roomId: string | null,
    public readonly dmConversationId: string | null,
  ) {}
}

// ── Reaction Removed ──────────────────────────────────────────────────────────
export class ReactionRemovedEvent {
  constructor(
    public readonly messageId: string,
    public readonly userId: string,
    public readonly emoji: string,
    public readonly roomId: string | null,
    public readonly dmConversationId: string | null,
  ) {}
}

// ── Message Pinned ────────────────────────────────────────────────────────────
export class MessagePinnedEvent {
  constructor(
    public readonly roomId: string,
    public readonly messageId: string,
    public readonly pinnedBy: string,
  ) {}
}

// ── Message Unpinned ──────────────────────────────────────────────────────────
export class MessageUnpinnedEvent {
  constructor(
    public readonly roomId: string,
    public readonly messageId: string,
  ) {}
}
