// ── Get Room Messages ─────────────────────────────────────────────────────────
export class GetRoomMessagesQuery {
  constructor(
    public readonly roomId: string,
    public readonly requesterId: string,
    public readonly limit: number,
    public readonly cursor: string | undefined,
  ) {}
}

// ── Get DM Messages ───────────────────────────────────────────────────────────
export class GetDmMessagesQuery {
  constructor(
    public readonly dmConversationId: string,
    public readonly requesterId: string,
    public readonly limit: number,
    public readonly cursor: string | undefined,
  ) {}
}

// ── Get Pinned Messages ───────────────────────────────────────────────────────
export class GetPinnedMessagesQuery {
  constructor(
    public readonly roomId: string,
    public readonly requesterId: string,
  ) {}
}

// ── Get Single Message ────────────────────────────────────────────────────────
export class GetMessageQuery {
  constructor(
    public readonly messageId: string,
    public readonly requesterId: string,
  ) {}
}
