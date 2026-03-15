
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DeviceSession
 * 
 */
export type DeviceSession = $Result.DefaultSelection<Prisma.$DeviceSessionPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomModerator
 * 
 */
export type RoomModerator = $Result.DefaultSelection<Prisma.$RoomModeratorPayload>
/**
 * Model DMConversation
 * 
 */
export type DMConversation = $Result.DefaultSelection<Prisma.$DMConversationPayload>
/**
 * Model BlockedUser
 * 
 */
export type BlockedUser = $Result.DefaultSelection<Prisma.$BlockedUserPayload>
/**
 * Model MutedConversation
 * 
 */
export type MutedConversation = $Result.DefaultSelection<Prisma.$MutedConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageStatus_
 * 
 */
export type MessageStatus_ = $Result.DefaultSelection<Prisma.$MessageStatus_Payload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model PinnedMessage
 * 
 */
export type PinnedMessage = $Result.DefaultSelection<Prisma.$PinnedMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const RoomStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  ARCHIVED: 'ARCHIVED'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const DevicePlatform: {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  WEB: 'WEB'
};

export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform]


export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VOICE_NOTE: 'VOICE_NOTE',
  VIDEO: 'VIDEO'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const MessageStatus: {
  SENT: 'SENT',
  DELIVERED: 'DELIVERED',
  READ: 'READ'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type DevicePlatform = $Enums.DevicePlatform

export const DevicePlatform: typeof $Enums.DevicePlatform

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceSession`: Exposes CRUD operations for the **DeviceSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceSessions
    * const deviceSessions = await prisma.deviceSession.findMany()
    * ```
    */
  get deviceSession(): Prisma.DeviceSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomModerator`: Exposes CRUD operations for the **RoomModerator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomModerators
    * const roomModerators = await prisma.roomModerator.findMany()
    * ```
    */
  get roomModerator(): Prisma.RoomModeratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dMConversation`: Exposes CRUD operations for the **DMConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DMConversations
    * const dMConversations = await prisma.dMConversation.findMany()
    * ```
    */
  get dMConversation(): Prisma.DMConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedUser`: Exposes CRUD operations for the **BlockedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedUsers
    * const blockedUsers = await prisma.blockedUser.findMany()
    * ```
    */
  get blockedUser(): Prisma.BlockedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mutedConversation`: Exposes CRUD operations for the **MutedConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MutedConversations
    * const mutedConversations = await prisma.mutedConversation.findMany()
    * ```
    */
  get mutedConversation(): Prisma.MutedConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageStatus_`: Exposes CRUD operations for the **MessageStatus_** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageStatus_s
    * const messageStatus_s = await prisma.messageStatus_.findMany()
    * ```
    */
  get messageStatus_(): Prisma.MessageStatus_Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pinnedMessage`: Exposes CRUD operations for the **PinnedMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PinnedMessages
    * const pinnedMessages = await prisma.pinnedMessage.findMany()
    * ```
    */
  get pinnedMessage(): Prisma.PinnedMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DeviceSession: 'DeviceSession',
    Room: 'Room',
    RoomModerator: 'RoomModerator',
    DMConversation: 'DMConversation',
    BlockedUser: 'BlockedUser',
    MutedConversation: 'MutedConversation',
    Message: 'Message',
    MessageStatus_: 'MessageStatus_',
    Reaction: 'Reaction',
    PinnedMessage: 'PinnedMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "deviceSession" | "room" | "roomModerator" | "dMConversation" | "blockedUser" | "mutedConversation" | "message" | "messageStatus_" | "reaction" | "pinnedMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DeviceSession: {
        payload: Prisma.$DeviceSessionPayload<ExtArgs>
        fields: Prisma.DeviceSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findFirst: {
            args: Prisma.DeviceSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          findMany: {
            args: Prisma.DeviceSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          create: {
            args: Prisma.DeviceSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          createMany: {
            args: Prisma.DeviceSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          delete: {
            args: Prisma.DeviceSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          update: {
            args: Prisma.DeviceSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          deleteMany: {
            args: Prisma.DeviceSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>[]
          }
          upsert: {
            args: Prisma.DeviceSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceSessionPayload>
          }
          aggregate: {
            args: Prisma.DeviceSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceSession>
          }
          groupBy: {
            args: Prisma.DeviceSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceSessionCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceSessionCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomModerator: {
        payload: Prisma.$RoomModeratorPayload<ExtArgs>
        fields: Prisma.RoomModeratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomModeratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomModeratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          findFirst: {
            args: Prisma.RoomModeratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomModeratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          findMany: {
            args: Prisma.RoomModeratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>[]
          }
          create: {
            args: Prisma.RoomModeratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          createMany: {
            args: Prisma.RoomModeratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomModeratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>[]
          }
          delete: {
            args: Prisma.RoomModeratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          update: {
            args: Prisma.RoomModeratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          deleteMany: {
            args: Prisma.RoomModeratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomModeratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomModeratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>[]
          }
          upsert: {
            args: Prisma.RoomModeratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomModeratorPayload>
          }
          aggregate: {
            args: Prisma.RoomModeratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomModerator>
          }
          groupBy: {
            args: Prisma.RoomModeratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomModeratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomModeratorCountArgs<ExtArgs>
            result: $Utils.Optional<RoomModeratorCountAggregateOutputType> | number
          }
        }
      }
      DMConversation: {
        payload: Prisma.$DMConversationPayload<ExtArgs>
        fields: Prisma.DMConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DMConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DMConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          findFirst: {
            args: Prisma.DMConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DMConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          findMany: {
            args: Prisma.DMConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>[]
          }
          create: {
            args: Prisma.DMConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          createMany: {
            args: Prisma.DMConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DMConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>[]
          }
          delete: {
            args: Prisma.DMConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          update: {
            args: Prisma.DMConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          deleteMany: {
            args: Prisma.DMConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DMConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DMConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>[]
          }
          upsert: {
            args: Prisma.DMConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DMConversationPayload>
          }
          aggregate: {
            args: Prisma.DMConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDMConversation>
          }
          groupBy: {
            args: Prisma.DMConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DMConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DMConversationCountArgs<ExtArgs>
            result: $Utils.Optional<DMConversationCountAggregateOutputType> | number
          }
        }
      }
      BlockedUser: {
        payload: Prisma.$BlockedUserPayload<ExtArgs>
        fields: Prisma.BlockedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findFirst: {
            args: Prisma.BlockedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findMany: {
            args: Prisma.BlockedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          create: {
            args: Prisma.BlockedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          createMany: {
            args: Prisma.BlockedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          delete: {
            args: Prisma.BlockedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          update: {
            args: Prisma.BlockedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          deleteMany: {
            args: Prisma.BlockedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          upsert: {
            args: Prisma.BlockedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          aggregate: {
            args: Prisma.BlockedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedUser>
          }
          groupBy: {
            args: Prisma.BlockedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedUserCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserCountAggregateOutputType> | number
          }
        }
      }
      MutedConversation: {
        payload: Prisma.$MutedConversationPayload<ExtArgs>
        fields: Prisma.MutedConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MutedConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MutedConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          findFirst: {
            args: Prisma.MutedConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MutedConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          findMany: {
            args: Prisma.MutedConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>[]
          }
          create: {
            args: Prisma.MutedConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          createMany: {
            args: Prisma.MutedConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MutedConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>[]
          }
          delete: {
            args: Prisma.MutedConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          update: {
            args: Prisma.MutedConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          deleteMany: {
            args: Prisma.MutedConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MutedConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MutedConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>[]
          }
          upsert: {
            args: Prisma.MutedConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MutedConversationPayload>
          }
          aggregate: {
            args: Prisma.MutedConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMutedConversation>
          }
          groupBy: {
            args: Prisma.MutedConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MutedConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MutedConversationCountArgs<ExtArgs>
            result: $Utils.Optional<MutedConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageStatus_: {
        payload: Prisma.$MessageStatus_Payload<ExtArgs>
        fields: Prisma.MessageStatus_FieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageStatus_FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageStatus_FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          findFirst: {
            args: Prisma.MessageStatus_FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageStatus_FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          findMany: {
            args: Prisma.MessageStatus_FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>[]
          }
          create: {
            args: Prisma.MessageStatus_CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          createMany: {
            args: Prisma.MessageStatus_CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageStatus_CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>[]
          }
          delete: {
            args: Prisma.MessageStatus_DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          update: {
            args: Prisma.MessageStatus_UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          deleteMany: {
            args: Prisma.MessageStatus_DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageStatus_UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageStatus_UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>[]
          }
          upsert: {
            args: Prisma.MessageStatus_UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageStatus_Payload>
          }
          aggregate: {
            args: Prisma.MessageStatus_AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageStatus_>
          }
          groupBy: {
            args: Prisma.MessageStatus_GroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageStatus_GroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageStatus_CountArgs<ExtArgs>
            result: $Utils.Optional<MessageStatus_CountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      PinnedMessage: {
        payload: Prisma.$PinnedMessagePayload<ExtArgs>
        fields: Prisma.PinnedMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PinnedMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PinnedMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          findFirst: {
            args: Prisma.PinnedMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PinnedMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          findMany: {
            args: Prisma.PinnedMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>[]
          }
          create: {
            args: Prisma.PinnedMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          createMany: {
            args: Prisma.PinnedMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PinnedMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>[]
          }
          delete: {
            args: Prisma.PinnedMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          update: {
            args: Prisma.PinnedMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          deleteMany: {
            args: Prisma.PinnedMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PinnedMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PinnedMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>[]
          }
          upsert: {
            args: Prisma.PinnedMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PinnedMessagePayload>
          }
          aggregate: {
            args: Prisma.PinnedMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePinnedMessage>
          }
          groupBy: {
            args: Prisma.PinnedMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PinnedMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PinnedMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PinnedMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    deviceSession?: DeviceSessionOmit
    room?: RoomOmit
    roomModerator?: RoomModeratorOmit
    dMConversation?: DMConversationOmit
    blockedUser?: BlockedUserOmit
    mutedConversation?: MutedConversationOmit
    message?: MessageOmit
    messageStatus_?: MessageStatus_Omit
    reaction?: ReactionOmit
    pinnedMessage?: PinnedMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    deviceSessions: number
    roomModerations: number
    dmConversations1: number
    dmConversations2: number
    sentMessages: number
    messageStatuses: number
    reactions: number
    blockedUsers: number
    blockedByUsers: number
    mutedItems: number
    pinnedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceSessions?: boolean | UserCountOutputTypeCountDeviceSessionsArgs
    roomModerations?: boolean | UserCountOutputTypeCountRoomModerationsArgs
    dmConversations1?: boolean | UserCountOutputTypeCountDmConversations1Args
    dmConversations2?: boolean | UserCountOutputTypeCountDmConversations2Args
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    messageStatuses?: boolean | UserCountOutputTypeCountMessageStatusesArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    blockedUsers?: boolean | UserCountOutputTypeCountBlockedUsersArgs
    blockedByUsers?: boolean | UserCountOutputTypeCountBlockedByUsersArgs
    mutedItems?: boolean | UserCountOutputTypeCountMutedItemsArgs
    pinnedMessages?: boolean | UserCountOutputTypeCountPinnedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeviceSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomModerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomModeratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDmConversations1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DMConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDmConversations2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DMConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageStatus_WhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMutedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MutedConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPinnedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedMessageWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    moderators: number
    messages: number
    pins: number
    mutedBy: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderators?: boolean | RoomCountOutputTypeCountModeratorsArgs
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
    pins?: boolean | RoomCountOutputTypeCountPinsArgs
    mutedBy?: boolean | RoomCountOutputTypeCountMutedByArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountModeratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomModeratorWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedMessageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMutedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MutedConversationWhereInput
  }


  /**
   * Count Type DMConversationCountOutputType
   */

  export type DMConversationCountOutputType = {
    messages: number
    mutedBy: number
  }

  export type DMConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | DMConversationCountOutputTypeCountMessagesArgs
    mutedBy?: boolean | DMConversationCountOutputTypeCountMutedByArgs
  }

  // Custom InputTypes
  /**
   * DMConversationCountOutputType without action
   */
  export type DMConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversationCountOutputType
     */
    select?: DMConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DMConversationCountOutputType without action
   */
  export type DMConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * DMConversationCountOutputType without action
   */
  export type DMConversationCountOutputTypeCountMutedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MutedConversationWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    replies: number
    statuses: number
    reactions: number
    pins: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | MessageCountOutputTypeCountRepliesArgs
    statuses?: boolean | MessageCountOutputTypeCountStatusesArgs
    reactions?: boolean | MessageCountOutputTypeCountReactionsArgs
    pins?: boolean | MessageCountOutputTypeCountPinsArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageStatus_WhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountPinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    handle: string | null
    name: string | null
    passwordHash: string | null
    avatarUrl: string | null
    bio: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isVerified: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    handle: string | null
    name: string | null
    passwordHash: string | null
    avatarUrl: string | null
    bio: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isVerified: boolean | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    handle: number
    name: number
    passwordHash: number
    avatarUrl: number
    bio: number
    role: number
    permissions: number
    isActive: number
    isVerified: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    handle?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    bio?: true
    role?: true
    isActive?: true
    isVerified?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    handle?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    bio?: true
    role?: true
    isActive?: true
    isVerified?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    handle?: true
    name?: true
    passwordHash?: true
    avatarUrl?: true
    bio?: true
    role?: true
    permissions?: true
    isActive?: true
    isVerified?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl: string | null
    bio: string | null
    role: $Enums.UserRole
    permissions: string[]
    isActive: boolean
    isVerified: boolean
    lastSeenAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    handle?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    bio?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deviceSessions?: boolean | User$deviceSessionsArgs<ExtArgs>
    roomModerations?: boolean | User$roomModerationsArgs<ExtArgs>
    dmConversations1?: boolean | User$dmConversations1Args<ExtArgs>
    dmConversations2?: boolean | User$dmConversations2Args<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    messageStatuses?: boolean | User$messageStatusesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    blockedByUsers?: boolean | User$blockedByUsersArgs<ExtArgs>
    mutedItems?: boolean | User$mutedItemsArgs<ExtArgs>
    pinnedMessages?: boolean | User$pinnedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    handle?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    bio?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    handle?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    bio?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    handle?: boolean
    name?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    bio?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "handle" | "name" | "passwordHash" | "avatarUrl" | "bio" | "role" | "permissions" | "isActive" | "isVerified" | "lastSeenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deviceSessions?: boolean | User$deviceSessionsArgs<ExtArgs>
    roomModerations?: boolean | User$roomModerationsArgs<ExtArgs>
    dmConversations1?: boolean | User$dmConversations1Args<ExtArgs>
    dmConversations2?: boolean | User$dmConversations2Args<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    messageStatuses?: boolean | User$messageStatusesArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    blockedByUsers?: boolean | User$blockedByUsersArgs<ExtArgs>
    mutedItems?: boolean | User$mutedItemsArgs<ExtArgs>
    pinnedMessages?: boolean | User$pinnedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      deviceSessions: Prisma.$DeviceSessionPayload<ExtArgs>[]
      roomModerations: Prisma.$RoomModeratorPayload<ExtArgs>[]
      dmConversations1: Prisma.$DMConversationPayload<ExtArgs>[]
      dmConversations2: Prisma.$DMConversationPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      messageStatuses: Prisma.$MessageStatus_Payload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      blockedUsers: Prisma.$BlockedUserPayload<ExtArgs>[]
      blockedByUsers: Prisma.$BlockedUserPayload<ExtArgs>[]
      mutedItems: Prisma.$MutedConversationPayload<ExtArgs>[]
      pinnedMessages: Prisma.$PinnedMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      handle: string
      name: string
      passwordHash: string
      avatarUrl: string | null
      bio: string | null
      role: $Enums.UserRole
      permissions: string[]
      isActive: boolean
      isVerified: boolean
      lastSeenAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deviceSessions<T extends User$deviceSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$deviceSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roomModerations<T extends User$roomModerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomModerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dmConversations1<T extends User$dmConversations1Args<ExtArgs> = {}>(args?: Subset<T, User$dmConversations1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dmConversations2<T extends User$dmConversations2Args<ExtArgs> = {}>(args?: Subset<T, User$dmConversations2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messageStatuses<T extends User$messageStatusesArgs<ExtArgs> = {}>(args?: Subset<T, User$messageStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedUsers<T extends User$blockedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedByUsers<T extends User$blockedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mutedItems<T extends User$mutedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$mutedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pinnedMessages<T extends User$pinnedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$pinnedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly handle: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly permissions: FieldRef<"User", 'String[]'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lastSeenAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.deviceSessions
   */
  export type User$deviceSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    cursor?: DeviceSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * User.roomModerations
   */
  export type User$roomModerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    where?: RoomModeratorWhereInput
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    cursor?: RoomModeratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomModeratorScalarFieldEnum | RoomModeratorScalarFieldEnum[]
  }

  /**
   * User.dmConversations1
   */
  export type User$dmConversations1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    where?: DMConversationWhereInput
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    cursor?: DMConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DMConversationScalarFieldEnum | DMConversationScalarFieldEnum[]
  }

  /**
   * User.dmConversations2
   */
  export type User$dmConversations2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    where?: DMConversationWhereInput
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    cursor?: DMConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DMConversationScalarFieldEnum | DMConversationScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messageStatuses
   */
  export type User$messageStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    where?: MessageStatus_WhereInput
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    cursor?: MessageStatus_WhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageStatus_ScalarFieldEnum | MessageStatus_ScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.blockedUsers
   */
  export type User$blockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * User.blockedByUsers
   */
  export type User$blockedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * User.mutedItems
   */
  export type User$mutedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    where?: MutedConversationWhereInput
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    cursor?: MutedConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * User.pinnedMessages
   */
  export type User$pinnedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    where?: PinnedMessageWhereInput
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    cursor?: PinnedMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DeviceSession
   */

  export type AggregateDeviceSession = {
    _count: DeviceSessionCountAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  export type DeviceSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    platform: $Enums.DevicePlatform | null
    pushToken: string | null
    refreshTokenHash: string | null
    deviceName: string | null
    deviceModel: string | null
    ipAddress: string | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    platform: $Enums.DevicePlatform | null
    pushToken: string | null
    refreshTokenHash: string | null
    deviceName: string | null
    deviceModel: string | null
    ipAddress: string | null
    lastSeenAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceSessionCountAggregateOutputType = {
    id: number
    userId: number
    deviceId: number
    platform: number
    pushToken: number
    refreshTokenHash: number
    deviceName: number
    deviceModel: number
    ipAddress: number
    lastSeenAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceSessionMinAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    platform?: true
    pushToken?: true
    refreshTokenHash?: true
    deviceName?: true
    deviceModel?: true
    ipAddress?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    platform?: true
    pushToken?: true
    refreshTokenHash?: true
    deviceName?: true
    deviceModel?: true
    ipAddress?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceSessionCountAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    platform?: true
    pushToken?: true
    refreshTokenHash?: true
    deviceName?: true
    deviceModel?: true
    ipAddress?: true
    lastSeenAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSession to aggregate.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceSessions
    **/
    _count?: true | DeviceSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type GetDeviceSessionAggregateType<T extends DeviceSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceSession[P]>
      : GetScalarType<T[P], AggregateDeviceSession[P]>
  }




  export type DeviceSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceSessionWhereInput
    orderBy?: DeviceSessionOrderByWithAggregationInput | DeviceSessionOrderByWithAggregationInput[]
    by: DeviceSessionScalarFieldEnum[] | DeviceSessionScalarFieldEnum
    having?: DeviceSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceSessionCountAggregateInputType | true
    _min?: DeviceSessionMinAggregateInputType
    _max?: DeviceSessionMaxAggregateInputType
  }

  export type DeviceSessionGroupByOutputType = {
    id: string
    userId: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken: string | null
    refreshTokenHash: string
    deviceName: string | null
    deviceModel: string | null
    ipAddress: string | null
    lastSeenAt: Date
    createdAt: Date
    updatedAt: Date
    _count: DeviceSessionCountAggregateOutputType | null
    _min: DeviceSessionMinAggregateOutputType | null
    _max: DeviceSessionMaxAggregateOutputType | null
  }

  type GetDeviceSessionGroupByPayload<T extends DeviceSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceSessionGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    platform?: boolean
    pushToken?: boolean
    refreshTokenHash?: boolean
    deviceName?: boolean
    deviceModel?: boolean
    ipAddress?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    platform?: boolean
    pushToken?: boolean
    refreshTokenHash?: boolean
    deviceName?: boolean
    deviceModel?: boolean
    ipAddress?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    platform?: boolean
    pushToken?: boolean
    refreshTokenHash?: boolean
    deviceName?: boolean
    deviceModel?: boolean
    ipAddress?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceSession"]>

  export type DeviceSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    platform?: boolean
    pushToken?: boolean
    refreshTokenHash?: boolean
    deviceName?: boolean
    deviceModel?: boolean
    ipAddress?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceId" | "platform" | "pushToken" | "refreshTokenHash" | "deviceName" | "deviceModel" | "ipAddress" | "lastSeenAt" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceSession"]>
  export type DeviceSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeviceSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceId: string
      platform: $Enums.DevicePlatform
      pushToken: string | null
      refreshTokenHash: string
      deviceName: string | null
      deviceModel: string | null
      ipAddress: string | null
      lastSeenAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceSession"]>
    composites: {}
  }

  type DeviceSessionGetPayload<S extends boolean | null | undefined | DeviceSessionDefaultArgs> = $Result.GetResult<Prisma.$DeviceSessionPayload, S>

  type DeviceSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceSessionCountAggregateInputType | true
    }

  export interface DeviceSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceSession'], meta: { name: 'DeviceSession' } }
    /**
     * Find zero or one DeviceSession that matches the filter.
     * @param {DeviceSessionFindUniqueArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceSessionFindUniqueArgs>(args: SelectSubset<T, DeviceSessionFindUniqueArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceSessionFindUniqueOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceSessionFindFirstArgs>(args?: SelectSubset<T, DeviceSessionFindFirstArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindFirstOrThrowArgs} args - Arguments to find a DeviceSession
     * @example
     * // Get one DeviceSession
     * const deviceSession = await prisma.deviceSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany()
     * 
     * // Get first 10 DeviceSessions
     * const deviceSessions = await prisma.deviceSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceSessionFindManyArgs>(args?: SelectSubset<T, DeviceSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceSession.
     * @param {DeviceSessionCreateArgs} args - Arguments to create a DeviceSession.
     * @example
     * // Create one DeviceSession
     * const DeviceSession = await prisma.deviceSession.create({
     *   data: {
     *     // ... data to create a DeviceSession
     *   }
     * })
     * 
     */
    create<T extends DeviceSessionCreateArgs>(args: SelectSubset<T, DeviceSessionCreateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceSessions.
     * @param {DeviceSessionCreateManyArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceSessionCreateManyArgs>(args?: SelectSubset<T, DeviceSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceSessions and returns the data saved in the database.
     * @param {DeviceSessionCreateManyAndReturnArgs} args - Arguments to create many DeviceSessions.
     * @example
     * // Create many DeviceSessions
     * const deviceSession = await prisma.deviceSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceSessions and only return the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceSession.
     * @param {DeviceSessionDeleteArgs} args - Arguments to delete one DeviceSession.
     * @example
     * // Delete one DeviceSession
     * const DeviceSession = await prisma.deviceSession.delete({
     *   where: {
     *     // ... filter to delete one DeviceSession
     *   }
     * })
     * 
     */
    delete<T extends DeviceSessionDeleteArgs>(args: SelectSubset<T, DeviceSessionDeleteArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceSession.
     * @param {DeviceSessionUpdateArgs} args - Arguments to update one DeviceSession.
     * @example
     * // Update one DeviceSession
     * const deviceSession = await prisma.deviceSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceSessionUpdateArgs>(args: SelectSubset<T, DeviceSessionUpdateArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceSessions.
     * @param {DeviceSessionDeleteManyArgs} args - Arguments to filter DeviceSessions to delete.
     * @example
     * // Delete a few DeviceSessions
     * const { count } = await prisma.deviceSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceSessionDeleteManyArgs>(args?: SelectSubset<T, DeviceSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceSessions
     * const deviceSession = await prisma.deviceSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceSessionUpdateManyArgs>(args: SelectSubset<T, DeviceSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceSessions and returns the data updated in the database.
     * @param {DeviceSessionUpdateManyAndReturnArgs} args - Arguments to update many DeviceSessions.
     * @example
     * // Update many DeviceSessions
     * const deviceSession = await prisma.deviceSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceSessions and only return the `id`
     * const deviceSessionWithIdOnly = await prisma.deviceSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceSession.
     * @param {DeviceSessionUpsertArgs} args - Arguments to update or create a DeviceSession.
     * @example
     * // Update or create a DeviceSession
     * const deviceSession = await prisma.deviceSession.upsert({
     *   create: {
     *     // ... data to create a DeviceSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceSession we want to update
     *   }
     * })
     */
    upsert<T extends DeviceSessionUpsertArgs>(args: SelectSubset<T, DeviceSessionUpsertArgs<ExtArgs>>): Prisma__DeviceSessionClient<$Result.GetResult<Prisma.$DeviceSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionCountArgs} args - Arguments to filter DeviceSessions to count.
     * @example
     * // Count the number of DeviceSessions
     * const count = await prisma.deviceSession.count({
     *   where: {
     *     // ... the filter for the DeviceSessions we want to count
     *   }
     * })
    **/
    count<T extends DeviceSessionCountArgs>(
      args?: Subset<T, DeviceSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceSessionAggregateArgs>(args: Subset<T, DeviceSessionAggregateArgs>): Prisma.PrismaPromise<GetDeviceSessionAggregateType<T>>

    /**
     * Group by DeviceSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceSessionGroupByArgs['orderBy'] }
        : { orderBy?: DeviceSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceSession model
   */
  readonly fields: DeviceSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceSession model
   */
  interface DeviceSessionFieldRefs {
    readonly id: FieldRef<"DeviceSession", 'String'>
    readonly userId: FieldRef<"DeviceSession", 'String'>
    readonly deviceId: FieldRef<"DeviceSession", 'String'>
    readonly platform: FieldRef<"DeviceSession", 'DevicePlatform'>
    readonly pushToken: FieldRef<"DeviceSession", 'String'>
    readonly refreshTokenHash: FieldRef<"DeviceSession", 'String'>
    readonly deviceName: FieldRef<"DeviceSession", 'String'>
    readonly deviceModel: FieldRef<"DeviceSession", 'String'>
    readonly ipAddress: FieldRef<"DeviceSession", 'String'>
    readonly lastSeenAt: FieldRef<"DeviceSession", 'DateTime'>
    readonly createdAt: FieldRef<"DeviceSession", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceSession findUnique
   */
  export type DeviceSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findUniqueOrThrow
   */
  export type DeviceSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession findFirst
   */
  export type DeviceSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findFirstOrThrow
   */
  export type DeviceSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSession to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession findMany
   */
  export type DeviceSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter, which DeviceSessions to fetch.
     */
    where?: DeviceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceSessions to fetch.
     */
    orderBy?: DeviceSessionOrderByWithRelationInput | DeviceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceSessions.
     */
    cursor?: DeviceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceSessions.
     */
    distinct?: DeviceSessionScalarFieldEnum | DeviceSessionScalarFieldEnum[]
  }

  /**
   * DeviceSession create
   */
  export type DeviceSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceSession.
     */
    data: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
  }

  /**
   * DeviceSession createMany
   */
  export type DeviceSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceSession createManyAndReturn
   */
  export type DeviceSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceSessions.
     */
    data: DeviceSessionCreateManyInput | DeviceSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSession update
   */
  export type DeviceSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceSession.
     */
    data: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
    /**
     * Choose, which DeviceSession to update.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession updateMany
   */
  export type DeviceSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
  }

  /**
   * DeviceSession updateManyAndReturn
   */
  export type DeviceSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * The data used to update DeviceSessions.
     */
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyInput>
    /**
     * Filter which DeviceSessions to update
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceSession upsert
   */
  export type DeviceSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceSession to update in case it exists.
     */
    where: DeviceSessionWhereUniqueInput
    /**
     * In case the DeviceSession found by the `where` argument doesn't exist, create a new DeviceSession with this data.
     */
    create: XOR<DeviceSessionCreateInput, DeviceSessionUncheckedCreateInput>
    /**
     * In case the DeviceSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceSessionUpdateInput, DeviceSessionUncheckedUpdateInput>
  }

  /**
   * DeviceSession delete
   */
  export type DeviceSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
    /**
     * Filter which DeviceSession to delete.
     */
    where: DeviceSessionWhereUniqueInput
  }

  /**
   * DeviceSession deleteMany
   */
  export type DeviceSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceSessions to delete
     */
    where?: DeviceSessionWhereInput
    /**
     * Limit how many DeviceSessions to delete.
     */
    limit?: number
  }

  /**
   * DeviceSession without action
   */
  export type DeviceSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceSession
     */
    select?: DeviceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceSession
     */
    omit?: DeviceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceSessionInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    slowModeSeconds: number | null
  }

  export type RoomSumAggregateOutputType = {
    slowModeSeconds: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatarUrl: string | null
    category: string | null
    status: $Enums.RoomStatus | null
    slowModeSeconds: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatarUrl: string | null
    category: string | null
    status: $Enums.RoomStatus | null
    slowModeSeconds: number | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    avatarUrl: number
    category: number
    tags: number
    status: number
    slowModeSeconds: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    slowModeSeconds?: true
  }

  export type RoomSumAggregateInputType = {
    slowModeSeconds?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarUrl?: true
    category?: true
    status?: true
    slowModeSeconds?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarUrl?: true
    category?: true
    status?: true
    slowModeSeconds?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatarUrl?: true
    category?: true
    tags?: true
    status?: true
    slowModeSeconds?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    avatarUrl: string | null
    category: string
    tags: string[]
    status: $Enums.RoomStatus
    slowModeSeconds: number | null
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    slowModeSeconds?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    moderators?: boolean | Room$moderatorsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    pins?: boolean | Room$pinsArgs<ExtArgs>
    mutedBy?: boolean | Room$mutedByArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    slowModeSeconds?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    slowModeSeconds?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatarUrl?: boolean
    category?: boolean
    tags?: boolean
    status?: boolean
    slowModeSeconds?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "avatarUrl" | "category" | "tags" | "status" | "slowModeSeconds" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moderators?: boolean | Room$moderatorsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    pins?: boolean | Room$pinsArgs<ExtArgs>
    mutedBy?: boolean | Room$mutedByArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      moderators: Prisma.$RoomModeratorPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      pins: Prisma.$PinnedMessagePayload<ExtArgs>[]
      mutedBy: Prisma.$MutedConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      avatarUrl: string | null
      category: string
      tags: string[]
      status: $Enums.RoomStatus
      slowModeSeconds: number | null
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    moderators<T extends Room$moderatorsArgs<ExtArgs> = {}>(args?: Subset<T, Room$moderatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pins<T extends Room$pinsArgs<ExtArgs> = {}>(args?: Subset<T, Room$pinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mutedBy<T extends Room$mutedByArgs<ExtArgs> = {}>(args?: Subset<T, Room$mutedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly slug: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly avatarUrl: FieldRef<"Room", 'String'>
    readonly category: FieldRef<"Room", 'String'>
    readonly tags: FieldRef<"Room", 'String[]'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly slowModeSeconds: FieldRef<"Room", 'Int'>
    readonly createdBy: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.moderators
   */
  export type Room$moderatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    where?: RoomModeratorWhereInput
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    cursor?: RoomModeratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomModeratorScalarFieldEnum | RoomModeratorScalarFieldEnum[]
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Room.pins
   */
  export type Room$pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    where?: PinnedMessageWhereInput
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    cursor?: PinnedMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * Room.mutedBy
   */
  export type Room$mutedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    where?: MutedConversationWhereInput
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    cursor?: MutedConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomModerator
   */

  export type AggregateRoomModerator = {
    _count: RoomModeratorCountAggregateOutputType | null
    _min: RoomModeratorMinAggregateOutputType | null
    _max: RoomModeratorMaxAggregateOutputType | null
  }

  export type RoomModeratorMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    assignedBy: string | null
    assignedAt: Date | null
  }

  export type RoomModeratorMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    userId: string | null
    assignedBy: string | null
    assignedAt: Date | null
  }

  export type RoomModeratorCountAggregateOutputType = {
    id: number
    roomId: number
    userId: number
    assignedBy: number
    assignedAt: number
    _all: number
  }


  export type RoomModeratorMinAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    assignedBy?: true
    assignedAt?: true
  }

  export type RoomModeratorMaxAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    assignedBy?: true
    assignedAt?: true
  }

  export type RoomModeratorCountAggregateInputType = {
    id?: true
    roomId?: true
    userId?: true
    assignedBy?: true
    assignedAt?: true
    _all?: true
  }

  export type RoomModeratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomModerator to aggregate.
     */
    where?: RoomModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomModerators to fetch.
     */
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomModerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomModerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomModerators
    **/
    _count?: true | RoomModeratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomModeratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomModeratorMaxAggregateInputType
  }

  export type GetRoomModeratorAggregateType<T extends RoomModeratorAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomModerator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomModerator[P]>
      : GetScalarType<T[P], AggregateRoomModerator[P]>
  }




  export type RoomModeratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomModeratorWhereInput
    orderBy?: RoomModeratorOrderByWithAggregationInput | RoomModeratorOrderByWithAggregationInput[]
    by: RoomModeratorScalarFieldEnum[] | RoomModeratorScalarFieldEnum
    having?: RoomModeratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomModeratorCountAggregateInputType | true
    _min?: RoomModeratorMinAggregateInputType
    _max?: RoomModeratorMaxAggregateInputType
  }

  export type RoomModeratorGroupByOutputType = {
    id: string
    roomId: string
    userId: string
    assignedBy: string
    assignedAt: Date
    _count: RoomModeratorCountAggregateOutputType | null
    _min: RoomModeratorMinAggregateOutputType | null
    _max: RoomModeratorMaxAggregateOutputType | null
  }

  type GetRoomModeratorGroupByPayload<T extends RoomModeratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomModeratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomModeratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomModeratorGroupByOutputType[P]>
            : GetScalarType<T[P], RoomModeratorGroupByOutputType[P]>
        }
      >
    >


  export type RoomModeratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomModerator"]>

  export type RoomModeratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomModerator"]>

  export type RoomModeratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    userId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomModerator"]>

  export type RoomModeratorSelectScalar = {
    id?: boolean
    roomId?: boolean
    userId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
  }

  export type RoomModeratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "userId" | "assignedBy" | "assignedAt", ExtArgs["result"]["roomModerator"]>
  export type RoomModeratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomModeratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomModeratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomModeratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomModerator"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      userId: string
      assignedBy: string
      assignedAt: Date
    }, ExtArgs["result"]["roomModerator"]>
    composites: {}
  }

  type RoomModeratorGetPayload<S extends boolean | null | undefined | RoomModeratorDefaultArgs> = $Result.GetResult<Prisma.$RoomModeratorPayload, S>

  type RoomModeratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomModeratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomModeratorCountAggregateInputType | true
    }

  export interface RoomModeratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomModerator'], meta: { name: 'RoomModerator' } }
    /**
     * Find zero or one RoomModerator that matches the filter.
     * @param {RoomModeratorFindUniqueArgs} args - Arguments to find a RoomModerator
     * @example
     * // Get one RoomModerator
     * const roomModerator = await prisma.roomModerator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomModeratorFindUniqueArgs>(args: SelectSubset<T, RoomModeratorFindUniqueArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomModerator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomModeratorFindUniqueOrThrowArgs} args - Arguments to find a RoomModerator
     * @example
     * // Get one RoomModerator
     * const roomModerator = await prisma.roomModerator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomModeratorFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomModeratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomModerator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorFindFirstArgs} args - Arguments to find a RoomModerator
     * @example
     * // Get one RoomModerator
     * const roomModerator = await prisma.roomModerator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomModeratorFindFirstArgs>(args?: SelectSubset<T, RoomModeratorFindFirstArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomModerator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorFindFirstOrThrowArgs} args - Arguments to find a RoomModerator
     * @example
     * // Get one RoomModerator
     * const roomModerator = await prisma.roomModerator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomModeratorFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomModeratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomModerators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomModerators
     * const roomModerators = await prisma.roomModerator.findMany()
     * 
     * // Get first 10 RoomModerators
     * const roomModerators = await prisma.roomModerator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomModeratorWithIdOnly = await prisma.roomModerator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomModeratorFindManyArgs>(args?: SelectSubset<T, RoomModeratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomModerator.
     * @param {RoomModeratorCreateArgs} args - Arguments to create a RoomModerator.
     * @example
     * // Create one RoomModerator
     * const RoomModerator = await prisma.roomModerator.create({
     *   data: {
     *     // ... data to create a RoomModerator
     *   }
     * })
     * 
     */
    create<T extends RoomModeratorCreateArgs>(args: SelectSubset<T, RoomModeratorCreateArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomModerators.
     * @param {RoomModeratorCreateManyArgs} args - Arguments to create many RoomModerators.
     * @example
     * // Create many RoomModerators
     * const roomModerator = await prisma.roomModerator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomModeratorCreateManyArgs>(args?: SelectSubset<T, RoomModeratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomModerators and returns the data saved in the database.
     * @param {RoomModeratorCreateManyAndReturnArgs} args - Arguments to create many RoomModerators.
     * @example
     * // Create many RoomModerators
     * const roomModerator = await prisma.roomModerator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomModerators and only return the `id`
     * const roomModeratorWithIdOnly = await prisma.roomModerator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomModeratorCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomModeratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomModerator.
     * @param {RoomModeratorDeleteArgs} args - Arguments to delete one RoomModerator.
     * @example
     * // Delete one RoomModerator
     * const RoomModerator = await prisma.roomModerator.delete({
     *   where: {
     *     // ... filter to delete one RoomModerator
     *   }
     * })
     * 
     */
    delete<T extends RoomModeratorDeleteArgs>(args: SelectSubset<T, RoomModeratorDeleteArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomModerator.
     * @param {RoomModeratorUpdateArgs} args - Arguments to update one RoomModerator.
     * @example
     * // Update one RoomModerator
     * const roomModerator = await prisma.roomModerator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomModeratorUpdateArgs>(args: SelectSubset<T, RoomModeratorUpdateArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomModerators.
     * @param {RoomModeratorDeleteManyArgs} args - Arguments to filter RoomModerators to delete.
     * @example
     * // Delete a few RoomModerators
     * const { count } = await prisma.roomModerator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomModeratorDeleteManyArgs>(args?: SelectSubset<T, RoomModeratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomModerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomModerators
     * const roomModerator = await prisma.roomModerator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomModeratorUpdateManyArgs>(args: SelectSubset<T, RoomModeratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomModerators and returns the data updated in the database.
     * @param {RoomModeratorUpdateManyAndReturnArgs} args - Arguments to update many RoomModerators.
     * @example
     * // Update many RoomModerators
     * const roomModerator = await prisma.roomModerator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomModerators and only return the `id`
     * const roomModeratorWithIdOnly = await prisma.roomModerator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomModeratorUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomModeratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomModerator.
     * @param {RoomModeratorUpsertArgs} args - Arguments to update or create a RoomModerator.
     * @example
     * // Update or create a RoomModerator
     * const roomModerator = await prisma.roomModerator.upsert({
     *   create: {
     *     // ... data to create a RoomModerator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomModerator we want to update
     *   }
     * })
     */
    upsert<T extends RoomModeratorUpsertArgs>(args: SelectSubset<T, RoomModeratorUpsertArgs<ExtArgs>>): Prisma__RoomModeratorClient<$Result.GetResult<Prisma.$RoomModeratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomModerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorCountArgs} args - Arguments to filter RoomModerators to count.
     * @example
     * // Count the number of RoomModerators
     * const count = await prisma.roomModerator.count({
     *   where: {
     *     // ... the filter for the RoomModerators we want to count
     *   }
     * })
    **/
    count<T extends RoomModeratorCountArgs>(
      args?: Subset<T, RoomModeratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomModeratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomModerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomModeratorAggregateArgs>(args: Subset<T, RoomModeratorAggregateArgs>): Prisma.PrismaPromise<GetRoomModeratorAggregateType<T>>

    /**
     * Group by RoomModerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomModeratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomModeratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomModeratorGroupByArgs['orderBy'] }
        : { orderBy?: RoomModeratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomModeratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomModeratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomModerator model
   */
  readonly fields: RoomModeratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomModerator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomModeratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomModerator model
   */
  interface RoomModeratorFieldRefs {
    readonly id: FieldRef<"RoomModerator", 'String'>
    readonly roomId: FieldRef<"RoomModerator", 'String'>
    readonly userId: FieldRef<"RoomModerator", 'String'>
    readonly assignedBy: FieldRef<"RoomModerator", 'String'>
    readonly assignedAt: FieldRef<"RoomModerator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomModerator findUnique
   */
  export type RoomModeratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter, which RoomModerator to fetch.
     */
    where: RoomModeratorWhereUniqueInput
  }

  /**
   * RoomModerator findUniqueOrThrow
   */
  export type RoomModeratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter, which RoomModerator to fetch.
     */
    where: RoomModeratorWhereUniqueInput
  }

  /**
   * RoomModerator findFirst
   */
  export type RoomModeratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter, which RoomModerator to fetch.
     */
    where?: RoomModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomModerators to fetch.
     */
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomModerators.
     */
    cursor?: RoomModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomModerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomModerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomModerators.
     */
    distinct?: RoomModeratorScalarFieldEnum | RoomModeratorScalarFieldEnum[]
  }

  /**
   * RoomModerator findFirstOrThrow
   */
  export type RoomModeratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter, which RoomModerator to fetch.
     */
    where?: RoomModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomModerators to fetch.
     */
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomModerators.
     */
    cursor?: RoomModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomModerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomModerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomModerators.
     */
    distinct?: RoomModeratorScalarFieldEnum | RoomModeratorScalarFieldEnum[]
  }

  /**
   * RoomModerator findMany
   */
  export type RoomModeratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter, which RoomModerators to fetch.
     */
    where?: RoomModeratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomModerators to fetch.
     */
    orderBy?: RoomModeratorOrderByWithRelationInput | RoomModeratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomModerators.
     */
    cursor?: RoomModeratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomModerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomModerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomModerators.
     */
    distinct?: RoomModeratorScalarFieldEnum | RoomModeratorScalarFieldEnum[]
  }

  /**
   * RoomModerator create
   */
  export type RoomModeratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomModerator.
     */
    data: XOR<RoomModeratorCreateInput, RoomModeratorUncheckedCreateInput>
  }

  /**
   * RoomModerator createMany
   */
  export type RoomModeratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomModerators.
     */
    data: RoomModeratorCreateManyInput | RoomModeratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomModerator createManyAndReturn
   */
  export type RoomModeratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * The data used to create many RoomModerators.
     */
    data: RoomModeratorCreateManyInput | RoomModeratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomModerator update
   */
  export type RoomModeratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomModerator.
     */
    data: XOR<RoomModeratorUpdateInput, RoomModeratorUncheckedUpdateInput>
    /**
     * Choose, which RoomModerator to update.
     */
    where: RoomModeratorWhereUniqueInput
  }

  /**
   * RoomModerator updateMany
   */
  export type RoomModeratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomModerators.
     */
    data: XOR<RoomModeratorUpdateManyMutationInput, RoomModeratorUncheckedUpdateManyInput>
    /**
     * Filter which RoomModerators to update
     */
    where?: RoomModeratorWhereInput
    /**
     * Limit how many RoomModerators to update.
     */
    limit?: number
  }

  /**
   * RoomModerator updateManyAndReturn
   */
  export type RoomModeratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * The data used to update RoomModerators.
     */
    data: XOR<RoomModeratorUpdateManyMutationInput, RoomModeratorUncheckedUpdateManyInput>
    /**
     * Filter which RoomModerators to update
     */
    where?: RoomModeratorWhereInput
    /**
     * Limit how many RoomModerators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomModerator upsert
   */
  export type RoomModeratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomModerator to update in case it exists.
     */
    where: RoomModeratorWhereUniqueInput
    /**
     * In case the RoomModerator found by the `where` argument doesn't exist, create a new RoomModerator with this data.
     */
    create: XOR<RoomModeratorCreateInput, RoomModeratorUncheckedCreateInput>
    /**
     * In case the RoomModerator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomModeratorUpdateInput, RoomModeratorUncheckedUpdateInput>
  }

  /**
   * RoomModerator delete
   */
  export type RoomModeratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
    /**
     * Filter which RoomModerator to delete.
     */
    where: RoomModeratorWhereUniqueInput
  }

  /**
   * RoomModerator deleteMany
   */
  export type RoomModeratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomModerators to delete
     */
    where?: RoomModeratorWhereInput
    /**
     * Limit how many RoomModerators to delete.
     */
    limit?: number
  }

  /**
   * RoomModerator without action
   */
  export type RoomModeratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomModerator
     */
    select?: RoomModeratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomModerator
     */
    omit?: RoomModeratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomModeratorInclude<ExtArgs> | null
  }


  /**
   * Model DMConversation
   */

  export type AggregateDMConversation = {
    _count: DMConversationCountAggregateOutputType | null
    _min: DMConversationMinAggregateOutputType | null
    _max: DMConversationMaxAggregateOutputType | null
  }

  export type DMConversationMinAggregateOutputType = {
    id: string | null
    participant1Id: string | null
    participant2Id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DMConversationMaxAggregateOutputType = {
    id: string | null
    participant1Id: string | null
    participant2Id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DMConversationCountAggregateOutputType = {
    id: number
    participant1Id: number
    participant2Id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DMConversationMinAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DMConversationMaxAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DMConversationCountAggregateInputType = {
    id?: true
    participant1Id?: true
    participant2Id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DMConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DMConversation to aggregate.
     */
    where?: DMConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMConversations to fetch.
     */
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DMConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DMConversations
    **/
    _count?: true | DMConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DMConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DMConversationMaxAggregateInputType
  }

  export type GetDMConversationAggregateType<T extends DMConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateDMConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDMConversation[P]>
      : GetScalarType<T[P], AggregateDMConversation[P]>
  }




  export type DMConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DMConversationWhereInput
    orderBy?: DMConversationOrderByWithAggregationInput | DMConversationOrderByWithAggregationInput[]
    by: DMConversationScalarFieldEnum[] | DMConversationScalarFieldEnum
    having?: DMConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DMConversationCountAggregateInputType | true
    _min?: DMConversationMinAggregateInputType
    _max?: DMConversationMaxAggregateInputType
  }

  export type DMConversationGroupByOutputType = {
    id: string
    participant1Id: string
    participant2Id: string
    createdAt: Date
    updatedAt: Date
    _count: DMConversationCountAggregateOutputType | null
    _min: DMConversationMinAggregateOutputType | null
    _max: DMConversationMaxAggregateOutputType | null
  }

  type GetDMConversationGroupByPayload<T extends DMConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DMConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DMConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DMConversationGroupByOutputType[P]>
            : GetScalarType<T[P], DMConversationGroupByOutputType[P]>
        }
      >
    >


  export type DMConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | DMConversation$messagesArgs<ExtArgs>
    mutedBy?: boolean | DMConversation$mutedByArgs<ExtArgs>
    _count?: boolean | DMConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dMConversation"]>

  export type DMConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dMConversation"]>

  export type DMConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dMConversation"]>

  export type DMConversationSelectScalar = {
    id?: boolean
    participant1Id?: boolean
    participant2Id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DMConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant1Id" | "participant2Id" | "createdAt" | "updatedAt", ExtArgs["result"]["dMConversation"]>
  export type DMConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | DMConversation$messagesArgs<ExtArgs>
    mutedBy?: boolean | DMConversation$mutedByArgs<ExtArgs>
    _count?: boolean | DMConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DMConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DMConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participant1?: boolean | UserDefaultArgs<ExtArgs>
    participant2?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DMConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DMConversation"
    objects: {
      participant1: Prisma.$UserPayload<ExtArgs>
      participant2: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
      mutedBy: Prisma.$MutedConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participant1Id: string
      participant2Id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dMConversation"]>
    composites: {}
  }

  type DMConversationGetPayload<S extends boolean | null | undefined | DMConversationDefaultArgs> = $Result.GetResult<Prisma.$DMConversationPayload, S>

  type DMConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DMConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DMConversationCountAggregateInputType | true
    }

  export interface DMConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DMConversation'], meta: { name: 'DMConversation' } }
    /**
     * Find zero or one DMConversation that matches the filter.
     * @param {DMConversationFindUniqueArgs} args - Arguments to find a DMConversation
     * @example
     * // Get one DMConversation
     * const dMConversation = await prisma.dMConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DMConversationFindUniqueArgs>(args: SelectSubset<T, DMConversationFindUniqueArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DMConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DMConversationFindUniqueOrThrowArgs} args - Arguments to find a DMConversation
     * @example
     * // Get one DMConversation
     * const dMConversation = await prisma.dMConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DMConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, DMConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DMConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationFindFirstArgs} args - Arguments to find a DMConversation
     * @example
     * // Get one DMConversation
     * const dMConversation = await prisma.dMConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DMConversationFindFirstArgs>(args?: SelectSubset<T, DMConversationFindFirstArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DMConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationFindFirstOrThrowArgs} args - Arguments to find a DMConversation
     * @example
     * // Get one DMConversation
     * const dMConversation = await prisma.dMConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DMConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, DMConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DMConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DMConversations
     * const dMConversations = await prisma.dMConversation.findMany()
     * 
     * // Get first 10 DMConversations
     * const dMConversations = await prisma.dMConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dMConversationWithIdOnly = await prisma.dMConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DMConversationFindManyArgs>(args?: SelectSubset<T, DMConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DMConversation.
     * @param {DMConversationCreateArgs} args - Arguments to create a DMConversation.
     * @example
     * // Create one DMConversation
     * const DMConversation = await prisma.dMConversation.create({
     *   data: {
     *     // ... data to create a DMConversation
     *   }
     * })
     * 
     */
    create<T extends DMConversationCreateArgs>(args: SelectSubset<T, DMConversationCreateArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DMConversations.
     * @param {DMConversationCreateManyArgs} args - Arguments to create many DMConversations.
     * @example
     * // Create many DMConversations
     * const dMConversation = await prisma.dMConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DMConversationCreateManyArgs>(args?: SelectSubset<T, DMConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DMConversations and returns the data saved in the database.
     * @param {DMConversationCreateManyAndReturnArgs} args - Arguments to create many DMConversations.
     * @example
     * // Create many DMConversations
     * const dMConversation = await prisma.dMConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DMConversations and only return the `id`
     * const dMConversationWithIdOnly = await prisma.dMConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DMConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, DMConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DMConversation.
     * @param {DMConversationDeleteArgs} args - Arguments to delete one DMConversation.
     * @example
     * // Delete one DMConversation
     * const DMConversation = await prisma.dMConversation.delete({
     *   where: {
     *     // ... filter to delete one DMConversation
     *   }
     * })
     * 
     */
    delete<T extends DMConversationDeleteArgs>(args: SelectSubset<T, DMConversationDeleteArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DMConversation.
     * @param {DMConversationUpdateArgs} args - Arguments to update one DMConversation.
     * @example
     * // Update one DMConversation
     * const dMConversation = await prisma.dMConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DMConversationUpdateArgs>(args: SelectSubset<T, DMConversationUpdateArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DMConversations.
     * @param {DMConversationDeleteManyArgs} args - Arguments to filter DMConversations to delete.
     * @example
     * // Delete a few DMConversations
     * const { count } = await prisma.dMConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DMConversationDeleteManyArgs>(args?: SelectSubset<T, DMConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DMConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DMConversations
     * const dMConversation = await prisma.dMConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DMConversationUpdateManyArgs>(args: SelectSubset<T, DMConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DMConversations and returns the data updated in the database.
     * @param {DMConversationUpdateManyAndReturnArgs} args - Arguments to update many DMConversations.
     * @example
     * // Update many DMConversations
     * const dMConversation = await prisma.dMConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DMConversations and only return the `id`
     * const dMConversationWithIdOnly = await prisma.dMConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DMConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, DMConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DMConversation.
     * @param {DMConversationUpsertArgs} args - Arguments to update or create a DMConversation.
     * @example
     * // Update or create a DMConversation
     * const dMConversation = await prisma.dMConversation.upsert({
     *   create: {
     *     // ... data to create a DMConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DMConversation we want to update
     *   }
     * })
     */
    upsert<T extends DMConversationUpsertArgs>(args: SelectSubset<T, DMConversationUpsertArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DMConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationCountArgs} args - Arguments to filter DMConversations to count.
     * @example
     * // Count the number of DMConversations
     * const count = await prisma.dMConversation.count({
     *   where: {
     *     // ... the filter for the DMConversations we want to count
     *   }
     * })
    **/
    count<T extends DMConversationCountArgs>(
      args?: Subset<T, DMConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DMConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DMConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DMConversationAggregateArgs>(args: Subset<T, DMConversationAggregateArgs>): Prisma.PrismaPromise<GetDMConversationAggregateType<T>>

    /**
     * Group by DMConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DMConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DMConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DMConversationGroupByArgs['orderBy'] }
        : { orderBy?: DMConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DMConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDMConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DMConversation model
   */
  readonly fields: DMConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DMConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DMConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participant1<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant2<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends DMConversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, DMConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mutedBy<T extends DMConversation$mutedByArgs<ExtArgs> = {}>(args?: Subset<T, DMConversation$mutedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DMConversation model
   */
  interface DMConversationFieldRefs {
    readonly id: FieldRef<"DMConversation", 'String'>
    readonly participant1Id: FieldRef<"DMConversation", 'String'>
    readonly participant2Id: FieldRef<"DMConversation", 'String'>
    readonly createdAt: FieldRef<"DMConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"DMConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DMConversation findUnique
   */
  export type DMConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter, which DMConversation to fetch.
     */
    where: DMConversationWhereUniqueInput
  }

  /**
   * DMConversation findUniqueOrThrow
   */
  export type DMConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter, which DMConversation to fetch.
     */
    where: DMConversationWhereUniqueInput
  }

  /**
   * DMConversation findFirst
   */
  export type DMConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter, which DMConversation to fetch.
     */
    where?: DMConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMConversations to fetch.
     */
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DMConversations.
     */
    cursor?: DMConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DMConversations.
     */
    distinct?: DMConversationScalarFieldEnum | DMConversationScalarFieldEnum[]
  }

  /**
   * DMConversation findFirstOrThrow
   */
  export type DMConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter, which DMConversation to fetch.
     */
    where?: DMConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMConversations to fetch.
     */
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DMConversations.
     */
    cursor?: DMConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DMConversations.
     */
    distinct?: DMConversationScalarFieldEnum | DMConversationScalarFieldEnum[]
  }

  /**
   * DMConversation findMany
   */
  export type DMConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter, which DMConversations to fetch.
     */
    where?: DMConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DMConversations to fetch.
     */
    orderBy?: DMConversationOrderByWithRelationInput | DMConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DMConversations.
     */
    cursor?: DMConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DMConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DMConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DMConversations.
     */
    distinct?: DMConversationScalarFieldEnum | DMConversationScalarFieldEnum[]
  }

  /**
   * DMConversation create
   */
  export type DMConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a DMConversation.
     */
    data: XOR<DMConversationCreateInput, DMConversationUncheckedCreateInput>
  }

  /**
   * DMConversation createMany
   */
  export type DMConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DMConversations.
     */
    data: DMConversationCreateManyInput | DMConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DMConversation createManyAndReturn
   */
  export type DMConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * The data used to create many DMConversations.
     */
    data: DMConversationCreateManyInput | DMConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DMConversation update
   */
  export type DMConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a DMConversation.
     */
    data: XOR<DMConversationUpdateInput, DMConversationUncheckedUpdateInput>
    /**
     * Choose, which DMConversation to update.
     */
    where: DMConversationWhereUniqueInput
  }

  /**
   * DMConversation updateMany
   */
  export type DMConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DMConversations.
     */
    data: XOR<DMConversationUpdateManyMutationInput, DMConversationUncheckedUpdateManyInput>
    /**
     * Filter which DMConversations to update
     */
    where?: DMConversationWhereInput
    /**
     * Limit how many DMConversations to update.
     */
    limit?: number
  }

  /**
   * DMConversation updateManyAndReturn
   */
  export type DMConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * The data used to update DMConversations.
     */
    data: XOR<DMConversationUpdateManyMutationInput, DMConversationUncheckedUpdateManyInput>
    /**
     * Filter which DMConversations to update
     */
    where?: DMConversationWhereInput
    /**
     * Limit how many DMConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DMConversation upsert
   */
  export type DMConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the DMConversation to update in case it exists.
     */
    where: DMConversationWhereUniqueInput
    /**
     * In case the DMConversation found by the `where` argument doesn't exist, create a new DMConversation with this data.
     */
    create: XOR<DMConversationCreateInput, DMConversationUncheckedCreateInput>
    /**
     * In case the DMConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DMConversationUpdateInput, DMConversationUncheckedUpdateInput>
  }

  /**
   * DMConversation delete
   */
  export type DMConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    /**
     * Filter which DMConversation to delete.
     */
    where: DMConversationWhereUniqueInput
  }

  /**
   * DMConversation deleteMany
   */
  export type DMConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DMConversations to delete
     */
    where?: DMConversationWhereInput
    /**
     * Limit how many DMConversations to delete.
     */
    limit?: number
  }

  /**
   * DMConversation.messages
   */
  export type DMConversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * DMConversation.mutedBy
   */
  export type DMConversation$mutedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    where?: MutedConversationWhereInput
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    cursor?: MutedConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * DMConversation without action
   */
  export type DMConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
  }


  /**
   * Model BlockedUser
   */

  export type AggregateBlockedUser = {
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  export type BlockedUserMinAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedUserMaxAggregateOutputType = {
    id: string | null
    blockerId: string | null
    blockedId: string | null
    createdAt: Date | null
  }

  export type BlockedUserCountAggregateOutputType = {
    id: number
    blockerId: number
    blockedId: number
    createdAt: number
    _all: number
  }


  export type BlockedUserMinAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedUserMaxAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
  }

  export type BlockedUserCountAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    createdAt?: true
    _all?: true
  }

  export type BlockedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUser to aggregate.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedUsers
    **/
    _count?: true | BlockedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedUserMaxAggregateInputType
  }

  export type GetBlockedUserAggregateType<T extends BlockedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedUser[P]>
      : GetScalarType<T[P], AggregateBlockedUser[P]>
  }




  export type BlockedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithAggregationInput | BlockedUserOrderByWithAggregationInput[]
    by: BlockedUserScalarFieldEnum[] | BlockedUserScalarFieldEnum
    having?: BlockedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedUserCountAggregateInputType | true
    _min?: BlockedUserMinAggregateInputType
    _max?: BlockedUserMaxAggregateInputType
  }

  export type BlockedUserGroupByOutputType = {
    id: string
    blockerId: string
    blockedId: string
    createdAt: Date
    _count: BlockedUserCountAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  type GetBlockedUserGroupByPayload<T extends BlockedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
        }
      >
    >


  export type BlockedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>

  export type BlockedUserSelectScalar = {
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    createdAt?: boolean
  }

  export type BlockedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockerId" | "blockedId" | "createdAt", ExtArgs["result"]["blockedUser"]>
  export type BlockedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockedUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlockedUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlockedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedUser"
    objects: {
      blocker: Prisma.$UserPayload<ExtArgs>
      blocked: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blockerId: string
      blockedId: string
      createdAt: Date
    }, ExtArgs["result"]["blockedUser"]>
    composites: {}
  }

  type BlockedUserGetPayload<S extends boolean | null | undefined | BlockedUserDefaultArgs> = $Result.GetResult<Prisma.$BlockedUserPayload, S>

  type BlockedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedUserCountAggregateInputType | true
    }

  export interface BlockedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedUser'], meta: { name: 'BlockedUser' } }
    /**
     * Find zero or one BlockedUser that matches the filter.
     * @param {BlockedUserFindUniqueArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedUserFindUniqueArgs>(args: SelectSubset<T, BlockedUserFindUniqueArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedUserFindUniqueOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedUserFindFirstArgs>(args?: SelectSubset<T, BlockedUserFindFirstArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany()
     * 
     * // Get first 10 BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedUserFindManyArgs>(args?: SelectSubset<T, BlockedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedUser.
     * @param {BlockedUserCreateArgs} args - Arguments to create a BlockedUser.
     * @example
     * // Create one BlockedUser
     * const BlockedUser = await prisma.blockedUser.create({
     *   data: {
     *     // ... data to create a BlockedUser
     *   }
     * })
     * 
     */
    create<T extends BlockedUserCreateArgs>(args: SelectSubset<T, BlockedUserCreateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedUsers.
     * @param {BlockedUserCreateManyArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedUserCreateManyArgs>(args?: SelectSubset<T, BlockedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedUsers and returns the data saved in the database.
     * @param {BlockedUserCreateManyAndReturnArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedUser.
     * @param {BlockedUserDeleteArgs} args - Arguments to delete one BlockedUser.
     * @example
     * // Delete one BlockedUser
     * const BlockedUser = await prisma.blockedUser.delete({
     *   where: {
     *     // ... filter to delete one BlockedUser
     *   }
     * })
     * 
     */
    delete<T extends BlockedUserDeleteArgs>(args: SelectSubset<T, BlockedUserDeleteArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedUser.
     * @param {BlockedUserUpdateArgs} args - Arguments to update one BlockedUser.
     * @example
     * // Update one BlockedUser
     * const blockedUser = await prisma.blockedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedUserUpdateArgs>(args: SelectSubset<T, BlockedUserUpdateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedUsers.
     * @param {BlockedUserDeleteManyArgs} args - Arguments to filter BlockedUsers to delete.
     * @example
     * // Delete a few BlockedUsers
     * const { count } = await prisma.blockedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedUserDeleteManyArgs>(args?: SelectSubset<T, BlockedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedUserUpdateManyArgs>(args: SelectSubset<T, BlockedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers and returns the data updated in the database.
     * @param {BlockedUserUpdateManyAndReturnArgs} args - Arguments to update many BlockedUsers.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedUsers and only return the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedUser.
     * @param {BlockedUserUpsertArgs} args - Arguments to update or create a BlockedUser.
     * @example
     * // Update or create a BlockedUser
     * const blockedUser = await prisma.blockedUser.upsert({
     *   create: {
     *     // ... data to create a BlockedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedUser we want to update
     *   }
     * })
     */
    upsert<T extends BlockedUserUpsertArgs>(args: SelectSubset<T, BlockedUserUpsertArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserCountArgs} args - Arguments to filter BlockedUsers to count.
     * @example
     * // Count the number of BlockedUsers
     * const count = await prisma.blockedUser.count({
     *   where: {
     *     // ... the filter for the BlockedUsers we want to count
     *   }
     * })
    **/
    count<T extends BlockedUserCountArgs>(
      args?: Subset<T, BlockedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedUserAggregateArgs>(args: Subset<T, BlockedUserAggregateArgs>): Prisma.PrismaPromise<GetBlockedUserAggregateType<T>>

    /**
     * Group by BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedUserGroupByArgs['orderBy'] }
        : { orderBy?: BlockedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedUser model
   */
  readonly fields: BlockedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocked<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedUser model
   */
  interface BlockedUserFieldRefs {
    readonly id: FieldRef<"BlockedUser", 'String'>
    readonly blockerId: FieldRef<"BlockedUser", 'String'>
    readonly blockedId: FieldRef<"BlockedUser", 'String'>
    readonly createdAt: FieldRef<"BlockedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockedUser findUnique
   */
  export type BlockedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findUniqueOrThrow
   */
  export type BlockedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findFirst
   */
  export type BlockedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findFirstOrThrow
   */
  export type BlockedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findMany
   */
  export type BlockedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUsers to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser create
   */
  export type BlockedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedUser.
     */
    data: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
  }

  /**
   * BlockedUser createMany
   */
  export type BlockedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedUsers.
     */
    data: BlockedUserCreateManyInput | BlockedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedUser createManyAndReturn
   */
  export type BlockedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedUsers.
     */
    data: BlockedUserCreateManyInput | BlockedUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedUser update
   */
  export type BlockedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedUser.
     */
    data: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
    /**
     * Choose, which BlockedUser to update.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser updateMany
   */
  export type BlockedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedUsers.
     */
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyInput>
    /**
     * Filter which BlockedUsers to update
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to update.
     */
    limit?: number
  }

  /**
   * BlockedUser updateManyAndReturn
   */
  export type BlockedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * The data used to update BlockedUsers.
     */
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyInput>
    /**
     * Filter which BlockedUsers to update
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedUser upsert
   */
  export type BlockedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedUser to update in case it exists.
     */
    where: BlockedUserWhereUniqueInput
    /**
     * In case the BlockedUser found by the `where` argument doesn't exist, create a new BlockedUser with this data.
     */
    create: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
    /**
     * In case the BlockedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
  }

  /**
   * BlockedUser delete
   */
  export type BlockedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter which BlockedUser to delete.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser deleteMany
   */
  export type BlockedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUsers to delete
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to delete.
     */
    limit?: number
  }

  /**
   * BlockedUser without action
   */
  export type BlockedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
  }


  /**
   * Model MutedConversation
   */

  export type AggregateMutedConversation = {
    _count: MutedConversationCountAggregateOutputType | null
    _min: MutedConversationMinAggregateOutputType | null
    _max: MutedConversationMaxAggregateOutputType | null
  }

  export type MutedConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    dmConversationId: string | null
    mutedUntil: Date | null
    createdAt: Date | null
  }

  export type MutedConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roomId: string | null
    dmConversationId: string | null
    mutedUntil: Date | null
    createdAt: Date | null
  }

  export type MutedConversationCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    dmConversationId: number
    mutedUntil: number
    createdAt: number
    _all: number
  }


  export type MutedConversationMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    dmConversationId?: true
    mutedUntil?: true
    createdAt?: true
  }

  export type MutedConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    dmConversationId?: true
    mutedUntil?: true
    createdAt?: true
  }

  export type MutedConversationCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    dmConversationId?: true
    mutedUntil?: true
    createdAt?: true
    _all?: true
  }

  export type MutedConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MutedConversation to aggregate.
     */
    where?: MutedConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MutedConversations to fetch.
     */
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MutedConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MutedConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MutedConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MutedConversations
    **/
    _count?: true | MutedConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MutedConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MutedConversationMaxAggregateInputType
  }

  export type GetMutedConversationAggregateType<T extends MutedConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateMutedConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMutedConversation[P]>
      : GetScalarType<T[P], AggregateMutedConversation[P]>
  }




  export type MutedConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MutedConversationWhereInput
    orderBy?: MutedConversationOrderByWithAggregationInput | MutedConversationOrderByWithAggregationInput[]
    by: MutedConversationScalarFieldEnum[] | MutedConversationScalarFieldEnum
    having?: MutedConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MutedConversationCountAggregateInputType | true
    _min?: MutedConversationMinAggregateInputType
    _max?: MutedConversationMaxAggregateInputType
  }

  export type MutedConversationGroupByOutputType = {
    id: string
    userId: string
    roomId: string | null
    dmConversationId: string | null
    mutedUntil: Date | null
    createdAt: Date
    _count: MutedConversationCountAggregateOutputType | null
    _min: MutedConversationMinAggregateOutputType | null
    _max: MutedConversationMaxAggregateOutputType | null
  }

  type GetMutedConversationGroupByPayload<T extends MutedConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MutedConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MutedConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MutedConversationGroupByOutputType[P]>
            : GetScalarType<T[P], MutedConversationGroupByOutputType[P]>
        }
      >
    >


  export type MutedConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    mutedUntil?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }, ExtArgs["result"]["mutedConversation"]>

  export type MutedConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    mutedUntil?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }, ExtArgs["result"]["mutedConversation"]>

  export type MutedConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    mutedUntil?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }, ExtArgs["result"]["mutedConversation"]>

  export type MutedConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    mutedUntil?: boolean
    createdAt?: boolean
  }

  export type MutedConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "dmConversationId" | "mutedUntil" | "createdAt", ExtArgs["result"]["mutedConversation"]>
  export type MutedConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }
  export type MutedConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }
  export type MutedConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | MutedConversation$roomArgs<ExtArgs>
    dmConversation?: boolean | MutedConversation$dmConversationArgs<ExtArgs>
  }

  export type $MutedConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MutedConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs> | null
      dmConversation: Prisma.$DMConversationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roomId: string | null
      dmConversationId: string | null
      mutedUntil: Date | null
      createdAt: Date
    }, ExtArgs["result"]["mutedConversation"]>
    composites: {}
  }

  type MutedConversationGetPayload<S extends boolean | null | undefined | MutedConversationDefaultArgs> = $Result.GetResult<Prisma.$MutedConversationPayload, S>

  type MutedConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MutedConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MutedConversationCountAggregateInputType | true
    }

  export interface MutedConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MutedConversation'], meta: { name: 'MutedConversation' } }
    /**
     * Find zero or one MutedConversation that matches the filter.
     * @param {MutedConversationFindUniqueArgs} args - Arguments to find a MutedConversation
     * @example
     * // Get one MutedConversation
     * const mutedConversation = await prisma.mutedConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MutedConversationFindUniqueArgs>(args: SelectSubset<T, MutedConversationFindUniqueArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MutedConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MutedConversationFindUniqueOrThrowArgs} args - Arguments to find a MutedConversation
     * @example
     * // Get one MutedConversation
     * const mutedConversation = await prisma.mutedConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MutedConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, MutedConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MutedConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationFindFirstArgs} args - Arguments to find a MutedConversation
     * @example
     * // Get one MutedConversation
     * const mutedConversation = await prisma.mutedConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MutedConversationFindFirstArgs>(args?: SelectSubset<T, MutedConversationFindFirstArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MutedConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationFindFirstOrThrowArgs} args - Arguments to find a MutedConversation
     * @example
     * // Get one MutedConversation
     * const mutedConversation = await prisma.mutedConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MutedConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, MutedConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MutedConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MutedConversations
     * const mutedConversations = await prisma.mutedConversation.findMany()
     * 
     * // Get first 10 MutedConversations
     * const mutedConversations = await prisma.mutedConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mutedConversationWithIdOnly = await prisma.mutedConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MutedConversationFindManyArgs>(args?: SelectSubset<T, MutedConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MutedConversation.
     * @param {MutedConversationCreateArgs} args - Arguments to create a MutedConversation.
     * @example
     * // Create one MutedConversation
     * const MutedConversation = await prisma.mutedConversation.create({
     *   data: {
     *     // ... data to create a MutedConversation
     *   }
     * })
     * 
     */
    create<T extends MutedConversationCreateArgs>(args: SelectSubset<T, MutedConversationCreateArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MutedConversations.
     * @param {MutedConversationCreateManyArgs} args - Arguments to create many MutedConversations.
     * @example
     * // Create many MutedConversations
     * const mutedConversation = await prisma.mutedConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MutedConversationCreateManyArgs>(args?: SelectSubset<T, MutedConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MutedConversations and returns the data saved in the database.
     * @param {MutedConversationCreateManyAndReturnArgs} args - Arguments to create many MutedConversations.
     * @example
     * // Create many MutedConversations
     * const mutedConversation = await prisma.mutedConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MutedConversations and only return the `id`
     * const mutedConversationWithIdOnly = await prisma.mutedConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MutedConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, MutedConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MutedConversation.
     * @param {MutedConversationDeleteArgs} args - Arguments to delete one MutedConversation.
     * @example
     * // Delete one MutedConversation
     * const MutedConversation = await prisma.mutedConversation.delete({
     *   where: {
     *     // ... filter to delete one MutedConversation
     *   }
     * })
     * 
     */
    delete<T extends MutedConversationDeleteArgs>(args: SelectSubset<T, MutedConversationDeleteArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MutedConversation.
     * @param {MutedConversationUpdateArgs} args - Arguments to update one MutedConversation.
     * @example
     * // Update one MutedConversation
     * const mutedConversation = await prisma.mutedConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MutedConversationUpdateArgs>(args: SelectSubset<T, MutedConversationUpdateArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MutedConversations.
     * @param {MutedConversationDeleteManyArgs} args - Arguments to filter MutedConversations to delete.
     * @example
     * // Delete a few MutedConversations
     * const { count } = await prisma.mutedConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MutedConversationDeleteManyArgs>(args?: SelectSubset<T, MutedConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MutedConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MutedConversations
     * const mutedConversation = await prisma.mutedConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MutedConversationUpdateManyArgs>(args: SelectSubset<T, MutedConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MutedConversations and returns the data updated in the database.
     * @param {MutedConversationUpdateManyAndReturnArgs} args - Arguments to update many MutedConversations.
     * @example
     * // Update many MutedConversations
     * const mutedConversation = await prisma.mutedConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MutedConversations and only return the `id`
     * const mutedConversationWithIdOnly = await prisma.mutedConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MutedConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, MutedConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MutedConversation.
     * @param {MutedConversationUpsertArgs} args - Arguments to update or create a MutedConversation.
     * @example
     * // Update or create a MutedConversation
     * const mutedConversation = await prisma.mutedConversation.upsert({
     *   create: {
     *     // ... data to create a MutedConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MutedConversation we want to update
     *   }
     * })
     */
    upsert<T extends MutedConversationUpsertArgs>(args: SelectSubset<T, MutedConversationUpsertArgs<ExtArgs>>): Prisma__MutedConversationClient<$Result.GetResult<Prisma.$MutedConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MutedConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationCountArgs} args - Arguments to filter MutedConversations to count.
     * @example
     * // Count the number of MutedConversations
     * const count = await prisma.mutedConversation.count({
     *   where: {
     *     // ... the filter for the MutedConversations we want to count
     *   }
     * })
    **/
    count<T extends MutedConversationCountArgs>(
      args?: Subset<T, MutedConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MutedConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MutedConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MutedConversationAggregateArgs>(args: Subset<T, MutedConversationAggregateArgs>): Prisma.PrismaPromise<GetMutedConversationAggregateType<T>>

    /**
     * Group by MutedConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MutedConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MutedConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MutedConversationGroupByArgs['orderBy'] }
        : { orderBy?: MutedConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MutedConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMutedConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MutedConversation model
   */
  readonly fields: MutedConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MutedConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MutedConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends MutedConversation$roomArgs<ExtArgs> = {}>(args?: Subset<T, MutedConversation$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dmConversation<T extends MutedConversation$dmConversationArgs<ExtArgs> = {}>(args?: Subset<T, MutedConversation$dmConversationArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MutedConversation model
   */
  interface MutedConversationFieldRefs {
    readonly id: FieldRef<"MutedConversation", 'String'>
    readonly userId: FieldRef<"MutedConversation", 'String'>
    readonly roomId: FieldRef<"MutedConversation", 'String'>
    readonly dmConversationId: FieldRef<"MutedConversation", 'String'>
    readonly mutedUntil: FieldRef<"MutedConversation", 'DateTime'>
    readonly createdAt: FieldRef<"MutedConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MutedConversation findUnique
   */
  export type MutedConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter, which MutedConversation to fetch.
     */
    where: MutedConversationWhereUniqueInput
  }

  /**
   * MutedConversation findUniqueOrThrow
   */
  export type MutedConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter, which MutedConversation to fetch.
     */
    where: MutedConversationWhereUniqueInput
  }

  /**
   * MutedConversation findFirst
   */
  export type MutedConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter, which MutedConversation to fetch.
     */
    where?: MutedConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MutedConversations to fetch.
     */
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MutedConversations.
     */
    cursor?: MutedConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MutedConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MutedConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MutedConversations.
     */
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * MutedConversation findFirstOrThrow
   */
  export type MutedConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter, which MutedConversation to fetch.
     */
    where?: MutedConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MutedConversations to fetch.
     */
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MutedConversations.
     */
    cursor?: MutedConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MutedConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MutedConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MutedConversations.
     */
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * MutedConversation findMany
   */
  export type MutedConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter, which MutedConversations to fetch.
     */
    where?: MutedConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MutedConversations to fetch.
     */
    orderBy?: MutedConversationOrderByWithRelationInput | MutedConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MutedConversations.
     */
    cursor?: MutedConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MutedConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MutedConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MutedConversations.
     */
    distinct?: MutedConversationScalarFieldEnum | MutedConversationScalarFieldEnum[]
  }

  /**
   * MutedConversation create
   */
  export type MutedConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a MutedConversation.
     */
    data: XOR<MutedConversationCreateInput, MutedConversationUncheckedCreateInput>
  }

  /**
   * MutedConversation createMany
   */
  export type MutedConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MutedConversations.
     */
    data: MutedConversationCreateManyInput | MutedConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MutedConversation createManyAndReturn
   */
  export type MutedConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * The data used to create many MutedConversations.
     */
    data: MutedConversationCreateManyInput | MutedConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MutedConversation update
   */
  export type MutedConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a MutedConversation.
     */
    data: XOR<MutedConversationUpdateInput, MutedConversationUncheckedUpdateInput>
    /**
     * Choose, which MutedConversation to update.
     */
    where: MutedConversationWhereUniqueInput
  }

  /**
   * MutedConversation updateMany
   */
  export type MutedConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MutedConversations.
     */
    data: XOR<MutedConversationUpdateManyMutationInput, MutedConversationUncheckedUpdateManyInput>
    /**
     * Filter which MutedConversations to update
     */
    where?: MutedConversationWhereInput
    /**
     * Limit how many MutedConversations to update.
     */
    limit?: number
  }

  /**
   * MutedConversation updateManyAndReturn
   */
  export type MutedConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * The data used to update MutedConversations.
     */
    data: XOR<MutedConversationUpdateManyMutationInput, MutedConversationUncheckedUpdateManyInput>
    /**
     * Filter which MutedConversations to update
     */
    where?: MutedConversationWhereInput
    /**
     * Limit how many MutedConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MutedConversation upsert
   */
  export type MutedConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the MutedConversation to update in case it exists.
     */
    where: MutedConversationWhereUniqueInput
    /**
     * In case the MutedConversation found by the `where` argument doesn't exist, create a new MutedConversation with this data.
     */
    create: XOR<MutedConversationCreateInput, MutedConversationUncheckedCreateInput>
    /**
     * In case the MutedConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MutedConversationUpdateInput, MutedConversationUncheckedUpdateInput>
  }

  /**
   * MutedConversation delete
   */
  export type MutedConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
    /**
     * Filter which MutedConversation to delete.
     */
    where: MutedConversationWhereUniqueInput
  }

  /**
   * MutedConversation deleteMany
   */
  export type MutedConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MutedConversations to delete
     */
    where?: MutedConversationWhereInput
    /**
     * Limit how many MutedConversations to delete.
     */
    limit?: number
  }

  /**
   * MutedConversation.room
   */
  export type MutedConversation$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * MutedConversation.dmConversation
   */
  export type MutedConversation$dmConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    where?: DMConversationWhereInput
  }

  /**
   * MutedConversation without action
   */
  export type MutedConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MutedConversation
     */
    select?: MutedConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MutedConversation
     */
    omit?: MutedConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MutedConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    type: $Enums.MessageType | null
    content: string | null
    mediaUrl: string | null
    senderId: string | null
    roomId: string | null
    dmConversationId: string | null
    replyToId: string | null
    isEdited: boolean | null
    editedAt: Date | null
    deletedAt: Date | null
    clientTempId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MessageType | null
    content: string | null
    mediaUrl: string | null
    senderId: string | null
    roomId: string | null
    dmConversationId: string | null
    replyToId: string | null
    isEdited: boolean | null
    editedAt: Date | null
    deletedAt: Date | null
    clientTempId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    type: number
    content: number
    mediaUrl: number
    mediaMetadata: number
    senderId: number
    roomId: number
    dmConversationId: number
    replyToId: number
    isEdited: number
    editedAt: number
    deletedAt: number
    clientTempId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    type?: true
    content?: true
    mediaUrl?: true
    senderId?: true
    roomId?: true
    dmConversationId?: true
    replyToId?: true
    isEdited?: true
    editedAt?: true
    deletedAt?: true
    clientTempId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    type?: true
    content?: true
    mediaUrl?: true
    senderId?: true
    roomId?: true
    dmConversationId?: true
    replyToId?: true
    isEdited?: true
    editedAt?: true
    deletedAt?: true
    clientTempId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    type?: true
    content?: true
    mediaUrl?: true
    mediaMetadata?: true
    senderId?: true
    roomId?: true
    dmConversationId?: true
    replyToId?: true
    isEdited?: true
    editedAt?: true
    deletedAt?: true
    clientTempId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    type: $Enums.MessageType
    content: string | null
    mediaUrl: string | null
    mediaMetadata: JsonValue | null
    senderId: string
    roomId: string | null
    dmConversationId: string | null
    replyToId: string | null
    isEdited: boolean
    editedAt: Date | null
    deletedAt: Date | null
    clientTempId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaMetadata?: boolean
    senderId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    replyToId?: boolean
    isEdited?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    clientTempId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    statuses?: boolean | Message$statusesArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    pins?: boolean | Message$pinsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaMetadata?: boolean
    senderId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    replyToId?: boolean
    isEdited?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    clientTempId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaMetadata?: boolean
    senderId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    replyToId?: boolean
    isEdited?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    clientTempId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    type?: boolean
    content?: boolean
    mediaUrl?: boolean
    mediaMetadata?: boolean
    senderId?: boolean
    roomId?: boolean
    dmConversationId?: boolean
    replyToId?: boolean
    isEdited?: boolean
    editedAt?: boolean
    deletedAt?: boolean
    clientTempId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "content" | "mediaUrl" | "mediaMetadata" | "senderId" | "roomId" | "dmConversationId" | "replyToId" | "isEdited" | "editedAt" | "deletedAt" | "clientTempId" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
    replies?: boolean | Message$repliesArgs<ExtArgs>
    statuses?: boolean | Message$statusesArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    pins?: boolean | Message$pinsArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | Message$roomArgs<ExtArgs>
    dmConversation?: boolean | Message$dmConversationArgs<ExtArgs>
    replyTo?: boolean | Message$replyToArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs> | null
      dmConversation: Prisma.$DMConversationPayload<ExtArgs> | null
      replyTo: Prisma.$MessagePayload<ExtArgs> | null
      replies: Prisma.$MessagePayload<ExtArgs>[]
      statuses: Prisma.$MessageStatus_Payload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      pins: Prisma.$PinnedMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MessageType
      content: string | null
      mediaUrl: string | null
      mediaMetadata: Prisma.JsonValue | null
      senderId: string
      roomId: string | null
      dmConversationId: string | null
      replyToId: string | null
      isEdited: boolean
      editedAt: Date | null
      deletedAt: Date | null
      clientTempId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends Message$roomArgs<ExtArgs> = {}>(args?: Subset<T, Message$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dmConversation<T extends Message$dmConversationArgs<ExtArgs> = {}>(args?: Subset<T, Message$dmConversationArgs<ExtArgs>>): Prisma__DMConversationClient<$Result.GetResult<Prisma.$DMConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replyTo<T extends Message$replyToArgs<ExtArgs> = {}>(args?: Subset<T, Message$replyToArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Message$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Message$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statuses<T extends Message$statusesArgs<ExtArgs> = {}>(args?: Subset<T, Message$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Message$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Message$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pins<T extends Message$pinsArgs<ExtArgs> = {}>(args?: Subset<T, Message$pinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly content: FieldRef<"Message", 'String'>
    readonly mediaUrl: FieldRef<"Message", 'String'>
    readonly mediaMetadata: FieldRef<"Message", 'Json'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly roomId: FieldRef<"Message", 'String'>
    readonly dmConversationId: FieldRef<"Message", 'String'>
    readonly replyToId: FieldRef<"Message", 'String'>
    readonly isEdited: FieldRef<"Message", 'Boolean'>
    readonly editedAt: FieldRef<"Message", 'DateTime'>
    readonly deletedAt: FieldRef<"Message", 'DateTime'>
    readonly clientTempId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.room
   */
  export type Message$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Message.dmConversation
   */
  export type Message$dmConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DMConversation
     */
    select?: DMConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DMConversation
     */
    omit?: DMConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DMConversationInclude<ExtArgs> | null
    where?: DMConversationWhereInput
  }

  /**
   * Message.replyTo
   */
  export type Message$replyToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Message.replies
   */
  export type Message$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message.statuses
   */
  export type Message$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    where?: MessageStatus_WhereInput
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    cursor?: MessageStatus_WhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageStatus_ScalarFieldEnum | MessageStatus_ScalarFieldEnum[]
  }

  /**
   * Message.reactions
   */
  export type Message$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Message.pins
   */
  export type Message$pinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    where?: PinnedMessageWhereInput
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    cursor?: PinnedMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageStatus_
   */

  export type AggregateMessageStatus_ = {
    _count: MessageStatus_CountAggregateOutputType | null
    _min: MessageStatus_MinAggregateOutputType | null
    _max: MessageStatus_MaxAggregateOutputType | null
  }

  export type MessageStatus_MinAggregateOutputType = {
    id: string | null
    messageId: string | null
    recipientId: string | null
    status: $Enums.MessageStatus | null
    updatedAt: Date | null
  }

  export type MessageStatus_MaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    recipientId: string | null
    status: $Enums.MessageStatus | null
    updatedAt: Date | null
  }

  export type MessageStatus_CountAggregateOutputType = {
    id: number
    messageId: number
    recipientId: number
    status: number
    updatedAt: number
    _all: number
  }


  export type MessageStatus_MinAggregateInputType = {
    id?: true
    messageId?: true
    recipientId?: true
    status?: true
    updatedAt?: true
  }

  export type MessageStatus_MaxAggregateInputType = {
    id?: true
    messageId?: true
    recipientId?: true
    status?: true
    updatedAt?: true
  }

  export type MessageStatus_CountAggregateInputType = {
    id?: true
    messageId?: true
    recipientId?: true
    status?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageStatus_AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageStatus_ to aggregate.
     */
    where?: MessageStatus_WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStatus_s to fetch.
     */
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageStatus_WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStatus_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStatus_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageStatus_s
    **/
    _count?: true | MessageStatus_CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageStatus_MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageStatus_MaxAggregateInputType
  }

  export type GetMessageStatus_AggregateType<T extends MessageStatus_AggregateArgs> = {
        [P in keyof T & keyof AggregateMessageStatus_]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageStatus_[P]>
      : GetScalarType<T[P], AggregateMessageStatus_[P]>
  }




  export type MessageStatus_GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageStatus_WhereInput
    orderBy?: MessageStatus_OrderByWithAggregationInput | MessageStatus_OrderByWithAggregationInput[]
    by: MessageStatus_ScalarFieldEnum[] | MessageStatus_ScalarFieldEnum
    having?: MessageStatus_ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageStatus_CountAggregateInputType | true
    _min?: MessageStatus_MinAggregateInputType
    _max?: MessageStatus_MaxAggregateInputType
  }

  export type MessageStatus_GroupByOutputType = {
    id: string
    messageId: string
    recipientId: string
    status: $Enums.MessageStatus
    updatedAt: Date
    _count: MessageStatus_CountAggregateOutputType | null
    _min: MessageStatus_MinAggregateOutputType | null
    _max: MessageStatus_MaxAggregateOutputType | null
  }

  type GetMessageStatus_GroupByPayload<T extends MessageStatus_GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageStatus_GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageStatus_GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageStatus_GroupByOutputType[P]>
            : GetScalarType<T[P], MessageStatus_GroupByOutputType[P]>
        }
      >
    >


  export type MessageStatus_Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    recipientId?: boolean
    status?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageStatus_"]>

  export type MessageStatus_SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    recipientId?: boolean
    status?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageStatus_"]>

  export type MessageStatus_SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    recipientId?: boolean
    status?: boolean
    updatedAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageStatus_"]>

  export type MessageStatus_SelectScalar = {
    id?: boolean
    messageId?: boolean
    recipientId?: boolean
    status?: boolean
    updatedAt?: boolean
  }

  export type MessageStatus_Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "recipientId" | "status" | "updatedAt", ExtArgs["result"]["messageStatus_"]>
  export type MessageStatus_Include<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageStatus_IncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageStatus_IncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageStatus_Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageStatus_"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      recipientId: string
      status: $Enums.MessageStatus
      updatedAt: Date
    }, ExtArgs["result"]["messageStatus_"]>
    composites: {}
  }

  type MessageStatus_GetPayload<S extends boolean | null | undefined | MessageStatus_DefaultArgs> = $Result.GetResult<Prisma.$MessageStatus_Payload, S>

  type MessageStatus_CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageStatus_FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageStatus_CountAggregateInputType | true
    }

  export interface MessageStatus_Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageStatus_'], meta: { name: 'MessageStatus_' } }
    /**
     * Find zero or one MessageStatus_ that matches the filter.
     * @param {MessageStatus_FindUniqueArgs} args - Arguments to find a MessageStatus_
     * @example
     * // Get one MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageStatus_FindUniqueArgs>(args: SelectSubset<T, MessageStatus_FindUniqueArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageStatus_ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageStatus_FindUniqueOrThrowArgs} args - Arguments to find a MessageStatus_
     * @example
     * // Get one MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageStatus_FindUniqueOrThrowArgs>(args: SelectSubset<T, MessageStatus_FindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageStatus_ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_FindFirstArgs} args - Arguments to find a MessageStatus_
     * @example
     * // Get one MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageStatus_FindFirstArgs>(args?: SelectSubset<T, MessageStatus_FindFirstArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageStatus_ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_FindFirstOrThrowArgs} args - Arguments to find a MessageStatus_
     * @example
     * // Get one MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageStatus_FindFirstOrThrowArgs>(args?: SelectSubset<T, MessageStatus_FindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageStatus_s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageStatus_s
     * const messageStatus_s = await prisma.messageStatus_.findMany()
     * 
     * // Get first 10 MessageStatus_s
     * const messageStatus_s = await prisma.messageStatus_.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageStatus_WithIdOnly = await prisma.messageStatus_.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageStatus_FindManyArgs>(args?: SelectSubset<T, MessageStatus_FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageStatus_.
     * @param {MessageStatus_CreateArgs} args - Arguments to create a MessageStatus_.
     * @example
     * // Create one MessageStatus_
     * const MessageStatus_ = await prisma.messageStatus_.create({
     *   data: {
     *     // ... data to create a MessageStatus_
     *   }
     * })
     * 
     */
    create<T extends MessageStatus_CreateArgs>(args: SelectSubset<T, MessageStatus_CreateArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageStatus_s.
     * @param {MessageStatus_CreateManyArgs} args - Arguments to create many MessageStatus_s.
     * @example
     * // Create many MessageStatus_s
     * const messageStatus_ = await prisma.messageStatus_.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageStatus_CreateManyArgs>(args?: SelectSubset<T, MessageStatus_CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageStatus_s and returns the data saved in the database.
     * @param {MessageStatus_CreateManyAndReturnArgs} args - Arguments to create many MessageStatus_s.
     * @example
     * // Create many MessageStatus_s
     * const messageStatus_ = await prisma.messageStatus_.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageStatus_s and only return the `id`
     * const messageStatus_WithIdOnly = await prisma.messageStatus_.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageStatus_CreateManyAndReturnArgs>(args?: SelectSubset<T, MessageStatus_CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageStatus_.
     * @param {MessageStatus_DeleteArgs} args - Arguments to delete one MessageStatus_.
     * @example
     * // Delete one MessageStatus_
     * const MessageStatus_ = await prisma.messageStatus_.delete({
     *   where: {
     *     // ... filter to delete one MessageStatus_
     *   }
     * })
     * 
     */
    delete<T extends MessageStatus_DeleteArgs>(args: SelectSubset<T, MessageStatus_DeleteArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageStatus_.
     * @param {MessageStatus_UpdateArgs} args - Arguments to update one MessageStatus_.
     * @example
     * // Update one MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageStatus_UpdateArgs>(args: SelectSubset<T, MessageStatus_UpdateArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageStatus_s.
     * @param {MessageStatus_DeleteManyArgs} args - Arguments to filter MessageStatus_s to delete.
     * @example
     * // Delete a few MessageStatus_s
     * const { count } = await prisma.messageStatus_.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageStatus_DeleteManyArgs>(args?: SelectSubset<T, MessageStatus_DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageStatus_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageStatus_s
     * const messageStatus_ = await prisma.messageStatus_.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageStatus_UpdateManyArgs>(args: SelectSubset<T, MessageStatus_UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageStatus_s and returns the data updated in the database.
     * @param {MessageStatus_UpdateManyAndReturnArgs} args - Arguments to update many MessageStatus_s.
     * @example
     * // Update many MessageStatus_s
     * const messageStatus_ = await prisma.messageStatus_.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageStatus_s and only return the `id`
     * const messageStatus_WithIdOnly = await prisma.messageStatus_.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageStatus_UpdateManyAndReturnArgs>(args: SelectSubset<T, MessageStatus_UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageStatus_.
     * @param {MessageStatus_UpsertArgs} args - Arguments to update or create a MessageStatus_.
     * @example
     * // Update or create a MessageStatus_
     * const messageStatus_ = await prisma.messageStatus_.upsert({
     *   create: {
     *     // ... data to create a MessageStatus_
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageStatus_ we want to update
     *   }
     * })
     */
    upsert<T extends MessageStatus_UpsertArgs>(args: SelectSubset<T, MessageStatus_UpsertArgs<ExtArgs>>): Prisma__MessageStatus_Client<$Result.GetResult<Prisma.$MessageStatus_Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageStatus_s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_CountArgs} args - Arguments to filter MessageStatus_s to count.
     * @example
     * // Count the number of MessageStatus_s
     * const count = await prisma.messageStatus_.count({
     *   where: {
     *     // ... the filter for the MessageStatus_s we want to count
     *   }
     * })
    **/
    count<T extends MessageStatus_CountArgs>(
      args?: Subset<T, MessageStatus_CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageStatus_CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageStatus_.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageStatus_AggregateArgs>(args: Subset<T, MessageStatus_AggregateArgs>): Prisma.PrismaPromise<GetMessageStatus_AggregateType<T>>

    /**
     * Group by MessageStatus_.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageStatus_GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageStatus_GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageStatus_GroupByArgs['orderBy'] }
        : { orderBy?: MessageStatus_GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageStatus_GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageStatus_GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageStatus_ model
   */
  readonly fields: MessageStatus_FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageStatus_.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageStatus_Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageStatus_ model
   */
  interface MessageStatus_FieldRefs {
    readonly id: FieldRef<"MessageStatus_", 'String'>
    readonly messageId: FieldRef<"MessageStatus_", 'String'>
    readonly recipientId: FieldRef<"MessageStatus_", 'String'>
    readonly status: FieldRef<"MessageStatus_", 'MessageStatus'>
    readonly updatedAt: FieldRef<"MessageStatus_", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageStatus_ findUnique
   */
  export type MessageStatus_FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter, which MessageStatus_ to fetch.
     */
    where: MessageStatus_WhereUniqueInput
  }

  /**
   * MessageStatus_ findUniqueOrThrow
   */
  export type MessageStatus_FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter, which MessageStatus_ to fetch.
     */
    where: MessageStatus_WhereUniqueInput
  }

  /**
   * MessageStatus_ findFirst
   */
  export type MessageStatus_FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter, which MessageStatus_ to fetch.
     */
    where?: MessageStatus_WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStatus_s to fetch.
     */
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageStatus_s.
     */
    cursor?: MessageStatus_WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStatus_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStatus_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageStatus_s.
     */
    distinct?: MessageStatus_ScalarFieldEnum | MessageStatus_ScalarFieldEnum[]
  }

  /**
   * MessageStatus_ findFirstOrThrow
   */
  export type MessageStatus_FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter, which MessageStatus_ to fetch.
     */
    where?: MessageStatus_WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStatus_s to fetch.
     */
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageStatus_s.
     */
    cursor?: MessageStatus_WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStatus_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStatus_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageStatus_s.
     */
    distinct?: MessageStatus_ScalarFieldEnum | MessageStatus_ScalarFieldEnum[]
  }

  /**
   * MessageStatus_ findMany
   */
  export type MessageStatus_FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter, which MessageStatus_s to fetch.
     */
    where?: MessageStatus_WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageStatus_s to fetch.
     */
    orderBy?: MessageStatus_OrderByWithRelationInput | MessageStatus_OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageStatus_s.
     */
    cursor?: MessageStatus_WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageStatus_s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageStatus_s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageStatus_s.
     */
    distinct?: MessageStatus_ScalarFieldEnum | MessageStatus_ScalarFieldEnum[]
  }

  /**
   * MessageStatus_ create
   */
  export type MessageStatus_CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * The data needed to create a MessageStatus_.
     */
    data: XOR<MessageStatus_CreateInput, MessageStatus_UncheckedCreateInput>
  }

  /**
   * MessageStatus_ createMany
   */
  export type MessageStatus_CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageStatus_s.
     */
    data: MessageStatus_CreateManyInput | MessageStatus_CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageStatus_ createManyAndReturn
   */
  export type MessageStatus_CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * The data used to create many MessageStatus_s.
     */
    data: MessageStatus_CreateManyInput | MessageStatus_CreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_IncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageStatus_ update
   */
  export type MessageStatus_UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * The data needed to update a MessageStatus_.
     */
    data: XOR<MessageStatus_UpdateInput, MessageStatus_UncheckedUpdateInput>
    /**
     * Choose, which MessageStatus_ to update.
     */
    where: MessageStatus_WhereUniqueInput
  }

  /**
   * MessageStatus_ updateMany
   */
  export type MessageStatus_UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageStatus_s.
     */
    data: XOR<MessageStatus_UpdateManyMutationInput, MessageStatus_UncheckedUpdateManyInput>
    /**
     * Filter which MessageStatus_s to update
     */
    where?: MessageStatus_WhereInput
    /**
     * Limit how many MessageStatus_s to update.
     */
    limit?: number
  }

  /**
   * MessageStatus_ updateManyAndReturn
   */
  export type MessageStatus_UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * The data used to update MessageStatus_s.
     */
    data: XOR<MessageStatus_UpdateManyMutationInput, MessageStatus_UncheckedUpdateManyInput>
    /**
     * Filter which MessageStatus_s to update
     */
    where?: MessageStatus_WhereInput
    /**
     * Limit how many MessageStatus_s to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_IncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageStatus_ upsert
   */
  export type MessageStatus_UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * The filter to search for the MessageStatus_ to update in case it exists.
     */
    where: MessageStatus_WhereUniqueInput
    /**
     * In case the MessageStatus_ found by the `where` argument doesn't exist, create a new MessageStatus_ with this data.
     */
    create: XOR<MessageStatus_CreateInput, MessageStatus_UncheckedCreateInput>
    /**
     * In case the MessageStatus_ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageStatus_UpdateInput, MessageStatus_UncheckedUpdateInput>
  }

  /**
   * MessageStatus_ delete
   */
  export type MessageStatus_DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
    /**
     * Filter which MessageStatus_ to delete.
     */
    where: MessageStatus_WhereUniqueInput
  }

  /**
   * MessageStatus_ deleteMany
   */
  export type MessageStatus_DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageStatus_s to delete
     */
    where?: MessageStatus_WhereInput
    /**
     * Limit how many MessageStatus_s to delete.
     */
    limit?: number
  }

  /**
   * MessageStatus_ without action
   */
  export type MessageStatus_DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageStatus_
     */
    select?: MessageStatus_Select<ExtArgs> | null
    /**
     * Omit specific fields from the MessageStatus_
     */
    omit?: MessageStatus_Omit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageStatus_Include<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    emoji: string | null
    createdAt: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    messageId: number
    userId: number
    emoji: number
    createdAt: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    emoji?: true
    createdAt?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    emoji?: true
    createdAt?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    emoji?: true
    createdAt?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    messageId: string
    userId: string
    emoji: string
    createdAt: Date
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    messageId?: boolean
    userId?: boolean
    emoji?: boolean
    createdAt?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "userId" | "emoji" | "createdAt", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      userId: string
      emoji: string
      createdAt: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly messageId: FieldRef<"Reaction", 'String'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly emoji: FieldRef<"Reaction", 'String'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model PinnedMessage
   */

  export type AggregatePinnedMessage = {
    _count: PinnedMessageCountAggregateOutputType | null
    _min: PinnedMessageMinAggregateOutputType | null
    _max: PinnedMessageMaxAggregateOutputType | null
  }

  export type PinnedMessageMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    messageId: string | null
    pinnedBy: string | null
    pinnedAt: Date | null
  }

  export type PinnedMessageMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    messageId: string | null
    pinnedBy: string | null
    pinnedAt: Date | null
  }

  export type PinnedMessageCountAggregateOutputType = {
    id: number
    roomId: number
    messageId: number
    pinnedBy: number
    pinnedAt: number
    _all: number
  }


  export type PinnedMessageMinAggregateInputType = {
    id?: true
    roomId?: true
    messageId?: true
    pinnedBy?: true
    pinnedAt?: true
  }

  export type PinnedMessageMaxAggregateInputType = {
    id?: true
    roomId?: true
    messageId?: true
    pinnedBy?: true
    pinnedAt?: true
  }

  export type PinnedMessageCountAggregateInputType = {
    id?: true
    roomId?: true
    messageId?: true
    pinnedBy?: true
    pinnedAt?: true
    _all?: true
  }

  export type PinnedMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PinnedMessage to aggregate.
     */
    where?: PinnedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedMessages to fetch.
     */
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PinnedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PinnedMessages
    **/
    _count?: true | PinnedMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PinnedMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PinnedMessageMaxAggregateInputType
  }

  export type GetPinnedMessageAggregateType<T extends PinnedMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePinnedMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePinnedMessage[P]>
      : GetScalarType<T[P], AggregatePinnedMessage[P]>
  }




  export type PinnedMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PinnedMessageWhereInput
    orderBy?: PinnedMessageOrderByWithAggregationInput | PinnedMessageOrderByWithAggregationInput[]
    by: PinnedMessageScalarFieldEnum[] | PinnedMessageScalarFieldEnum
    having?: PinnedMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PinnedMessageCountAggregateInputType | true
    _min?: PinnedMessageMinAggregateInputType
    _max?: PinnedMessageMaxAggregateInputType
  }

  export type PinnedMessageGroupByOutputType = {
    id: string
    roomId: string
    messageId: string
    pinnedBy: string
    pinnedAt: Date
    _count: PinnedMessageCountAggregateOutputType | null
    _min: PinnedMessageMinAggregateOutputType | null
    _max: PinnedMessageMaxAggregateOutputType | null
  }

  type GetPinnedMessageGroupByPayload<T extends PinnedMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PinnedMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PinnedMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PinnedMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PinnedMessageGroupByOutputType[P]>
        }
      >
    >


  export type PinnedMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    messageId?: boolean
    pinnedBy?: boolean
    pinnedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedMessage"]>

  export type PinnedMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    messageId?: boolean
    pinnedBy?: boolean
    pinnedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedMessage"]>

  export type PinnedMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    messageId?: boolean
    pinnedBy?: boolean
    pinnedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pinnedMessage"]>

  export type PinnedMessageSelectScalar = {
    id?: boolean
    roomId?: boolean
    messageId?: boolean
    pinnedBy?: boolean
    pinnedAt?: boolean
  }

  export type PinnedMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "messageId" | "pinnedBy" | "pinnedAt", ExtArgs["result"]["pinnedMessage"]>
  export type PinnedMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PinnedMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PinnedMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
    pinner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PinnedMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PinnedMessage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
      pinner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      messageId: string
      pinnedBy: string
      pinnedAt: Date
    }, ExtArgs["result"]["pinnedMessage"]>
    composites: {}
  }

  type PinnedMessageGetPayload<S extends boolean | null | undefined | PinnedMessageDefaultArgs> = $Result.GetResult<Prisma.$PinnedMessagePayload, S>

  type PinnedMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PinnedMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PinnedMessageCountAggregateInputType | true
    }

  export interface PinnedMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PinnedMessage'], meta: { name: 'PinnedMessage' } }
    /**
     * Find zero or one PinnedMessage that matches the filter.
     * @param {PinnedMessageFindUniqueArgs} args - Arguments to find a PinnedMessage
     * @example
     * // Get one PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PinnedMessageFindUniqueArgs>(args: SelectSubset<T, PinnedMessageFindUniqueArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PinnedMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PinnedMessageFindUniqueOrThrowArgs} args - Arguments to find a PinnedMessage
     * @example
     * // Get one PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PinnedMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PinnedMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PinnedMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageFindFirstArgs} args - Arguments to find a PinnedMessage
     * @example
     * // Get one PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PinnedMessageFindFirstArgs>(args?: SelectSubset<T, PinnedMessageFindFirstArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PinnedMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageFindFirstOrThrowArgs} args - Arguments to find a PinnedMessage
     * @example
     * // Get one PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PinnedMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PinnedMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PinnedMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PinnedMessages
     * const pinnedMessages = await prisma.pinnedMessage.findMany()
     * 
     * // Get first 10 PinnedMessages
     * const pinnedMessages = await prisma.pinnedMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pinnedMessageWithIdOnly = await prisma.pinnedMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PinnedMessageFindManyArgs>(args?: SelectSubset<T, PinnedMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PinnedMessage.
     * @param {PinnedMessageCreateArgs} args - Arguments to create a PinnedMessage.
     * @example
     * // Create one PinnedMessage
     * const PinnedMessage = await prisma.pinnedMessage.create({
     *   data: {
     *     // ... data to create a PinnedMessage
     *   }
     * })
     * 
     */
    create<T extends PinnedMessageCreateArgs>(args: SelectSubset<T, PinnedMessageCreateArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PinnedMessages.
     * @param {PinnedMessageCreateManyArgs} args - Arguments to create many PinnedMessages.
     * @example
     * // Create many PinnedMessages
     * const pinnedMessage = await prisma.pinnedMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PinnedMessageCreateManyArgs>(args?: SelectSubset<T, PinnedMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PinnedMessages and returns the data saved in the database.
     * @param {PinnedMessageCreateManyAndReturnArgs} args - Arguments to create many PinnedMessages.
     * @example
     * // Create many PinnedMessages
     * const pinnedMessage = await prisma.pinnedMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PinnedMessages and only return the `id`
     * const pinnedMessageWithIdOnly = await prisma.pinnedMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PinnedMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PinnedMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PinnedMessage.
     * @param {PinnedMessageDeleteArgs} args - Arguments to delete one PinnedMessage.
     * @example
     * // Delete one PinnedMessage
     * const PinnedMessage = await prisma.pinnedMessage.delete({
     *   where: {
     *     // ... filter to delete one PinnedMessage
     *   }
     * })
     * 
     */
    delete<T extends PinnedMessageDeleteArgs>(args: SelectSubset<T, PinnedMessageDeleteArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PinnedMessage.
     * @param {PinnedMessageUpdateArgs} args - Arguments to update one PinnedMessage.
     * @example
     * // Update one PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PinnedMessageUpdateArgs>(args: SelectSubset<T, PinnedMessageUpdateArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PinnedMessages.
     * @param {PinnedMessageDeleteManyArgs} args - Arguments to filter PinnedMessages to delete.
     * @example
     * // Delete a few PinnedMessages
     * const { count } = await prisma.pinnedMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PinnedMessageDeleteManyArgs>(args?: SelectSubset<T, PinnedMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PinnedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PinnedMessages
     * const pinnedMessage = await prisma.pinnedMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PinnedMessageUpdateManyArgs>(args: SelectSubset<T, PinnedMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PinnedMessages and returns the data updated in the database.
     * @param {PinnedMessageUpdateManyAndReturnArgs} args - Arguments to update many PinnedMessages.
     * @example
     * // Update many PinnedMessages
     * const pinnedMessage = await prisma.pinnedMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PinnedMessages and only return the `id`
     * const pinnedMessageWithIdOnly = await prisma.pinnedMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PinnedMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PinnedMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PinnedMessage.
     * @param {PinnedMessageUpsertArgs} args - Arguments to update or create a PinnedMessage.
     * @example
     * // Update or create a PinnedMessage
     * const pinnedMessage = await prisma.pinnedMessage.upsert({
     *   create: {
     *     // ... data to create a PinnedMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PinnedMessage we want to update
     *   }
     * })
     */
    upsert<T extends PinnedMessageUpsertArgs>(args: SelectSubset<T, PinnedMessageUpsertArgs<ExtArgs>>): Prisma__PinnedMessageClient<$Result.GetResult<Prisma.$PinnedMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PinnedMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageCountArgs} args - Arguments to filter PinnedMessages to count.
     * @example
     * // Count the number of PinnedMessages
     * const count = await prisma.pinnedMessage.count({
     *   where: {
     *     // ... the filter for the PinnedMessages we want to count
     *   }
     * })
    **/
    count<T extends PinnedMessageCountArgs>(
      args?: Subset<T, PinnedMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PinnedMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PinnedMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PinnedMessageAggregateArgs>(args: Subset<T, PinnedMessageAggregateArgs>): Prisma.PrismaPromise<GetPinnedMessageAggregateType<T>>

    /**
     * Group by PinnedMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PinnedMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PinnedMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PinnedMessageGroupByArgs['orderBy'] }
        : { orderBy?: PinnedMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PinnedMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPinnedMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PinnedMessage model
   */
  readonly fields: PinnedMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PinnedMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PinnedMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pinner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PinnedMessage model
   */
  interface PinnedMessageFieldRefs {
    readonly id: FieldRef<"PinnedMessage", 'String'>
    readonly roomId: FieldRef<"PinnedMessage", 'String'>
    readonly messageId: FieldRef<"PinnedMessage", 'String'>
    readonly pinnedBy: FieldRef<"PinnedMessage", 'String'>
    readonly pinnedAt: FieldRef<"PinnedMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PinnedMessage findUnique
   */
  export type PinnedMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter, which PinnedMessage to fetch.
     */
    where: PinnedMessageWhereUniqueInput
  }

  /**
   * PinnedMessage findUniqueOrThrow
   */
  export type PinnedMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter, which PinnedMessage to fetch.
     */
    where: PinnedMessageWhereUniqueInput
  }

  /**
   * PinnedMessage findFirst
   */
  export type PinnedMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter, which PinnedMessage to fetch.
     */
    where?: PinnedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedMessages to fetch.
     */
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedMessages.
     */
    cursor?: PinnedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedMessages.
     */
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * PinnedMessage findFirstOrThrow
   */
  export type PinnedMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter, which PinnedMessage to fetch.
     */
    where?: PinnedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedMessages to fetch.
     */
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PinnedMessages.
     */
    cursor?: PinnedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedMessages.
     */
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * PinnedMessage findMany
   */
  export type PinnedMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter, which PinnedMessages to fetch.
     */
    where?: PinnedMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PinnedMessages to fetch.
     */
    orderBy?: PinnedMessageOrderByWithRelationInput | PinnedMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PinnedMessages.
     */
    cursor?: PinnedMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PinnedMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PinnedMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PinnedMessages.
     */
    distinct?: PinnedMessageScalarFieldEnum | PinnedMessageScalarFieldEnum[]
  }

  /**
   * PinnedMessage create
   */
  export type PinnedMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PinnedMessage.
     */
    data: XOR<PinnedMessageCreateInput, PinnedMessageUncheckedCreateInput>
  }

  /**
   * PinnedMessage createMany
   */
  export type PinnedMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PinnedMessages.
     */
    data: PinnedMessageCreateManyInput | PinnedMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PinnedMessage createManyAndReturn
   */
  export type PinnedMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PinnedMessages.
     */
    data: PinnedMessageCreateManyInput | PinnedMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PinnedMessage update
   */
  export type PinnedMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PinnedMessage.
     */
    data: XOR<PinnedMessageUpdateInput, PinnedMessageUncheckedUpdateInput>
    /**
     * Choose, which PinnedMessage to update.
     */
    where: PinnedMessageWhereUniqueInput
  }

  /**
   * PinnedMessage updateMany
   */
  export type PinnedMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PinnedMessages.
     */
    data: XOR<PinnedMessageUpdateManyMutationInput, PinnedMessageUncheckedUpdateManyInput>
    /**
     * Filter which PinnedMessages to update
     */
    where?: PinnedMessageWhereInput
    /**
     * Limit how many PinnedMessages to update.
     */
    limit?: number
  }

  /**
   * PinnedMessage updateManyAndReturn
   */
  export type PinnedMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * The data used to update PinnedMessages.
     */
    data: XOR<PinnedMessageUpdateManyMutationInput, PinnedMessageUncheckedUpdateManyInput>
    /**
     * Filter which PinnedMessages to update
     */
    where?: PinnedMessageWhereInput
    /**
     * Limit how many PinnedMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PinnedMessage upsert
   */
  export type PinnedMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PinnedMessage to update in case it exists.
     */
    where: PinnedMessageWhereUniqueInput
    /**
     * In case the PinnedMessage found by the `where` argument doesn't exist, create a new PinnedMessage with this data.
     */
    create: XOR<PinnedMessageCreateInput, PinnedMessageUncheckedCreateInput>
    /**
     * In case the PinnedMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PinnedMessageUpdateInput, PinnedMessageUncheckedUpdateInput>
  }

  /**
   * PinnedMessage delete
   */
  export type PinnedMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
    /**
     * Filter which PinnedMessage to delete.
     */
    where: PinnedMessageWhereUniqueInput
  }

  /**
   * PinnedMessage deleteMany
   */
  export type PinnedMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PinnedMessages to delete
     */
    where?: PinnedMessageWhereInput
    /**
     * Limit how many PinnedMessages to delete.
     */
    limit?: number
  }

  /**
   * PinnedMessage without action
   */
  export type PinnedMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PinnedMessage
     */
    select?: PinnedMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PinnedMessage
     */
    omit?: PinnedMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PinnedMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    handle: 'handle',
    name: 'name',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    role: 'role',
    permissions: 'permissions',
    isActive: 'isActive',
    isVerified: 'isVerified',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    platform: 'platform',
    pushToken: 'pushToken',
    refreshTokenHash: 'refreshTokenHash',
    deviceName: 'deviceName',
    deviceModel: 'deviceModel',
    ipAddress: 'ipAddress',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceSessionScalarFieldEnum = (typeof DeviceSessionScalarFieldEnum)[keyof typeof DeviceSessionScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    avatarUrl: 'avatarUrl',
    category: 'category',
    tags: 'tags',
    status: 'status',
    slowModeSeconds: 'slowModeSeconds',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomModeratorScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    userId: 'userId',
    assignedBy: 'assignedBy',
    assignedAt: 'assignedAt'
  };

  export type RoomModeratorScalarFieldEnum = (typeof RoomModeratorScalarFieldEnum)[keyof typeof RoomModeratorScalarFieldEnum]


  export const DMConversationScalarFieldEnum: {
    id: 'id',
    participant1Id: 'participant1Id',
    participant2Id: 'participant2Id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DMConversationScalarFieldEnum = (typeof DMConversationScalarFieldEnum)[keyof typeof DMConversationScalarFieldEnum]


  export const BlockedUserScalarFieldEnum: {
    id: 'id',
    blockerId: 'blockerId',
    blockedId: 'blockedId',
    createdAt: 'createdAt'
  };

  export type BlockedUserScalarFieldEnum = (typeof BlockedUserScalarFieldEnum)[keyof typeof BlockedUserScalarFieldEnum]


  export const MutedConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    dmConversationId: 'dmConversationId',
    mutedUntil: 'mutedUntil',
    createdAt: 'createdAt'
  };

  export type MutedConversationScalarFieldEnum = (typeof MutedConversationScalarFieldEnum)[keyof typeof MutedConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    type: 'type',
    content: 'content',
    mediaUrl: 'mediaUrl',
    mediaMetadata: 'mediaMetadata',
    senderId: 'senderId',
    roomId: 'roomId',
    dmConversationId: 'dmConversationId',
    replyToId: 'replyToId',
    isEdited: 'isEdited',
    editedAt: 'editedAt',
    deletedAt: 'deletedAt',
    clientTempId: 'clientTempId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageStatus_ScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    recipientId: 'recipientId',
    status: 'status',
    updatedAt: 'updatedAt'
  };

  export type MessageStatus_ScalarFieldEnum = (typeof MessageStatus_ScalarFieldEnum)[keyof typeof MessageStatus_ScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    userId: 'userId',
    emoji: 'emoji',
    createdAt: 'createdAt'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const PinnedMessageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    messageId: 'messageId',
    pinnedBy: 'pinnedBy',
    pinnedAt: 'pinnedAt'
  };

  export type PinnedMessageScalarFieldEnum = (typeof PinnedMessageScalarFieldEnum)[keyof typeof PinnedMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DevicePlatform'
   */
  export type EnumDevicePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DevicePlatform'>
    


  /**
   * Reference to a field of type 'DevicePlatform[]'
   */
  export type ListEnumDevicePlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DevicePlatform[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    handle?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    lastSeenAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deviceSessions?: DeviceSessionListRelationFilter
    roomModerations?: RoomModeratorListRelationFilter
    dmConversations1?: DMConversationListRelationFilter
    dmConversations2?: DMConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
    messageStatuses?: MessageStatus_ListRelationFilter
    reactions?: ReactionListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
    blockedByUsers?: BlockedUserListRelationFilter
    mutedItems?: MutedConversationListRelationFilter
    pinnedMessages?: PinnedMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deviceSessions?: DeviceSessionOrderByRelationAggregateInput
    roomModerations?: RoomModeratorOrderByRelationAggregateInput
    dmConversations1?: DMConversationOrderByRelationAggregateInput
    dmConversations2?: DMConversationOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    messageStatuses?: MessageStatus_OrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    blockedUsers?: BlockedUserOrderByRelationAggregateInput
    blockedByUsers?: BlockedUserOrderByRelationAggregateInput
    mutedItems?: MutedConversationOrderByRelationAggregateInput
    pinnedMessages?: PinnedMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    handle?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    lastSeenAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deviceSessions?: DeviceSessionListRelationFilter
    roomModerations?: RoomModeratorListRelationFilter
    dmConversations1?: DMConversationListRelationFilter
    dmConversations2?: DMConversationListRelationFilter
    sentMessages?: MessageListRelationFilter
    messageStatuses?: MessageStatus_ListRelationFilter
    reactions?: ReactionListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
    blockedByUsers?: BlockedUserListRelationFilter
    mutedItems?: MutedConversationListRelationFilter
    pinnedMessages?: PinnedMessageListRelationFilter
  }, "id" | "email" | "handle">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    handle?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    permissions?: StringNullableListFilter<"User">
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceSessionWhereInput = {
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    id?: UuidFilter<"DeviceSession"> | string
    userId?: UuidFilter<"DeviceSession"> | string
    deviceId?: StringFilter<"DeviceSession"> | string
    platform?: EnumDevicePlatformFilter<"DeviceSession"> | $Enums.DevicePlatform
    pushToken?: StringNullableFilter<"DeviceSession"> | string | null
    refreshTokenHash?: StringFilter<"DeviceSession"> | string
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    deviceModel?: StringNullableFilter<"DeviceSession"> | string | null
    ipAddress?: StringNullableFilter<"DeviceSession"> | string | null
    lastSeenAt?: DateTimeFilter<"DeviceSession"> | Date | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    refreshTokenHash?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_deviceId?: DeviceSessionUserIdDeviceIdCompoundUniqueInput
    AND?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    OR?: DeviceSessionWhereInput[]
    NOT?: DeviceSessionWhereInput | DeviceSessionWhereInput[]
    userId?: UuidFilter<"DeviceSession"> | string
    deviceId?: StringFilter<"DeviceSession"> | string
    platform?: EnumDevicePlatformFilter<"DeviceSession"> | $Enums.DevicePlatform
    pushToken?: StringNullableFilter<"DeviceSession"> | string | null
    refreshTokenHash?: StringFilter<"DeviceSession"> | string
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    deviceModel?: StringNullableFilter<"DeviceSession"> | string | null
    ipAddress?: StringNullableFilter<"DeviceSession"> | string | null
    lastSeenAt?: DateTimeFilter<"DeviceSession"> | Date | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_deviceId">

  export type DeviceSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    refreshTokenHash?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceSessionCountOrderByAggregateInput
    _max?: DeviceSessionMaxOrderByAggregateInput
    _min?: DeviceSessionMinOrderByAggregateInput
  }

  export type DeviceSessionScalarWhereWithAggregatesInput = {
    AND?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    OR?: DeviceSessionScalarWhereWithAggregatesInput[]
    NOT?: DeviceSessionScalarWhereWithAggregatesInput | DeviceSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DeviceSession"> | string
    userId?: UuidWithAggregatesFilter<"DeviceSession"> | string
    deviceId?: StringWithAggregatesFilter<"DeviceSession"> | string
    platform?: EnumDevicePlatformWithAggregatesFilter<"DeviceSession"> | $Enums.DevicePlatform
    pushToken?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    refreshTokenHash?: StringWithAggregatesFilter<"DeviceSession"> | string
    deviceName?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    deviceModel?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"DeviceSession"> | string | null
    lastSeenAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceSession"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: UuidFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    slug?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    avatarUrl?: StringNullableFilter<"Room"> | string | null
    category?: StringFilter<"Room"> | string
    tags?: StringNullableListFilter<"Room">
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    slowModeSeconds?: IntNullableFilter<"Room"> | number | null
    createdBy?: UuidFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    moderators?: RoomModeratorListRelationFilter
    messages?: MessageListRelationFilter
    pins?: PinnedMessageListRelationFilter
    mutedBy?: MutedConversationListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    slowModeSeconds?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    moderators?: RoomModeratorOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    pins?: PinnedMessageOrderByRelationAggregateInput
    mutedBy?: MutedConversationOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    description?: StringNullableFilter<"Room"> | string | null
    avatarUrl?: StringNullableFilter<"Room"> | string | null
    category?: StringFilter<"Room"> | string
    tags?: StringNullableListFilter<"Room">
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    slowModeSeconds?: IntNullableFilter<"Room"> | number | null
    createdBy?: UuidFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    moderators?: RoomModeratorListRelationFilter
    messages?: MessageListRelationFilter
    pins?: PinnedMessageListRelationFilter
    mutedBy?: MutedConversationListRelationFilter
  }, "id" | "name" | "slug">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    slowModeSeconds?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    slug?: StringWithAggregatesFilter<"Room"> | string
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Room"> | string | null
    category?: StringWithAggregatesFilter<"Room"> | string
    tags?: StringNullableListFilter<"Room">
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    slowModeSeconds?: IntNullableWithAggregatesFilter<"Room"> | number | null
    createdBy?: UuidWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomModeratorWhereInput = {
    AND?: RoomModeratorWhereInput | RoomModeratorWhereInput[]
    OR?: RoomModeratorWhereInput[]
    NOT?: RoomModeratorWhereInput | RoomModeratorWhereInput[]
    id?: UuidFilter<"RoomModerator"> | string
    roomId?: UuidFilter<"RoomModerator"> | string
    userId?: UuidFilter<"RoomModerator"> | string
    assignedBy?: UuidFilter<"RoomModerator"> | string
    assignedAt?: DateTimeFilter<"RoomModerator"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RoomModeratorOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RoomModeratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_userId?: RoomModeratorRoomIdUserIdCompoundUniqueInput
    AND?: RoomModeratorWhereInput | RoomModeratorWhereInput[]
    OR?: RoomModeratorWhereInput[]
    NOT?: RoomModeratorWhereInput | RoomModeratorWhereInput[]
    roomId?: UuidFilter<"RoomModerator"> | string
    userId?: UuidFilter<"RoomModerator"> | string
    assignedBy?: UuidFilter<"RoomModerator"> | string
    assignedAt?: DateTimeFilter<"RoomModerator"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "roomId_userId">

  export type RoomModeratorOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
    _count?: RoomModeratorCountOrderByAggregateInput
    _max?: RoomModeratorMaxOrderByAggregateInput
    _min?: RoomModeratorMinOrderByAggregateInput
  }

  export type RoomModeratorScalarWhereWithAggregatesInput = {
    AND?: RoomModeratorScalarWhereWithAggregatesInput | RoomModeratorScalarWhereWithAggregatesInput[]
    OR?: RoomModeratorScalarWhereWithAggregatesInput[]
    NOT?: RoomModeratorScalarWhereWithAggregatesInput | RoomModeratorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RoomModerator"> | string
    roomId?: UuidWithAggregatesFilter<"RoomModerator"> | string
    userId?: UuidWithAggregatesFilter<"RoomModerator"> | string
    assignedBy?: UuidWithAggregatesFilter<"RoomModerator"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"RoomModerator"> | Date | string
  }

  export type DMConversationWhereInput = {
    AND?: DMConversationWhereInput | DMConversationWhereInput[]
    OR?: DMConversationWhereInput[]
    NOT?: DMConversationWhereInput | DMConversationWhereInput[]
    id?: UuidFilter<"DMConversation"> | string
    participant1Id?: UuidFilter<"DMConversation"> | string
    participant2Id?: UuidFilter<"DMConversation"> | string
    createdAt?: DateTimeFilter<"DMConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DMConversation"> | Date | string
    participant1?: XOR<UserScalarRelationFilter, UserWhereInput>
    participant2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    mutedBy?: MutedConversationListRelationFilter
  }

  export type DMConversationOrderByWithRelationInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    participant1?: UserOrderByWithRelationInput
    participant2?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    mutedBy?: MutedConversationOrderByRelationAggregateInput
  }

  export type DMConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    participant1Id_participant2Id?: DMConversationParticipant1IdParticipant2IdCompoundUniqueInput
    AND?: DMConversationWhereInput | DMConversationWhereInput[]
    OR?: DMConversationWhereInput[]
    NOT?: DMConversationWhereInput | DMConversationWhereInput[]
    participant1Id?: UuidFilter<"DMConversation"> | string
    participant2Id?: UuidFilter<"DMConversation"> | string
    createdAt?: DateTimeFilter<"DMConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DMConversation"> | Date | string
    participant1?: XOR<UserScalarRelationFilter, UserWhereInput>
    participant2?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
    mutedBy?: MutedConversationListRelationFilter
  }, "id" | "participant1Id_participant2Id">

  export type DMConversationOrderByWithAggregationInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DMConversationCountOrderByAggregateInput
    _max?: DMConversationMaxOrderByAggregateInput
    _min?: DMConversationMinOrderByAggregateInput
  }

  export type DMConversationScalarWhereWithAggregatesInput = {
    AND?: DMConversationScalarWhereWithAggregatesInput | DMConversationScalarWhereWithAggregatesInput[]
    OR?: DMConversationScalarWhereWithAggregatesInput[]
    NOT?: DMConversationScalarWhereWithAggregatesInput | DMConversationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DMConversation"> | string
    participant1Id?: UuidWithAggregatesFilter<"DMConversation"> | string
    participant2Id?: UuidWithAggregatesFilter<"DMConversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DMConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DMConversation"> | Date | string
  }

  export type BlockedUserWhereInput = {
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    id?: UuidFilter<"BlockedUser"> | string
    blockerId?: UuidFilter<"BlockedUser"> | string
    blockedId?: UuidFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
    blocker?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocked?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlockedUserOrderByWithRelationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    blocker?: UserOrderByWithRelationInput
    blocked?: UserOrderByWithRelationInput
  }

  export type BlockedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blockerId_blockedId?: BlockedUserBlockerIdBlockedIdCompoundUniqueInput
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    blockerId?: UuidFilter<"BlockedUser"> | string
    blockedId?: UuidFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
    blocker?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocked?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "blockerId_blockedId">

  export type BlockedUserOrderByWithAggregationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
    _count?: BlockedUserCountOrderByAggregateInput
    _max?: BlockedUserMaxOrderByAggregateInput
    _min?: BlockedUserMinOrderByAggregateInput
  }

  export type BlockedUserScalarWhereWithAggregatesInput = {
    AND?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    OR?: BlockedUserScalarWhereWithAggregatesInput[]
    NOT?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BlockedUser"> | string
    blockerId?: UuidWithAggregatesFilter<"BlockedUser"> | string
    blockedId?: UuidWithAggregatesFilter<"BlockedUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlockedUser"> | Date | string
  }

  export type MutedConversationWhereInput = {
    AND?: MutedConversationWhereInput | MutedConversationWhereInput[]
    OR?: MutedConversationWhereInput[]
    NOT?: MutedConversationWhereInput | MutedConversationWhereInput[]
    id?: UuidFilter<"MutedConversation"> | string
    userId?: UuidFilter<"MutedConversation"> | string
    roomId?: UuidNullableFilter<"MutedConversation"> | string | null
    dmConversationId?: UuidNullableFilter<"MutedConversation"> | string | null
    mutedUntil?: DateTimeNullableFilter<"MutedConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"MutedConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    dmConversation?: XOR<DMConversationNullableScalarRelationFilter, DMConversationWhereInput> | null
  }

  export type MutedConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrderInput | SortOrder
    dmConversationId?: SortOrderInput | SortOrder
    mutedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    dmConversation?: DMConversationOrderByWithRelationInput
  }

  export type MutedConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_roomId?: MutedConversationUserIdRoomIdCompoundUniqueInput
    userId_dmConversationId?: MutedConversationUserIdDmConversationIdCompoundUniqueInput
    AND?: MutedConversationWhereInput | MutedConversationWhereInput[]
    OR?: MutedConversationWhereInput[]
    NOT?: MutedConversationWhereInput | MutedConversationWhereInput[]
    userId?: UuidFilter<"MutedConversation"> | string
    roomId?: UuidNullableFilter<"MutedConversation"> | string | null
    dmConversationId?: UuidNullableFilter<"MutedConversation"> | string | null
    mutedUntil?: DateTimeNullableFilter<"MutedConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"MutedConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    dmConversation?: XOR<DMConversationNullableScalarRelationFilter, DMConversationWhereInput> | null
  }, "id" | "userId_roomId" | "userId_dmConversationId">

  export type MutedConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrderInput | SortOrder
    dmConversationId?: SortOrderInput | SortOrder
    mutedUntil?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MutedConversationCountOrderByAggregateInput
    _max?: MutedConversationMaxOrderByAggregateInput
    _min?: MutedConversationMinOrderByAggregateInput
  }

  export type MutedConversationScalarWhereWithAggregatesInput = {
    AND?: MutedConversationScalarWhereWithAggregatesInput | MutedConversationScalarWhereWithAggregatesInput[]
    OR?: MutedConversationScalarWhereWithAggregatesInput[]
    NOT?: MutedConversationScalarWhereWithAggregatesInput | MutedConversationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MutedConversation"> | string
    userId?: UuidWithAggregatesFilter<"MutedConversation"> | string
    roomId?: UuidNullableWithAggregatesFilter<"MutedConversation"> | string | null
    dmConversationId?: UuidNullableWithAggregatesFilter<"MutedConversation"> | string | null
    mutedUntil?: DateTimeNullableWithAggregatesFilter<"MutedConversation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MutedConversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaMetadata?: JsonNullableFilter<"Message">
    senderId?: UuidFilter<"Message"> | string
    roomId?: UuidNullableFilter<"Message"> | string | null
    dmConversationId?: UuidNullableFilter<"Message"> | string | null
    replyToId?: UuidNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    clientTempId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    dmConversation?: XOR<DMConversationNullableScalarRelationFilter, DMConversationWhereInput> | null
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    statuses?: MessageStatus_ListRelationFilter
    reactions?: ReactionListRelationFilter
    pins?: PinnedMessageListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaMetadata?: SortOrderInput | SortOrder
    senderId?: SortOrder
    roomId?: SortOrderInput | SortOrder
    dmConversationId?: SortOrderInput | SortOrder
    replyToId?: SortOrderInput | SortOrder
    isEdited?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    clientTempId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    dmConversation?: DMConversationOrderByWithRelationInput
    replyTo?: MessageOrderByWithRelationInput
    replies?: MessageOrderByRelationAggregateInput
    statuses?: MessageStatus_OrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    pins?: PinnedMessageOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clientTempId?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaMetadata?: JsonNullableFilter<"Message">
    senderId?: UuidFilter<"Message"> | string
    roomId?: UuidNullableFilter<"Message"> | string | null
    dmConversationId?: UuidNullableFilter<"Message"> | string | null
    replyToId?: UuidNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    dmConversation?: XOR<DMConversationNullableScalarRelationFilter, DMConversationWhereInput> | null
    replyTo?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    replies?: MessageListRelationFilter
    statuses?: MessageStatus_ListRelationFilter
    reactions?: ReactionListRelationFilter
    pins?: PinnedMessageListRelationFilter
  }, "id" | "clientTempId">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    mediaMetadata?: SortOrderInput | SortOrder
    senderId?: SortOrder
    roomId?: SortOrderInput | SortOrder
    dmConversationId?: SortOrderInput | SortOrder
    replyToId?: SortOrderInput | SortOrder
    isEdited?: SortOrder
    editedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    clientTempId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    mediaMetadata?: JsonNullableWithAggregatesFilter<"Message">
    senderId?: UuidWithAggregatesFilter<"Message"> | string
    roomId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    dmConversationId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    replyToId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    isEdited?: BoolWithAggregatesFilter<"Message"> | boolean
    editedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    clientTempId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MessageStatus_WhereInput = {
    AND?: MessageStatus_WhereInput | MessageStatus_WhereInput[]
    OR?: MessageStatus_WhereInput[]
    NOT?: MessageStatus_WhereInput | MessageStatus_WhereInput[]
    id?: UuidFilter<"MessageStatus_"> | string
    messageId?: UuidFilter<"MessageStatus_"> | string
    recipientId?: UuidFilter<"MessageStatus_"> | string
    status?: EnumMessageStatusFilter<"MessageStatus_"> | $Enums.MessageStatus
    updatedAt?: DateTimeFilter<"MessageStatus_"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageStatus_OrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type MessageStatus_WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_recipientId?: MessageStatus_MessageIdRecipientIdCompoundUniqueInput
    AND?: MessageStatus_WhereInput | MessageStatus_WhereInput[]
    OR?: MessageStatus_WhereInput[]
    NOT?: MessageStatus_WhereInput | MessageStatus_WhereInput[]
    messageId?: UuidFilter<"MessageStatus_"> | string
    recipientId?: UuidFilter<"MessageStatus_"> | string
    status?: EnumMessageStatusFilter<"MessageStatus_"> | $Enums.MessageStatus
    updatedAt?: DateTimeFilter<"MessageStatus_"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_recipientId">

  export type MessageStatus_OrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageStatus_CountOrderByAggregateInput
    _max?: MessageStatus_MaxOrderByAggregateInput
    _min?: MessageStatus_MinOrderByAggregateInput
  }

  export type MessageStatus_ScalarWhereWithAggregatesInput = {
    AND?: MessageStatus_ScalarWhereWithAggregatesInput | MessageStatus_ScalarWhereWithAggregatesInput[]
    OR?: MessageStatus_ScalarWhereWithAggregatesInput[]
    NOT?: MessageStatus_ScalarWhereWithAggregatesInput | MessageStatus_ScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MessageStatus_"> | string
    messageId?: UuidWithAggregatesFilter<"MessageStatus_"> | string
    recipientId?: UuidWithAggregatesFilter<"MessageStatus_"> | string
    status?: EnumMessageStatusWithAggregatesFilter<"MessageStatus_"> | $Enums.MessageStatus
    updatedAt?: DateTimeWithAggregatesFilter<"MessageStatus_"> | Date | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: UuidFilter<"Reaction"> | string
    messageId?: UuidFilter<"Reaction"> | string
    userId?: UuidFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_userId_emoji?: ReactionMessageIdUserIdEmojiCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    messageId?: UuidFilter<"Reaction"> | string
    userId?: UuidFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_userId_emoji">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Reaction"> | string
    messageId?: UuidWithAggregatesFilter<"Reaction"> | string
    userId?: UuidWithAggregatesFilter<"Reaction"> | string
    emoji?: StringWithAggregatesFilter<"Reaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type PinnedMessageWhereInput = {
    AND?: PinnedMessageWhereInput | PinnedMessageWhereInput[]
    OR?: PinnedMessageWhereInput[]
    NOT?: PinnedMessageWhereInput | PinnedMessageWhereInput[]
    id?: UuidFilter<"PinnedMessage"> | string
    roomId?: UuidFilter<"PinnedMessage"> | string
    messageId?: UuidFilter<"PinnedMessage"> | string
    pinnedBy?: UuidFilter<"PinnedMessage"> | string
    pinnedAt?: DateTimeFilter<"PinnedMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    pinner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PinnedMessageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    messageId?: SortOrder
    pinnedBy?: SortOrder
    pinnedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
    pinner?: UserOrderByWithRelationInput
  }

  export type PinnedMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId_messageId?: PinnedMessageRoomIdMessageIdCompoundUniqueInput
    AND?: PinnedMessageWhereInput | PinnedMessageWhereInput[]
    OR?: PinnedMessageWhereInput[]
    NOT?: PinnedMessageWhereInput | PinnedMessageWhereInput[]
    roomId?: UuidFilter<"PinnedMessage"> | string
    messageId?: UuidFilter<"PinnedMessage"> | string
    pinnedBy?: UuidFilter<"PinnedMessage"> | string
    pinnedAt?: DateTimeFilter<"PinnedMessage"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    pinner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "roomId_messageId">

  export type PinnedMessageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    messageId?: SortOrder
    pinnedBy?: SortOrder
    pinnedAt?: SortOrder
    _count?: PinnedMessageCountOrderByAggregateInput
    _max?: PinnedMessageMaxOrderByAggregateInput
    _min?: PinnedMessageMinOrderByAggregateInput
  }

  export type PinnedMessageScalarWhereWithAggregatesInput = {
    AND?: PinnedMessageScalarWhereWithAggregatesInput | PinnedMessageScalarWhereWithAggregatesInput[]
    OR?: PinnedMessageScalarWhereWithAggregatesInput[]
    NOT?: PinnedMessageScalarWhereWithAggregatesInput | PinnedMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PinnedMessage"> | string
    roomId?: UuidWithAggregatesFilter<"PinnedMessage"> | string
    messageId?: UuidWithAggregatesFilter<"PinnedMessage"> | string
    pinnedBy?: UuidWithAggregatesFilter<"PinnedMessage"> | string
    pinnedAt?: DateTimeWithAggregatesFilter<"PinnedMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionCreateInput = {
    id?: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeviceSessionsInput
  }

  export type DeviceSessionUncheckedCreateInput = {
    id?: string
    userId: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeviceSessionsNestedInput
  }

  export type DeviceSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionCreateManyInput = {
    id?: string
    userId: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorCreateInput = {
    id?: string
    assignedBy: string
    assignedAt?: Date | string
    room: RoomCreateNestedOneWithoutModeratorsInput
    user: UserCreateNestedOneWithoutRoomModerationsInput
  }

  export type RoomModeratorUncheckedCreateInput = {
    id?: string
    roomId: string
    userId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type RoomModeratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutModeratorsNestedInput
    user?: UserUpdateOneRequiredWithoutRoomModerationsNestedInput
  }

  export type RoomModeratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorCreateManyInput = {
    id?: string
    roomId: string
    userId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type RoomModeratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DMConversationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant1: UserCreateNestedOneWithoutDmConversations1Input
    participant2: UserCreateNestedOneWithoutDmConversations2Input
    messages?: MessageCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUncheckedCreateInput = {
    id?: string
    participant1Id: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant1?: UserUpdateOneRequiredWithoutDmConversations1NestedInput
    participant2?: UserUpdateOneRequiredWithoutDmConversations2NestedInput
    messages?: MessageUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationCreateManyInput = {
    id?: string
    participant1Id: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DMConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DMConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserCreateInput = {
    id?: string
    createdAt?: Date | string
    blocker: UserCreateNestedOneWithoutBlockedUsersInput
    blocked: UserCreateNestedOneWithoutBlockedByUsersInput
  }

  export type BlockedUserUncheckedCreateInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput
    blocked?: UserUpdateOneRequiredWithoutBlockedByUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserCreateManyInput = {
    id?: string
    blockerId: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationCreateInput = {
    id?: string
    mutedUntil?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMutedItemsInput
    room?: RoomCreateNestedOneWithoutMutedByInput
    dmConversation?: DMConversationCreateNestedOneWithoutMutedByInput
  }

  export type MutedConversationUncheckedCreateInput = {
    id?: string
    userId: string
    roomId?: string | null
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MutedConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMutedItemsNestedInput
    room?: RoomUpdateOneWithoutMutedByNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMutedByNestedInput
  }

  export type MutedConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationCreateManyInput = {
    id?: string
    userId: string
    roomId?: string | null
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MutedConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_CreateInput = {
    id?: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutStatusesInput
    recipient: UserCreateNestedOneWithoutMessageStatusesInput
  }

  export type MessageStatus_UncheckedCreateInput = {
    id?: string
    messageId: string
    recipientId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type MessageStatus_UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutStatusesNestedInput
    recipient?: UserUpdateOneRequiredWithoutMessageStatusesNestedInput
  }

  export type MessageStatus_UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_CreateManyInput = {
    id?: string
    messageId: string
    recipientId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type MessageStatus_UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutReactionsInput
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    messageId: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    messageId: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageCreateInput = {
    id?: string
    pinnedAt?: Date | string
    room: RoomCreateNestedOneWithoutPinsInput
    message: MessageCreateNestedOneWithoutPinsInput
    pinner: UserCreateNestedOneWithoutPinnedMessagesInput
  }

  export type PinnedMessageUncheckedCreateInput = {
    id?: string
    roomId: string
    messageId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type PinnedMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPinsNestedInput
    message?: MessageUpdateOneRequiredWithoutPinsNestedInput
    pinner?: UserUpdateOneRequiredWithoutPinnedMessagesNestedInput
  }

  export type PinnedMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageCreateManyInput = {
    id?: string
    roomId: string
    messageId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type PinnedMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeviceSessionListRelationFilter = {
    every?: DeviceSessionWhereInput
    some?: DeviceSessionWhereInput
    none?: DeviceSessionWhereInput
  }

  export type RoomModeratorListRelationFilter = {
    every?: RoomModeratorWhereInput
    some?: RoomModeratorWhereInput
    none?: RoomModeratorWhereInput
  }

  export type DMConversationListRelationFilter = {
    every?: DMConversationWhereInput
    some?: DMConversationWhereInput
    none?: DMConversationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageStatus_ListRelationFilter = {
    every?: MessageStatus_WhereInput
    some?: MessageStatus_WhereInput
    none?: MessageStatus_WhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type BlockedUserListRelationFilter = {
    every?: BlockedUserWhereInput
    some?: BlockedUserWhereInput
    none?: BlockedUserWhereInput
  }

  export type MutedConversationListRelationFilter = {
    every?: MutedConversationWhereInput
    some?: MutedConversationWhereInput
    none?: MutedConversationWhereInput
  }

  export type PinnedMessageListRelationFilter = {
    every?: PinnedMessageWhereInput
    some?: PinnedMessageWhereInput
    none?: PinnedMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomModeratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DMConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageStatus_OrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MutedConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PinnedMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    handle?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDevicePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | EnumDevicePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumDevicePlatformFilter<$PrismaModel> | $Enums.DevicePlatform
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceSessionUserIdDeviceIdCompoundUniqueInput = {
    userId: string
    deviceId: string
  }

  export type DeviceSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    pushToken?: SortOrder
    refreshTokenHash?: SortOrder
    deviceName?: SortOrder
    deviceModel?: SortOrder
    ipAddress?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    pushToken?: SortOrder
    refreshTokenHash?: SortOrder
    deviceName?: SortOrder
    deviceModel?: SortOrder
    ipAddress?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    platform?: SortOrder
    pushToken?: SortOrder
    refreshTokenHash?: SortOrder
    deviceName?: SortOrder
    deviceModel?: SortOrder
    ipAddress?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDevicePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | EnumDevicePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel> | $Enums.DevicePlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDevicePlatformFilter<$PrismaModel>
    _max?: NestedEnumDevicePlatformFilter<$PrismaModel>
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    status?: SortOrder
    slowModeSeconds?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    slowModeSeconds?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    slowModeSeconds?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatarUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    slowModeSeconds?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    slowModeSeconds?: SortOrder
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomModeratorRoomIdUserIdCompoundUniqueInput = {
    roomId: string
    userId: string
  }

  export type RoomModeratorCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type RoomModeratorMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type RoomModeratorMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    userId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type DMConversationParticipant1IdParticipant2IdCompoundUniqueInput = {
    participant1Id: string
    participant2Id: string
  }

  export type DMConversationCountOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DMConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DMConversationMinOrderByAggregateInput = {
    id?: SortOrder
    participant1Id?: SortOrder
    participant2Id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlockedUserBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: string
    blockedId: string
  }

  export type BlockedUserCountOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedUserMinOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type DMConversationNullableScalarRelationFilter = {
    is?: DMConversationWhereInput | null
    isNot?: DMConversationWhereInput | null
  }

  export type MutedConversationUserIdRoomIdCompoundUniqueInput = {
    userId: string
    roomId: string
  }

  export type MutedConversationUserIdDmConversationIdCompoundUniqueInput = {
    userId: string
    dmConversationId: string
  }

  export type MutedConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    mutedUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type MutedConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    mutedUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type MutedConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    mutedUntil?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    mediaMetadata?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    replyToId?: SortOrder
    isEdited?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    clientTempId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    replyToId?: SortOrder
    isEdited?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    clientTempId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    content?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    roomId?: SortOrder
    dmConversationId?: SortOrder
    replyToId?: SortOrder
    isEdited?: SortOrder
    editedAt?: SortOrder
    deletedAt?: SortOrder
    clientTempId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageStatus_MessageIdRecipientIdCompoundUniqueInput = {
    messageId: string
    recipientId: string
  }

  export type MessageStatus_CountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatus_MaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageStatus_MinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    recipientId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type ReactionMessageIdUserIdEmojiCompoundUniqueInput = {
    messageId: string
    userId: string
    emoji: string
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    emoji?: SortOrder
    createdAt?: SortOrder
  }

  export type PinnedMessageRoomIdMessageIdCompoundUniqueInput = {
    roomId: string
    messageId: string
  }

  export type PinnedMessageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    messageId?: SortOrder
    pinnedBy?: SortOrder
    pinnedAt?: SortOrder
  }

  export type PinnedMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    messageId?: SortOrder
    pinnedBy?: SortOrder
    pinnedAt?: SortOrder
  }

  export type PinnedMessageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    messageId?: SortOrder
    pinnedBy?: SortOrder
    pinnedAt?: SortOrder
  }

  export type UserCreatepermissionsInput = {
    set: string[]
  }

  export type DeviceSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type RoomModeratorCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput> | RoomModeratorCreateWithoutUserInput[] | RoomModeratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutUserInput | RoomModeratorCreateOrConnectWithoutUserInput[]
    createMany?: RoomModeratorCreateManyUserInputEnvelope
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
  }

  export type DMConversationCreateNestedManyWithoutParticipant1Input = {
    create?: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input> | DMConversationCreateWithoutParticipant1Input[] | DMConversationUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant1Input | DMConversationCreateOrConnectWithoutParticipant1Input[]
    createMany?: DMConversationCreateManyParticipant1InputEnvelope
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
  }

  export type DMConversationCreateNestedManyWithoutParticipant2Input = {
    create?: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input> | DMConversationCreateWithoutParticipant2Input[] | DMConversationUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant2Input | DMConversationCreateOrConnectWithoutParticipant2Input[]
    createMany?: DMConversationCreateManyParticipant2InputEnvelope
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageStatus_CreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput> | MessageStatus_CreateWithoutRecipientInput[] | MessageStatus_UncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutRecipientInput | MessageStatus_CreateOrConnectWithoutRecipientInput[]
    createMany?: MessageStatus_CreateManyRecipientInputEnvelope
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type MutedConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput> | MutedConversationCreateWithoutUserInput[] | MutedConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutUserInput | MutedConversationCreateOrConnectWithoutUserInput[]
    createMany?: MutedConversationCreateManyUserInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type PinnedMessageCreateNestedManyWithoutPinnerInput = {
    create?: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput> | PinnedMessageCreateWithoutPinnerInput[] | PinnedMessageUncheckedCreateWithoutPinnerInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutPinnerInput | PinnedMessageCreateOrConnectWithoutPinnerInput[]
    createMany?: PinnedMessageCreateManyPinnerInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type DeviceSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
  }

  export type RoomModeratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput> | RoomModeratorCreateWithoutUserInput[] | RoomModeratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutUserInput | RoomModeratorCreateOrConnectWithoutUserInput[]
    createMany?: RoomModeratorCreateManyUserInputEnvelope
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
  }

  export type DMConversationUncheckedCreateNestedManyWithoutParticipant1Input = {
    create?: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input> | DMConversationCreateWithoutParticipant1Input[] | DMConversationUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant1Input | DMConversationCreateOrConnectWithoutParticipant1Input[]
    createMany?: DMConversationCreateManyParticipant1InputEnvelope
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
  }

  export type DMConversationUncheckedCreateNestedManyWithoutParticipant2Input = {
    create?: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input> | DMConversationCreateWithoutParticipant2Input[] | DMConversationUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant2Input | DMConversationCreateOrConnectWithoutParticipant2Input[]
    createMany?: DMConversationCreateManyParticipant2InputEnvelope
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput> | MessageStatus_CreateWithoutRecipientInput[] | MessageStatus_UncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutRecipientInput | MessageStatus_CreateOrConnectWithoutRecipientInput[]
    createMany?: MessageStatus_CreateManyRecipientInputEnvelope
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type MutedConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput> | MutedConversationCreateWithoutUserInput[] | MutedConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutUserInput | MutedConversationCreateOrConnectWithoutUserInput[]
    createMany?: MutedConversationCreateManyUserInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput = {
    create?: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput> | PinnedMessageCreateWithoutPinnerInput[] | PinnedMessageUncheckedCreateWithoutPinnerInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutPinnerInput | PinnedMessageCreateOrConnectWithoutPinnerInput[]
    createMany?: PinnedMessageCreateManyPinnerInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutUserInput | DeviceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutUserInput | DeviceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutUserInput | DeviceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type RoomModeratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput> | RoomModeratorCreateWithoutUserInput[] | RoomModeratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutUserInput | RoomModeratorCreateOrConnectWithoutUserInput[]
    upsert?: RoomModeratorUpsertWithWhereUniqueWithoutUserInput | RoomModeratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomModeratorCreateManyUserInputEnvelope
    set?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    disconnect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    delete?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    update?: RoomModeratorUpdateWithWhereUniqueWithoutUserInput | RoomModeratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomModeratorUpdateManyWithWhereWithoutUserInput | RoomModeratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
  }

  export type DMConversationUpdateManyWithoutParticipant1NestedInput = {
    create?: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input> | DMConversationCreateWithoutParticipant1Input[] | DMConversationUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant1Input | DMConversationCreateOrConnectWithoutParticipant1Input[]
    upsert?: DMConversationUpsertWithWhereUniqueWithoutParticipant1Input | DMConversationUpsertWithWhereUniqueWithoutParticipant1Input[]
    createMany?: DMConversationCreateManyParticipant1InputEnvelope
    set?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    disconnect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    delete?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    update?: DMConversationUpdateWithWhereUniqueWithoutParticipant1Input | DMConversationUpdateWithWhereUniqueWithoutParticipant1Input[]
    updateMany?: DMConversationUpdateManyWithWhereWithoutParticipant1Input | DMConversationUpdateManyWithWhereWithoutParticipant1Input[]
    deleteMany?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
  }

  export type DMConversationUpdateManyWithoutParticipant2NestedInput = {
    create?: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input> | DMConversationCreateWithoutParticipant2Input[] | DMConversationUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant2Input | DMConversationCreateOrConnectWithoutParticipant2Input[]
    upsert?: DMConversationUpsertWithWhereUniqueWithoutParticipant2Input | DMConversationUpsertWithWhereUniqueWithoutParticipant2Input[]
    createMany?: DMConversationCreateManyParticipant2InputEnvelope
    set?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    disconnect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    delete?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    update?: DMConversationUpdateWithWhereUniqueWithoutParticipant2Input | DMConversationUpdateWithWhereUniqueWithoutParticipant2Input[]
    updateMany?: DMConversationUpdateManyWithWhereWithoutParticipant2Input | DMConversationUpdateManyWithWhereWithoutParticipant2Input[]
    deleteMany?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageStatus_UpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput> | MessageStatus_CreateWithoutRecipientInput[] | MessageStatus_UncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutRecipientInput | MessageStatus_CreateOrConnectWithoutRecipientInput[]
    upsert?: MessageStatus_UpsertWithWhereUniqueWithoutRecipientInput | MessageStatus_UpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: MessageStatus_CreateManyRecipientInputEnvelope
    set?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    disconnect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    delete?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    update?: MessageStatus_UpdateWithWhereUniqueWithoutRecipientInput | MessageStatus_UpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageStatus_UpdateManyWithWhereWithoutRecipientInput | MessageStatus_UpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type MutedConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput> | MutedConversationCreateWithoutUserInput[] | MutedConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutUserInput | MutedConversationCreateOrConnectWithoutUserInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutUserInput | MutedConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MutedConversationCreateManyUserInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutUserInput | MutedConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutUserInput | MutedConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type PinnedMessageUpdateManyWithoutPinnerNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput> | PinnedMessageCreateWithoutPinnerInput[] | PinnedMessageUncheckedCreateWithoutPinnerInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutPinnerInput | PinnedMessageCreateOrConnectWithoutPinnerInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutPinnerInput | PinnedMessageUpsertWithWhereUniqueWithoutPinnerInput[]
    createMany?: PinnedMessageCreateManyPinnerInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutPinnerInput | PinnedMessageUpdateWithWhereUniqueWithoutPinnerInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutPinnerInput | PinnedMessageUpdateManyWithWhereWithoutPinnerInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type DeviceSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput> | DeviceSessionCreateWithoutUserInput[] | DeviceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceSessionCreateOrConnectWithoutUserInput | DeviceSessionCreateOrConnectWithoutUserInput[]
    upsert?: DeviceSessionUpsertWithWhereUniqueWithoutUserInput | DeviceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceSessionCreateManyUserInputEnvelope
    set?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    disconnect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    delete?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    connect?: DeviceSessionWhereUniqueInput | DeviceSessionWhereUniqueInput[]
    update?: DeviceSessionUpdateWithWhereUniqueWithoutUserInput | DeviceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceSessionUpdateManyWithWhereWithoutUserInput | DeviceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
  }

  export type RoomModeratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput> | RoomModeratorCreateWithoutUserInput[] | RoomModeratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutUserInput | RoomModeratorCreateOrConnectWithoutUserInput[]
    upsert?: RoomModeratorUpsertWithWhereUniqueWithoutUserInput | RoomModeratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoomModeratorCreateManyUserInputEnvelope
    set?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    disconnect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    delete?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    update?: RoomModeratorUpdateWithWhereUniqueWithoutUserInput | RoomModeratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoomModeratorUpdateManyWithWhereWithoutUserInput | RoomModeratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
  }

  export type DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput = {
    create?: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input> | DMConversationCreateWithoutParticipant1Input[] | DMConversationUncheckedCreateWithoutParticipant1Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant1Input | DMConversationCreateOrConnectWithoutParticipant1Input[]
    upsert?: DMConversationUpsertWithWhereUniqueWithoutParticipant1Input | DMConversationUpsertWithWhereUniqueWithoutParticipant1Input[]
    createMany?: DMConversationCreateManyParticipant1InputEnvelope
    set?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    disconnect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    delete?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    update?: DMConversationUpdateWithWhereUniqueWithoutParticipant1Input | DMConversationUpdateWithWhereUniqueWithoutParticipant1Input[]
    updateMany?: DMConversationUpdateManyWithWhereWithoutParticipant1Input | DMConversationUpdateManyWithWhereWithoutParticipant1Input[]
    deleteMany?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
  }

  export type DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput = {
    create?: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input> | DMConversationCreateWithoutParticipant2Input[] | DMConversationUncheckedCreateWithoutParticipant2Input[]
    connectOrCreate?: DMConversationCreateOrConnectWithoutParticipant2Input | DMConversationCreateOrConnectWithoutParticipant2Input[]
    upsert?: DMConversationUpsertWithWhereUniqueWithoutParticipant2Input | DMConversationUpsertWithWhereUniqueWithoutParticipant2Input[]
    createMany?: DMConversationCreateManyParticipant2InputEnvelope
    set?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    disconnect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    delete?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    connect?: DMConversationWhereUniqueInput | DMConversationWhereUniqueInput[]
    update?: DMConversationUpdateWithWhereUniqueWithoutParticipant2Input | DMConversationUpdateWithWhereUniqueWithoutParticipant2Input[]
    updateMany?: DMConversationUpdateManyWithWhereWithoutParticipant2Input | DMConversationUpdateManyWithWhereWithoutParticipant2Input[]
    deleteMany?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput> | MessageStatus_CreateWithoutRecipientInput[] | MessageStatus_UncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutRecipientInput | MessageStatus_CreateOrConnectWithoutRecipientInput[]
    upsert?: MessageStatus_UpsertWithWhereUniqueWithoutRecipientInput | MessageStatus_UpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: MessageStatus_CreateManyRecipientInputEnvelope
    set?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    disconnect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    delete?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    update?: MessageStatus_UpdateWithWhereUniqueWithoutRecipientInput | MessageStatus_UpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: MessageStatus_UpdateManyWithWhereWithoutRecipientInput | MessageStatus_UpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type MutedConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput> | MutedConversationCreateWithoutUserInput[] | MutedConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutUserInput | MutedConversationCreateOrConnectWithoutUserInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutUserInput | MutedConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MutedConversationCreateManyUserInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutUserInput | MutedConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutUserInput | MutedConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput> | PinnedMessageCreateWithoutPinnerInput[] | PinnedMessageUncheckedCreateWithoutPinnerInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutPinnerInput | PinnedMessageCreateOrConnectWithoutPinnerInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutPinnerInput | PinnedMessageUpsertWithWhereUniqueWithoutPinnerInput[]
    createMany?: PinnedMessageCreateManyPinnerInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutPinnerInput | PinnedMessageUpdateWithWhereUniqueWithoutPinnerInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutPinnerInput | PinnedMessageUpdateManyWithWhereWithoutPinnerInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeviceSessionsInput = {
    create?: XOR<UserCreateWithoutDeviceSessionsInput, UserUncheckedCreateWithoutDeviceSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDevicePlatformFieldUpdateOperationsInput = {
    set?: $Enums.DevicePlatform
  }

  export type UserUpdateOneRequiredWithoutDeviceSessionsNestedInput = {
    create?: XOR<UserCreateWithoutDeviceSessionsInput, UserUncheckedCreateWithoutDeviceSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceSessionsInput
    upsert?: UserUpsertWithoutDeviceSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeviceSessionsInput, UserUpdateWithoutDeviceSessionsInput>, UserUncheckedUpdateWithoutDeviceSessionsInput>
  }

  export type RoomCreatetagsInput = {
    set: string[]
  }

  export type RoomModeratorCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput> | RoomModeratorCreateWithoutRoomInput[] | RoomModeratorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutRoomInput | RoomModeratorCreateOrConnectWithoutRoomInput[]
    createMany?: RoomModeratorCreateManyRoomInputEnvelope
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PinnedMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput> | PinnedMessageCreateWithoutRoomInput[] | PinnedMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutRoomInput | PinnedMessageCreateOrConnectWithoutRoomInput[]
    createMany?: PinnedMessageCreateManyRoomInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type MutedConversationCreateNestedManyWithoutRoomInput = {
    create?: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput> | MutedConversationCreateWithoutRoomInput[] | MutedConversationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutRoomInput | MutedConversationCreateOrConnectWithoutRoomInput[]
    createMany?: MutedConversationCreateManyRoomInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type RoomModeratorUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput> | RoomModeratorCreateWithoutRoomInput[] | RoomModeratorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutRoomInput | RoomModeratorCreateOrConnectWithoutRoomInput[]
    createMany?: RoomModeratorCreateManyRoomInputEnvelope
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PinnedMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput> | PinnedMessageCreateWithoutRoomInput[] | PinnedMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutRoomInput | PinnedMessageCreateOrConnectWithoutRoomInput[]
    createMany?: PinnedMessageCreateManyRoomInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type MutedConversationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput> | MutedConversationCreateWithoutRoomInput[] | MutedConversationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutRoomInput | MutedConversationCreateOrConnectWithoutRoomInput[]
    createMany?: MutedConversationCreateManyRoomInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type RoomUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomModeratorUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput> | RoomModeratorCreateWithoutRoomInput[] | RoomModeratorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutRoomInput | RoomModeratorCreateOrConnectWithoutRoomInput[]
    upsert?: RoomModeratorUpsertWithWhereUniqueWithoutRoomInput | RoomModeratorUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomModeratorCreateManyRoomInputEnvelope
    set?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    disconnect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    delete?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    update?: RoomModeratorUpdateWithWhereUniqueWithoutRoomInput | RoomModeratorUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomModeratorUpdateManyWithWhereWithoutRoomInput | RoomModeratorUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PinnedMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput> | PinnedMessageCreateWithoutRoomInput[] | PinnedMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutRoomInput | PinnedMessageCreateOrConnectWithoutRoomInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutRoomInput | PinnedMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PinnedMessageCreateManyRoomInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutRoomInput | PinnedMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutRoomInput | PinnedMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type MutedConversationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput> | MutedConversationCreateWithoutRoomInput[] | MutedConversationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutRoomInput | MutedConversationCreateOrConnectWithoutRoomInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutRoomInput | MutedConversationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MutedConversationCreateManyRoomInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutRoomInput | MutedConversationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutRoomInput | MutedConversationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type RoomModeratorUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput> | RoomModeratorCreateWithoutRoomInput[] | RoomModeratorUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomModeratorCreateOrConnectWithoutRoomInput | RoomModeratorCreateOrConnectWithoutRoomInput[]
    upsert?: RoomModeratorUpsertWithWhereUniqueWithoutRoomInput | RoomModeratorUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomModeratorCreateManyRoomInputEnvelope
    set?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    disconnect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    delete?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    connect?: RoomModeratorWhereUniqueInput | RoomModeratorWhereUniqueInput[]
    update?: RoomModeratorUpdateWithWhereUniqueWithoutRoomInput | RoomModeratorUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomModeratorUpdateManyWithWhereWithoutRoomInput | RoomModeratorUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput> | MessageCreateWithoutRoomInput[] | MessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRoomInput | MessageCreateOrConnectWithoutRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRoomInput | MessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MessageCreateManyRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRoomInput | MessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRoomInput | MessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PinnedMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput> | PinnedMessageCreateWithoutRoomInput[] | PinnedMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutRoomInput | PinnedMessageCreateOrConnectWithoutRoomInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutRoomInput | PinnedMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PinnedMessageCreateManyRoomInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutRoomInput | PinnedMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutRoomInput | PinnedMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type MutedConversationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput> | MutedConversationCreateWithoutRoomInput[] | MutedConversationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutRoomInput | MutedConversationCreateOrConnectWithoutRoomInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutRoomInput | MutedConversationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MutedConversationCreateManyRoomInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutRoomInput | MutedConversationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutRoomInput | MutedConversationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutModeratorsInput = {
    create?: XOR<RoomCreateWithoutModeratorsInput, RoomUncheckedCreateWithoutModeratorsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutModeratorsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRoomModerationsInput = {
    create?: XOR<UserCreateWithoutRoomModerationsInput, UserUncheckedCreateWithoutRoomModerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomModerationsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutModeratorsNestedInput = {
    create?: XOR<RoomCreateWithoutModeratorsInput, RoomUncheckedCreateWithoutModeratorsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutModeratorsInput
    upsert?: RoomUpsertWithoutModeratorsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutModeratorsInput, RoomUpdateWithoutModeratorsInput>, RoomUncheckedUpdateWithoutModeratorsInput>
  }

  export type UserUpdateOneRequiredWithoutRoomModerationsNestedInput = {
    create?: XOR<UserCreateWithoutRoomModerationsInput, UserUncheckedCreateWithoutRoomModerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomModerationsInput
    upsert?: UserUpsertWithoutRoomModerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomModerationsInput, UserUpdateWithoutRoomModerationsInput>, UserUncheckedUpdateWithoutRoomModerationsInput>
  }

  export type UserCreateNestedOneWithoutDmConversations1Input = {
    create?: XOR<UserCreateWithoutDmConversations1Input, UserUncheckedCreateWithoutDmConversations1Input>
    connectOrCreate?: UserCreateOrConnectWithoutDmConversations1Input
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDmConversations2Input = {
    create?: XOR<UserCreateWithoutDmConversations2Input, UserUncheckedCreateWithoutDmConversations2Input>
    connectOrCreate?: UserCreateOrConnectWithoutDmConversations2Input
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutDmConversationInput = {
    create?: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput> | MessageCreateWithoutDmConversationInput[] | MessageUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDmConversationInput | MessageCreateOrConnectWithoutDmConversationInput[]
    createMany?: MessageCreateManyDmConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MutedConversationCreateNestedManyWithoutDmConversationInput = {
    create?: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput> | MutedConversationCreateWithoutDmConversationInput[] | MutedConversationUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutDmConversationInput | MutedConversationCreateOrConnectWithoutDmConversationInput[]
    createMany?: MutedConversationCreateManyDmConversationInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutDmConversationInput = {
    create?: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput> | MessageCreateWithoutDmConversationInput[] | MessageUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDmConversationInput | MessageCreateOrConnectWithoutDmConversationInput[]
    createMany?: MessageCreateManyDmConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MutedConversationUncheckedCreateNestedManyWithoutDmConversationInput = {
    create?: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput> | MutedConversationCreateWithoutDmConversationInput[] | MutedConversationUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutDmConversationInput | MutedConversationCreateOrConnectWithoutDmConversationInput[]
    createMany?: MutedConversationCreateManyDmConversationInputEnvelope
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDmConversations1NestedInput = {
    create?: XOR<UserCreateWithoutDmConversations1Input, UserUncheckedCreateWithoutDmConversations1Input>
    connectOrCreate?: UserCreateOrConnectWithoutDmConversations1Input
    upsert?: UserUpsertWithoutDmConversations1Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDmConversations1Input, UserUpdateWithoutDmConversations1Input>, UserUncheckedUpdateWithoutDmConversations1Input>
  }

  export type UserUpdateOneRequiredWithoutDmConversations2NestedInput = {
    create?: XOR<UserCreateWithoutDmConversations2Input, UserUncheckedCreateWithoutDmConversations2Input>
    connectOrCreate?: UserCreateOrConnectWithoutDmConversations2Input
    upsert?: UserUpsertWithoutDmConversations2Input
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDmConversations2Input, UserUpdateWithoutDmConversations2Input>, UserUncheckedUpdateWithoutDmConversations2Input>
  }

  export type MessageUpdateManyWithoutDmConversationNestedInput = {
    create?: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput> | MessageCreateWithoutDmConversationInput[] | MessageUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDmConversationInput | MessageCreateOrConnectWithoutDmConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDmConversationInput | MessageUpsertWithWhereUniqueWithoutDmConversationInput[]
    createMany?: MessageCreateManyDmConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDmConversationInput | MessageUpdateWithWhereUniqueWithoutDmConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDmConversationInput | MessageUpdateManyWithWhereWithoutDmConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MutedConversationUpdateManyWithoutDmConversationNestedInput = {
    create?: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput> | MutedConversationCreateWithoutDmConversationInput[] | MutedConversationUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutDmConversationInput | MutedConversationCreateOrConnectWithoutDmConversationInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutDmConversationInput | MutedConversationUpsertWithWhereUniqueWithoutDmConversationInput[]
    createMany?: MutedConversationCreateManyDmConversationInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutDmConversationInput | MutedConversationUpdateWithWhereUniqueWithoutDmConversationInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutDmConversationInput | MutedConversationUpdateManyWithWhereWithoutDmConversationInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutDmConversationNestedInput = {
    create?: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput> | MessageCreateWithoutDmConversationInput[] | MessageUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutDmConversationInput | MessageCreateOrConnectWithoutDmConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutDmConversationInput | MessageUpsertWithWhereUniqueWithoutDmConversationInput[]
    createMany?: MessageCreateManyDmConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutDmConversationInput | MessageUpdateWithWhereUniqueWithoutDmConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutDmConversationInput | MessageUpdateManyWithWhereWithoutDmConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MutedConversationUncheckedUpdateManyWithoutDmConversationNestedInput = {
    create?: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput> | MutedConversationCreateWithoutDmConversationInput[] | MutedConversationUncheckedCreateWithoutDmConversationInput[]
    connectOrCreate?: MutedConversationCreateOrConnectWithoutDmConversationInput | MutedConversationCreateOrConnectWithoutDmConversationInput[]
    upsert?: MutedConversationUpsertWithWhereUniqueWithoutDmConversationInput | MutedConversationUpsertWithWhereUniqueWithoutDmConversationInput[]
    createMany?: MutedConversationCreateManyDmConversationInputEnvelope
    set?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    disconnect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    delete?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    connect?: MutedConversationWhereUniqueInput | MutedConversationWhereUniqueInput[]
    update?: MutedConversationUpdateWithWhereUniqueWithoutDmConversationInput | MutedConversationUpdateWithWhereUniqueWithoutDmConversationInput[]
    updateMany?: MutedConversationUpdateManyWithWhereWithoutDmConversationInput | MutedConversationUpdateManyWithWhereWithoutDmConversationInput[]
    deleteMany?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBlockedUsersInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedByUsersInput = {
    create?: XOR<UserCreateWithoutBlockedByUsersInput, UserUncheckedCreateWithoutBlockedByUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockedUsersNestedInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    upsert?: UserUpsertWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedUsersInput, UserUpdateWithoutBlockedUsersInput>, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutBlockedByUsersNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByUsersInput, UserUncheckedCreateWithoutBlockedByUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByUsersInput
    upsert?: UserUpsertWithoutBlockedByUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedByUsersInput, UserUpdateWithoutBlockedByUsersInput>, UserUncheckedUpdateWithoutBlockedByUsersInput>
  }

  export type UserCreateNestedOneWithoutMutedItemsInput = {
    create?: XOR<UserCreateWithoutMutedItemsInput, UserUncheckedCreateWithoutMutedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMutedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutMutedByInput = {
    create?: XOR<RoomCreateWithoutMutedByInput, RoomUncheckedCreateWithoutMutedByInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMutedByInput
    connect?: RoomWhereUniqueInput
  }

  export type DMConversationCreateNestedOneWithoutMutedByInput = {
    create?: XOR<DMConversationCreateWithoutMutedByInput, DMConversationUncheckedCreateWithoutMutedByInput>
    connectOrCreate?: DMConversationCreateOrConnectWithoutMutedByInput
    connect?: DMConversationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMutedItemsNestedInput = {
    create?: XOR<UserCreateWithoutMutedItemsInput, UserUncheckedCreateWithoutMutedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMutedItemsInput
    upsert?: UserUpsertWithoutMutedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMutedItemsInput, UserUpdateWithoutMutedItemsInput>, UserUncheckedUpdateWithoutMutedItemsInput>
  }

  export type RoomUpdateOneWithoutMutedByNestedInput = {
    create?: XOR<RoomCreateWithoutMutedByInput, RoomUncheckedCreateWithoutMutedByInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMutedByInput
    upsert?: RoomUpsertWithoutMutedByInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMutedByInput, RoomUpdateWithoutMutedByInput>, RoomUncheckedUpdateWithoutMutedByInput>
  }

  export type DMConversationUpdateOneWithoutMutedByNestedInput = {
    create?: XOR<DMConversationCreateWithoutMutedByInput, DMConversationUncheckedCreateWithoutMutedByInput>
    connectOrCreate?: DMConversationCreateOrConnectWithoutMutedByInput
    upsert?: DMConversationUpsertWithoutMutedByInput
    disconnect?: DMConversationWhereInput | boolean
    delete?: DMConversationWhereInput | boolean
    connect?: DMConversationWhereUniqueInput
    update?: XOR<XOR<DMConversationUpdateToOneWithWhereWithoutMutedByInput, DMConversationUpdateWithoutMutedByInput>, DMConversationUncheckedUpdateWithoutMutedByInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type DMConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<DMConversationCreateWithoutMessagesInput, DMConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DMConversationCreateOrConnectWithoutMessagesInput
    connect?: DMConversationWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutRepliesInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    connect?: MessageWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageStatus_CreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput> | MessageStatus_CreateWithoutMessageInput[] | MessageStatus_UncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutMessageInput | MessageStatus_CreateOrConnectWithoutMessageInput[]
    createMany?: MessageStatus_CreateManyMessageInputEnvelope
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PinnedMessageCreateNestedManyWithoutMessageInput = {
    create?: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput> | PinnedMessageCreateWithoutMessageInput[] | PinnedMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutMessageInput | PinnedMessageCreateOrConnectWithoutMessageInput[]
    createMany?: PinnedMessageCreateManyMessageInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReplyToInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageStatus_UncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput> | MessageStatus_CreateWithoutMessageInput[] | MessageStatus_UncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutMessageInput | MessageStatus_CreateOrConnectWithoutMessageInput[]
    createMany?: MessageStatus_CreateManyMessageInputEnvelope
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PinnedMessageUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput> | PinnedMessageCreateWithoutMessageInput[] | PinnedMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutMessageInput | PinnedMessageCreateOrConnectWithoutMessageInput[]
    createMany?: PinnedMessageCreateManyMessageInputEnvelope
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type RoomUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type DMConversationUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<DMConversationCreateWithoutMessagesInput, DMConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: DMConversationCreateOrConnectWithoutMessagesInput
    upsert?: DMConversationUpsertWithoutMessagesInput
    disconnect?: DMConversationWhereInput | boolean
    delete?: DMConversationWhereInput | boolean
    connect?: DMConversationWhereUniqueInput
    update?: XOR<XOR<DMConversationUpdateToOneWithWhereWithoutMessagesInput, DMConversationUpdateWithoutMessagesInput>, DMConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutRepliesInput
    upsert?: MessageUpsertWithoutRepliesInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutRepliesInput, MessageUpdateWithoutRepliesInput>, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageStatus_UpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput> | MessageStatus_CreateWithoutMessageInput[] | MessageStatus_UncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutMessageInput | MessageStatus_CreateOrConnectWithoutMessageInput[]
    upsert?: MessageStatus_UpsertWithWhereUniqueWithoutMessageInput | MessageStatus_UpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageStatus_CreateManyMessageInputEnvelope
    set?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    disconnect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    delete?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    update?: MessageStatus_UpdateWithWhereUniqueWithoutMessageInput | MessageStatus_UpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageStatus_UpdateManyWithWhereWithoutMessageInput | MessageStatus_UpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PinnedMessageUpdateManyWithoutMessageNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput> | PinnedMessageCreateWithoutMessageInput[] | PinnedMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutMessageInput | PinnedMessageCreateOrConnectWithoutMessageInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutMessageInput | PinnedMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: PinnedMessageCreateManyMessageInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutMessageInput | PinnedMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutMessageInput | PinnedMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReplyToNestedInput = {
    create?: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput> | MessageCreateWithoutReplyToInput[] | MessageUncheckedCreateWithoutReplyToInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReplyToInput | MessageCreateOrConnectWithoutReplyToInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReplyToInput | MessageUpsertWithWhereUniqueWithoutReplyToInput[]
    createMany?: MessageCreateManyReplyToInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReplyToInput | MessageUpdateWithWhereUniqueWithoutReplyToInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReplyToInput | MessageUpdateManyWithWhereWithoutReplyToInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput> | MessageStatus_CreateWithoutMessageInput[] | MessageStatus_UncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageStatus_CreateOrConnectWithoutMessageInput | MessageStatus_CreateOrConnectWithoutMessageInput[]
    upsert?: MessageStatus_UpsertWithWhereUniqueWithoutMessageInput | MessageStatus_UpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageStatus_CreateManyMessageInputEnvelope
    set?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    disconnect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    delete?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    connect?: MessageStatus_WhereUniqueInput | MessageStatus_WhereUniqueInput[]
    update?: MessageStatus_UpdateWithWhereUniqueWithoutMessageInput | MessageStatus_UpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageStatus_UpdateManyWithWhereWithoutMessageInput | MessageStatus_UpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput> | PinnedMessageCreateWithoutMessageInput[] | PinnedMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: PinnedMessageCreateOrConnectWithoutMessageInput | PinnedMessageCreateOrConnectWithoutMessageInput[]
    upsert?: PinnedMessageUpsertWithWhereUniqueWithoutMessageInput | PinnedMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: PinnedMessageCreateManyMessageInputEnvelope
    set?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    disconnect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    delete?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    connect?: PinnedMessageWhereUniqueInput | PinnedMessageWhereUniqueInput[]
    update?: PinnedMessageUpdateWithWhereUniqueWithoutMessageInput | PinnedMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: PinnedMessageUpdateManyWithWhereWithoutMessageInput | PinnedMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutStatusesInput = {
    create?: XOR<MessageCreateWithoutStatusesInput, MessageUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutStatusesInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessageStatusesInput = {
    create?: XOR<UserCreateWithoutMessageStatusesInput, UserUncheckedCreateWithoutMessageStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type MessageUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<MessageCreateWithoutStatusesInput, MessageUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutStatusesInput
    upsert?: MessageUpsertWithoutStatusesInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutStatusesInput, MessageUpdateWithoutStatusesInput>, MessageUncheckedUpdateWithoutStatusesInput>
  }

  export type UserUpdateOneRequiredWithoutMessageStatusesNestedInput = {
    create?: XOR<UserCreateWithoutMessageStatusesInput, UserUncheckedCreateWithoutMessageStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageStatusesInput
    upsert?: UserUpsertWithoutMessageStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageStatusesInput, UserUpdateWithoutMessageStatusesInput>, UserUncheckedUpdateWithoutMessageStatusesInput>
  }

  export type MessageCreateNestedOneWithoutReactionsInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    upsert?: MessageUpsertWithoutReactionsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReactionsInput, MessageUpdateWithoutReactionsInput>, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type RoomCreateNestedOneWithoutPinsInput = {
    create?: XOR<RoomCreateWithoutPinsInput, RoomUncheckedCreateWithoutPinsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPinsInput
    connect?: RoomWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutPinsInput = {
    create?: XOR<MessageCreateWithoutPinsInput, MessageUncheckedCreateWithoutPinsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPinsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPinnedMessagesInput = {
    create?: XOR<UserCreateWithoutPinnedMessagesInput, UserUncheckedCreateWithoutPinnedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutPinsNestedInput = {
    create?: XOR<RoomCreateWithoutPinsInput, RoomUncheckedCreateWithoutPinsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPinsInput
    upsert?: RoomUpsertWithoutPinsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPinsInput, RoomUpdateWithoutPinsInput>, RoomUncheckedUpdateWithoutPinsInput>
  }

  export type MessageUpdateOneRequiredWithoutPinsNestedInput = {
    create?: XOR<MessageCreateWithoutPinsInput, MessageUncheckedCreateWithoutPinsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPinsInput
    upsert?: MessageUpsertWithoutPinsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutPinsInput, MessageUpdateWithoutPinsInput>, MessageUncheckedUpdateWithoutPinsInput>
  }

  export type UserUpdateOneRequiredWithoutPinnedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutPinnedMessagesInput, UserUncheckedCreateWithoutPinnedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPinnedMessagesInput
    upsert?: UserUpsertWithoutPinnedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPinnedMessagesInput, UserUpdateWithoutPinnedMessagesInput>, UserUncheckedUpdateWithoutPinnedMessagesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDevicePlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | EnumDevicePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumDevicePlatformFilter<$PrismaModel> | $Enums.DevicePlatform
  }

  export type NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DevicePlatform | EnumDevicePlatformFieldRefInput<$PrismaModel>
    in?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.DevicePlatform[] | ListEnumDevicePlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumDevicePlatformWithAggregatesFilter<$PrismaModel> | $Enums.DevicePlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDevicePlatformFilter<$PrismaModel>
    _max?: NestedEnumDevicePlatformFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type DeviceSessionCreateWithoutUserInput = {
    id?: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionUncheckedCreateWithoutUserInput = {
    id?: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceSessionCreateOrConnectWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    create: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionCreateManyUserInputEnvelope = {
    data: DeviceSessionCreateManyUserInput | DeviceSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomModeratorCreateWithoutUserInput = {
    id?: string
    assignedBy: string
    assignedAt?: Date | string
    room: RoomCreateNestedOneWithoutModeratorsInput
  }

  export type RoomModeratorUncheckedCreateWithoutUserInput = {
    id?: string
    roomId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type RoomModeratorCreateOrConnectWithoutUserInput = {
    where: RoomModeratorWhereUniqueInput
    create: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput>
  }

  export type RoomModeratorCreateManyUserInputEnvelope = {
    data: RoomModeratorCreateManyUserInput | RoomModeratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DMConversationCreateWithoutParticipant1Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant2: UserCreateNestedOneWithoutDmConversations2Input
    messages?: MessageCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUncheckedCreateWithoutParticipant1Input = {
    id?: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationCreateOrConnectWithoutParticipant1Input = {
    where: DMConversationWhereUniqueInput
    create: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input>
  }

  export type DMConversationCreateManyParticipant1InputEnvelope = {
    data: DMConversationCreateManyParticipant1Input | DMConversationCreateManyParticipant1Input[]
    skipDuplicates?: boolean
  }

  export type DMConversationCreateWithoutParticipant2Input = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant1: UserCreateNestedOneWithoutDmConversations1Input
    messages?: MessageCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUncheckedCreateWithoutParticipant2Input = {
    id?: string
    participant1Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutDmConversationInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationCreateOrConnectWithoutParticipant2Input = {
    where: DMConversationWhereUniqueInput
    create: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input>
  }

  export type DMConversationCreateManyParticipant2InputEnvelope = {
    data: DMConversationCreateManyParticipant2Input | DMConversationCreateManyParticipant2Input[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageStatus_CreateWithoutRecipientInput = {
    id?: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutStatusesInput
  }

  export type MessageStatus_UncheckedCreateWithoutRecipientInput = {
    id?: string
    messageId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type MessageStatus_CreateOrConnectWithoutRecipientInput = {
    where: MessageStatus_WhereUniqueInput
    create: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput>
  }

  export type MessageStatus_CreateManyRecipientInputEnvelope = {
    data: MessageStatus_CreateManyRecipientInput | MessageStatus_CreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockedUserCreateWithoutBlockerInput = {
    id?: string
    createdAt?: Date | string
    blocked: UserCreateNestedOneWithoutBlockedByUsersInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateOrConnectWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserCreateManyBlockerInputEnvelope = {
    data: BlockedUserCreateManyBlockerInput | BlockedUserCreateManyBlockerInput[]
    skipDuplicates?: boolean
  }

  export type BlockedUserCreateWithoutBlockedInput = {
    id?: string
    createdAt?: Date | string
    blocker: UserCreateNestedOneWithoutBlockedUsersInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateOrConnectWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserCreateManyBlockedInputEnvelope = {
    data: BlockedUserCreateManyBlockedInput | BlockedUserCreateManyBlockedInput[]
    skipDuplicates?: boolean
  }

  export type MutedConversationCreateWithoutUserInput = {
    id?: string
    mutedUntil?: Date | string | null
    createdAt?: Date | string
    room?: RoomCreateNestedOneWithoutMutedByInput
    dmConversation?: DMConversationCreateNestedOneWithoutMutedByInput
  }

  export type MutedConversationUncheckedCreateWithoutUserInput = {
    id?: string
    roomId?: string | null
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MutedConversationCreateOrConnectWithoutUserInput = {
    where: MutedConversationWhereUniqueInput
    create: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput>
  }

  export type MutedConversationCreateManyUserInputEnvelope = {
    data: MutedConversationCreateManyUserInput | MutedConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PinnedMessageCreateWithoutPinnerInput = {
    id?: string
    pinnedAt?: Date | string
    room: RoomCreateNestedOneWithoutPinsInput
    message: MessageCreateNestedOneWithoutPinsInput
  }

  export type PinnedMessageUncheckedCreateWithoutPinnerInput = {
    id?: string
    roomId: string
    messageId: string
    pinnedAt?: Date | string
  }

  export type PinnedMessageCreateOrConnectWithoutPinnerInput = {
    where: PinnedMessageWhereUniqueInput
    create: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput>
  }

  export type PinnedMessageCreateManyPinnerInputEnvelope = {
    data: PinnedMessageCreateManyPinnerInput | PinnedMessageCreateManyPinnerInput[]
    skipDuplicates?: boolean
  }

  export type DeviceSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    update: XOR<DeviceSessionUpdateWithoutUserInput, DeviceSessionUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceSessionCreateWithoutUserInput, DeviceSessionUncheckedCreateWithoutUserInput>
  }

  export type DeviceSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceSessionWhereUniqueInput
    data: XOR<DeviceSessionUpdateWithoutUserInput, DeviceSessionUncheckedUpdateWithoutUserInput>
  }

  export type DeviceSessionUpdateManyWithWhereWithoutUserInput = {
    where: DeviceSessionScalarWhereInput
    data: XOR<DeviceSessionUpdateManyMutationInput, DeviceSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceSessionScalarWhereInput = {
    AND?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    OR?: DeviceSessionScalarWhereInput[]
    NOT?: DeviceSessionScalarWhereInput | DeviceSessionScalarWhereInput[]
    id?: UuidFilter<"DeviceSession"> | string
    userId?: UuidFilter<"DeviceSession"> | string
    deviceId?: StringFilter<"DeviceSession"> | string
    platform?: EnumDevicePlatformFilter<"DeviceSession"> | $Enums.DevicePlatform
    pushToken?: StringNullableFilter<"DeviceSession"> | string | null
    refreshTokenHash?: StringFilter<"DeviceSession"> | string
    deviceName?: StringNullableFilter<"DeviceSession"> | string | null
    deviceModel?: StringNullableFilter<"DeviceSession"> | string | null
    ipAddress?: StringNullableFilter<"DeviceSession"> | string | null
    lastSeenAt?: DateTimeFilter<"DeviceSession"> | Date | string
    createdAt?: DateTimeFilter<"DeviceSession"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceSession"> | Date | string
  }

  export type RoomModeratorUpsertWithWhereUniqueWithoutUserInput = {
    where: RoomModeratorWhereUniqueInput
    update: XOR<RoomModeratorUpdateWithoutUserInput, RoomModeratorUncheckedUpdateWithoutUserInput>
    create: XOR<RoomModeratorCreateWithoutUserInput, RoomModeratorUncheckedCreateWithoutUserInput>
  }

  export type RoomModeratorUpdateWithWhereUniqueWithoutUserInput = {
    where: RoomModeratorWhereUniqueInput
    data: XOR<RoomModeratorUpdateWithoutUserInput, RoomModeratorUncheckedUpdateWithoutUserInput>
  }

  export type RoomModeratorUpdateManyWithWhereWithoutUserInput = {
    where: RoomModeratorScalarWhereInput
    data: XOR<RoomModeratorUpdateManyMutationInput, RoomModeratorUncheckedUpdateManyWithoutUserInput>
  }

  export type RoomModeratorScalarWhereInput = {
    AND?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
    OR?: RoomModeratorScalarWhereInput[]
    NOT?: RoomModeratorScalarWhereInput | RoomModeratorScalarWhereInput[]
    id?: UuidFilter<"RoomModerator"> | string
    roomId?: UuidFilter<"RoomModerator"> | string
    userId?: UuidFilter<"RoomModerator"> | string
    assignedBy?: UuidFilter<"RoomModerator"> | string
    assignedAt?: DateTimeFilter<"RoomModerator"> | Date | string
  }

  export type DMConversationUpsertWithWhereUniqueWithoutParticipant1Input = {
    where: DMConversationWhereUniqueInput
    update: XOR<DMConversationUpdateWithoutParticipant1Input, DMConversationUncheckedUpdateWithoutParticipant1Input>
    create: XOR<DMConversationCreateWithoutParticipant1Input, DMConversationUncheckedCreateWithoutParticipant1Input>
  }

  export type DMConversationUpdateWithWhereUniqueWithoutParticipant1Input = {
    where: DMConversationWhereUniqueInput
    data: XOR<DMConversationUpdateWithoutParticipant1Input, DMConversationUncheckedUpdateWithoutParticipant1Input>
  }

  export type DMConversationUpdateManyWithWhereWithoutParticipant1Input = {
    where: DMConversationScalarWhereInput
    data: XOR<DMConversationUpdateManyMutationInput, DMConversationUncheckedUpdateManyWithoutParticipant1Input>
  }

  export type DMConversationScalarWhereInput = {
    AND?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
    OR?: DMConversationScalarWhereInput[]
    NOT?: DMConversationScalarWhereInput | DMConversationScalarWhereInput[]
    id?: UuidFilter<"DMConversation"> | string
    participant1Id?: UuidFilter<"DMConversation"> | string
    participant2Id?: UuidFilter<"DMConversation"> | string
    createdAt?: DateTimeFilter<"DMConversation"> | Date | string
    updatedAt?: DateTimeFilter<"DMConversation"> | Date | string
  }

  export type DMConversationUpsertWithWhereUniqueWithoutParticipant2Input = {
    where: DMConversationWhereUniqueInput
    update: XOR<DMConversationUpdateWithoutParticipant2Input, DMConversationUncheckedUpdateWithoutParticipant2Input>
    create: XOR<DMConversationCreateWithoutParticipant2Input, DMConversationUncheckedCreateWithoutParticipant2Input>
  }

  export type DMConversationUpdateWithWhereUniqueWithoutParticipant2Input = {
    where: DMConversationWhereUniqueInput
    data: XOR<DMConversationUpdateWithoutParticipant2Input, DMConversationUncheckedUpdateWithoutParticipant2Input>
  }

  export type DMConversationUpdateManyWithWhereWithoutParticipant2Input = {
    where: DMConversationScalarWhereInput
    data: XOR<DMConversationUpdateManyMutationInput, DMConversationUncheckedUpdateManyWithoutParticipant2Input>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    content?: StringNullableFilter<"Message"> | string | null
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    mediaMetadata?: JsonNullableFilter<"Message">
    senderId?: UuidFilter<"Message"> | string
    roomId?: UuidNullableFilter<"Message"> | string | null
    dmConversationId?: UuidNullableFilter<"Message"> | string | null
    replyToId?: UuidNullableFilter<"Message"> | string | null
    isEdited?: BoolFilter<"Message"> | boolean
    editedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    clientTempId?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageStatus_UpsertWithWhereUniqueWithoutRecipientInput = {
    where: MessageStatus_WhereUniqueInput
    update: XOR<MessageStatus_UpdateWithoutRecipientInput, MessageStatus_UncheckedUpdateWithoutRecipientInput>
    create: XOR<MessageStatus_CreateWithoutRecipientInput, MessageStatus_UncheckedCreateWithoutRecipientInput>
  }

  export type MessageStatus_UpdateWithWhereUniqueWithoutRecipientInput = {
    where: MessageStatus_WhereUniqueInput
    data: XOR<MessageStatus_UpdateWithoutRecipientInput, MessageStatus_UncheckedUpdateWithoutRecipientInput>
  }

  export type MessageStatus_UpdateManyWithWhereWithoutRecipientInput = {
    where: MessageStatus_ScalarWhereInput
    data: XOR<MessageStatus_UpdateManyMutationInput, MessageStatus_UncheckedUpdateManyWithoutRecipientInput>
  }

  export type MessageStatus_ScalarWhereInput = {
    AND?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
    OR?: MessageStatus_ScalarWhereInput[]
    NOT?: MessageStatus_ScalarWhereInput | MessageStatus_ScalarWhereInput[]
    id?: UuidFilter<"MessageStatus_"> | string
    messageId?: UuidFilter<"MessageStatus_"> | string
    recipientId?: UuidFilter<"MessageStatus_"> | string
    status?: EnumMessageStatusFilter<"MessageStatus_"> | $Enums.MessageStatus
    updatedAt?: DateTimeFilter<"MessageStatus_"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: UuidFilter<"Reaction"> | string
    messageId?: UuidFilter<"Reaction"> | string
    userId?: UuidFilter<"Reaction"> | string
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockerInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockerInput>
  }

  export type BlockedUserScalarWhereInput = {
    AND?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    OR?: BlockedUserScalarWhereInput[]
    NOT?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    id?: UuidFilter<"BlockedUser"> | string
    blockerId?: UuidFilter<"BlockedUser"> | string
    blockedId?: UuidFilter<"BlockedUser"> | string
    createdAt?: DateTimeFilter<"BlockedUser"> | Date | string
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockedInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockedInput>
  }

  export type MutedConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: MutedConversationWhereUniqueInput
    update: XOR<MutedConversationUpdateWithoutUserInput, MutedConversationUncheckedUpdateWithoutUserInput>
    create: XOR<MutedConversationCreateWithoutUserInput, MutedConversationUncheckedCreateWithoutUserInput>
  }

  export type MutedConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: MutedConversationWhereUniqueInput
    data: XOR<MutedConversationUpdateWithoutUserInput, MutedConversationUncheckedUpdateWithoutUserInput>
  }

  export type MutedConversationUpdateManyWithWhereWithoutUserInput = {
    where: MutedConversationScalarWhereInput
    data: XOR<MutedConversationUpdateManyMutationInput, MutedConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type MutedConversationScalarWhereInput = {
    AND?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
    OR?: MutedConversationScalarWhereInput[]
    NOT?: MutedConversationScalarWhereInput | MutedConversationScalarWhereInput[]
    id?: UuidFilter<"MutedConversation"> | string
    userId?: UuidFilter<"MutedConversation"> | string
    roomId?: UuidNullableFilter<"MutedConversation"> | string | null
    dmConversationId?: UuidNullableFilter<"MutedConversation"> | string | null
    mutedUntil?: DateTimeNullableFilter<"MutedConversation"> | Date | string | null
    createdAt?: DateTimeFilter<"MutedConversation"> | Date | string
  }

  export type PinnedMessageUpsertWithWhereUniqueWithoutPinnerInput = {
    where: PinnedMessageWhereUniqueInput
    update: XOR<PinnedMessageUpdateWithoutPinnerInput, PinnedMessageUncheckedUpdateWithoutPinnerInput>
    create: XOR<PinnedMessageCreateWithoutPinnerInput, PinnedMessageUncheckedCreateWithoutPinnerInput>
  }

  export type PinnedMessageUpdateWithWhereUniqueWithoutPinnerInput = {
    where: PinnedMessageWhereUniqueInput
    data: XOR<PinnedMessageUpdateWithoutPinnerInput, PinnedMessageUncheckedUpdateWithoutPinnerInput>
  }

  export type PinnedMessageUpdateManyWithWhereWithoutPinnerInput = {
    where: PinnedMessageScalarWhereInput
    data: XOR<PinnedMessageUpdateManyMutationInput, PinnedMessageUncheckedUpdateManyWithoutPinnerInput>
  }

  export type PinnedMessageScalarWhereInput = {
    AND?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
    OR?: PinnedMessageScalarWhereInput[]
    NOT?: PinnedMessageScalarWhereInput | PinnedMessageScalarWhereInput[]
    id?: UuidFilter<"PinnedMessage"> | string
    roomId?: UuidFilter<"PinnedMessage"> | string
    messageId?: UuidFilter<"PinnedMessage"> | string
    pinnedBy?: UuidFilter<"PinnedMessage"> | string
    pinnedAt?: DateTimeFilter<"PinnedMessage"> | Date | string
  }

  export type UserCreateWithoutDeviceSessionsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutDeviceSessionsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutDeviceSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeviceSessionsInput, UserUncheckedCreateWithoutDeviceSessionsInput>
  }

  export type UserUpsertWithoutDeviceSessionsInput = {
    update: XOR<UserUpdateWithoutDeviceSessionsInput, UserUncheckedUpdateWithoutDeviceSessionsInput>
    create: XOR<UserCreateWithoutDeviceSessionsInput, UserUncheckedCreateWithoutDeviceSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeviceSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeviceSessionsInput, UserUncheckedUpdateWithoutDeviceSessionsInput>
  }

  export type UserUpdateWithoutDeviceSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutDeviceSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type RoomModeratorCreateWithoutRoomInput = {
    id?: string
    assignedBy: string
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutRoomModerationsInput
  }

  export type RoomModeratorUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type RoomModeratorCreateOrConnectWithoutRoomInput = {
    where: RoomModeratorWhereUniqueInput
    create: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput>
  }

  export type RoomModeratorCreateManyRoomInputEnvelope = {
    data: RoomModeratorCreateManyRoomInput | RoomModeratorCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRoomInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRoomInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageCreateManyRoomInputEnvelope = {
    data: MessageCreateManyRoomInput | MessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PinnedMessageCreateWithoutRoomInput = {
    id?: string
    pinnedAt?: Date | string
    message: MessageCreateNestedOneWithoutPinsInput
    pinner: UserCreateNestedOneWithoutPinnedMessagesInput
  }

  export type PinnedMessageUncheckedCreateWithoutRoomInput = {
    id?: string
    messageId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type PinnedMessageCreateOrConnectWithoutRoomInput = {
    where: PinnedMessageWhereUniqueInput
    create: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput>
  }

  export type PinnedMessageCreateManyRoomInputEnvelope = {
    data: PinnedMessageCreateManyRoomInput | PinnedMessageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MutedConversationCreateWithoutRoomInput = {
    id?: string
    mutedUntil?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMutedItemsInput
    dmConversation?: DMConversationCreateNestedOneWithoutMutedByInput
  }

  export type MutedConversationUncheckedCreateWithoutRoomInput = {
    id?: string
    userId: string
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MutedConversationCreateOrConnectWithoutRoomInput = {
    where: MutedConversationWhereUniqueInput
    create: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput>
  }

  export type MutedConversationCreateManyRoomInputEnvelope = {
    data: MutedConversationCreateManyRoomInput | MutedConversationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomModeratorUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomModeratorWhereUniqueInput
    update: XOR<RoomModeratorUpdateWithoutRoomInput, RoomModeratorUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomModeratorCreateWithoutRoomInput, RoomModeratorUncheckedCreateWithoutRoomInput>
  }

  export type RoomModeratorUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomModeratorWhereUniqueInput
    data: XOR<RoomModeratorUpdateWithoutRoomInput, RoomModeratorUncheckedUpdateWithoutRoomInput>
  }

  export type RoomModeratorUpdateManyWithWhereWithoutRoomInput = {
    where: RoomModeratorScalarWhereInput
    data: XOR<RoomModeratorUpdateManyMutationInput, RoomModeratorUncheckedUpdateManyWithoutRoomInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
    create: XOR<MessageCreateWithoutRoomInput, MessageUncheckedCreateWithoutRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRoomInput, MessageUncheckedUpdateWithoutRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type PinnedMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: PinnedMessageWhereUniqueInput
    update: XOR<PinnedMessageUpdateWithoutRoomInput, PinnedMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<PinnedMessageCreateWithoutRoomInput, PinnedMessageUncheckedCreateWithoutRoomInput>
  }

  export type PinnedMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: PinnedMessageWhereUniqueInput
    data: XOR<PinnedMessageUpdateWithoutRoomInput, PinnedMessageUncheckedUpdateWithoutRoomInput>
  }

  export type PinnedMessageUpdateManyWithWhereWithoutRoomInput = {
    where: PinnedMessageScalarWhereInput
    data: XOR<PinnedMessageUpdateManyMutationInput, PinnedMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type MutedConversationUpsertWithWhereUniqueWithoutRoomInput = {
    where: MutedConversationWhereUniqueInput
    update: XOR<MutedConversationUpdateWithoutRoomInput, MutedConversationUncheckedUpdateWithoutRoomInput>
    create: XOR<MutedConversationCreateWithoutRoomInput, MutedConversationUncheckedCreateWithoutRoomInput>
  }

  export type MutedConversationUpdateWithWhereUniqueWithoutRoomInput = {
    where: MutedConversationWhereUniqueInput
    data: XOR<MutedConversationUpdateWithoutRoomInput, MutedConversationUncheckedUpdateWithoutRoomInput>
  }

  export type MutedConversationUpdateManyWithWhereWithoutRoomInput = {
    where: MutedConversationScalarWhereInput
    data: XOR<MutedConversationUpdateManyMutationInput, MutedConversationUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutModeratorsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutModeratorsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutModeratorsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutModeratorsInput, RoomUncheckedCreateWithoutModeratorsInput>
  }

  export type UserCreateWithoutRoomModerationsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutRoomModerationsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutRoomModerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomModerationsInput, UserUncheckedCreateWithoutRoomModerationsInput>
  }

  export type RoomUpsertWithoutModeratorsInput = {
    update: XOR<RoomUpdateWithoutModeratorsInput, RoomUncheckedUpdateWithoutModeratorsInput>
    create: XOR<RoomCreateWithoutModeratorsInput, RoomUncheckedCreateWithoutModeratorsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutModeratorsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutModeratorsInput, RoomUncheckedUpdateWithoutModeratorsInput>
  }

  export type RoomUpdateWithoutModeratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutModeratorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutRoomModerationsInput = {
    update: XOR<UserUpdateWithoutRoomModerationsInput, UserUncheckedUpdateWithoutRoomModerationsInput>
    create: XOR<UserCreateWithoutRoomModerationsInput, UserUncheckedCreateWithoutRoomModerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomModerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomModerationsInput, UserUncheckedUpdateWithoutRoomModerationsInput>
  }

  export type UserUpdateWithoutRoomModerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomModerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type UserCreateWithoutDmConversations1Input = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutDmConversations1Input = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutDmConversations1Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDmConversations1Input, UserUncheckedCreateWithoutDmConversations1Input>
  }

  export type UserCreateWithoutDmConversations2Input = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutDmConversations2Input = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutDmConversations2Input = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDmConversations2Input, UserUncheckedCreateWithoutDmConversations2Input>
  }

  export type MessageCreateWithoutDmConversationInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutDmConversationInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutDmConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput>
  }

  export type MessageCreateManyDmConversationInputEnvelope = {
    data: MessageCreateManyDmConversationInput | MessageCreateManyDmConversationInput[]
    skipDuplicates?: boolean
  }

  export type MutedConversationCreateWithoutDmConversationInput = {
    id?: string
    mutedUntil?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMutedItemsInput
    room?: RoomCreateNestedOneWithoutMutedByInput
  }

  export type MutedConversationUncheckedCreateWithoutDmConversationInput = {
    id?: string
    userId: string
    roomId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MutedConversationCreateOrConnectWithoutDmConversationInput = {
    where: MutedConversationWhereUniqueInput
    create: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput>
  }

  export type MutedConversationCreateManyDmConversationInputEnvelope = {
    data: MutedConversationCreateManyDmConversationInput | MutedConversationCreateManyDmConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDmConversations1Input = {
    update: XOR<UserUpdateWithoutDmConversations1Input, UserUncheckedUpdateWithoutDmConversations1Input>
    create: XOR<UserCreateWithoutDmConversations1Input, UserUncheckedCreateWithoutDmConversations1Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDmConversations1Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDmConversations1Input, UserUncheckedUpdateWithoutDmConversations1Input>
  }

  export type UserUpdateWithoutDmConversations1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutDmConversations1Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type UserUpsertWithoutDmConversations2Input = {
    update: XOR<UserUpdateWithoutDmConversations2Input, UserUncheckedUpdateWithoutDmConversations2Input>
    create: XOR<UserCreateWithoutDmConversations2Input, UserUncheckedCreateWithoutDmConversations2Input>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDmConversations2Input = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDmConversations2Input, UserUncheckedUpdateWithoutDmConversations2Input>
  }

  export type UserUpdateWithoutDmConversations2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutDmConversations2Input = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutDmConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutDmConversationInput, MessageUncheckedUpdateWithoutDmConversationInput>
    create: XOR<MessageCreateWithoutDmConversationInput, MessageUncheckedCreateWithoutDmConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutDmConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutDmConversationInput, MessageUncheckedUpdateWithoutDmConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutDmConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutDmConversationInput>
  }

  export type MutedConversationUpsertWithWhereUniqueWithoutDmConversationInput = {
    where: MutedConversationWhereUniqueInput
    update: XOR<MutedConversationUpdateWithoutDmConversationInput, MutedConversationUncheckedUpdateWithoutDmConversationInput>
    create: XOR<MutedConversationCreateWithoutDmConversationInput, MutedConversationUncheckedCreateWithoutDmConversationInput>
  }

  export type MutedConversationUpdateWithWhereUniqueWithoutDmConversationInput = {
    where: MutedConversationWhereUniqueInput
    data: XOR<MutedConversationUpdateWithoutDmConversationInput, MutedConversationUncheckedUpdateWithoutDmConversationInput>
  }

  export type MutedConversationUpdateManyWithWhereWithoutDmConversationInput = {
    where: MutedConversationScalarWhereInput
    data: XOR<MutedConversationUpdateManyMutationInput, MutedConversationUncheckedUpdateManyWithoutDmConversationInput>
  }

  export type UserCreateWithoutBlockedUsersInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutBlockedUsersInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutBlockedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
  }

  export type UserCreateWithoutBlockedByUsersInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutBlockedByUsersInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutBlockedByUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedByUsersInput, UserUncheckedCreateWithoutBlockedByUsersInput>
  }

  export type UserUpsertWithoutBlockedUsersInput = {
    update: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type UserUpsertWithoutBlockedByUsersInput = {
    update: XOR<UserUpdateWithoutBlockedByUsersInput, UserUncheckedUpdateWithoutBlockedByUsersInput>
    create: XOR<UserCreateWithoutBlockedByUsersInput, UserUncheckedCreateWithoutBlockedByUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedByUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedByUsersInput, UserUncheckedUpdateWithoutBlockedByUsersInput>
  }

  export type UserUpdateWithoutBlockedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type UserCreateWithoutMutedItemsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutMutedItemsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutMutedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMutedItemsInput, UserUncheckedCreateWithoutMutedItemsInput>
  }

  export type RoomCreateWithoutMutedByInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMutedByInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMutedByInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMutedByInput, RoomUncheckedCreateWithoutMutedByInput>
  }

  export type DMConversationCreateWithoutMutedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant1: UserCreateNestedOneWithoutDmConversations1Input
    participant2: UserCreateNestedOneWithoutDmConversations2Input
    messages?: MessageCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUncheckedCreateWithoutMutedByInput = {
    id?: string
    participant1Id: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationCreateOrConnectWithoutMutedByInput = {
    where: DMConversationWhereUniqueInput
    create: XOR<DMConversationCreateWithoutMutedByInput, DMConversationUncheckedCreateWithoutMutedByInput>
  }

  export type UserUpsertWithoutMutedItemsInput = {
    update: XOR<UserUpdateWithoutMutedItemsInput, UserUncheckedUpdateWithoutMutedItemsInput>
    create: XOR<UserCreateWithoutMutedItemsInput, UserUncheckedCreateWithoutMutedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMutedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMutedItemsInput, UserUncheckedUpdateWithoutMutedItemsInput>
  }

  export type UserUpdateWithoutMutedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMutedItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type RoomUpsertWithoutMutedByInput = {
    update: XOR<RoomUpdateWithoutMutedByInput, RoomUncheckedUpdateWithoutMutedByInput>
    create: XOR<RoomCreateWithoutMutedByInput, RoomUncheckedCreateWithoutMutedByInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMutedByInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMutedByInput, RoomUncheckedUpdateWithoutMutedByInput>
  }

  export type RoomUpdateWithoutMutedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMutedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type DMConversationUpsertWithoutMutedByInput = {
    update: XOR<DMConversationUpdateWithoutMutedByInput, DMConversationUncheckedUpdateWithoutMutedByInput>
    create: XOR<DMConversationCreateWithoutMutedByInput, DMConversationUncheckedCreateWithoutMutedByInput>
    where?: DMConversationWhereInput
  }

  export type DMConversationUpdateToOneWithWhereWithoutMutedByInput = {
    where?: DMConversationWhereInput
    data: XOR<DMConversationUpdateWithoutMutedByInput, DMConversationUncheckedUpdateWithoutMutedByInput>
  }

  export type DMConversationUpdateWithoutMutedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant1?: UserUpdateOneRequiredWithoutDmConversations1NestedInput
    participant2?: UserUpdateOneRequiredWithoutDmConversations2NestedInput
    messages?: MessageUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateWithoutMutedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutDmConversationNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type RoomCreateWithoutMessagesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorUncheckedCreateNestedManyWithoutRoomInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type DMConversationCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    participant1: UserCreateNestedOneWithoutDmConversations1Input
    participant2: UserCreateNestedOneWithoutDmConversations2Input
    mutedBy?: MutedConversationCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    participant1Id: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutDmConversationInput
  }

  export type DMConversationCreateOrConnectWithoutMessagesInput = {
    where: DMConversationWhereUniqueInput
    create: XOR<DMConversationCreateWithoutMessagesInput, DMConversationUncheckedCreateWithoutMessagesInput>
  }

  export type MessageCreateWithoutRepliesInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutRepliesInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutRepliesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
  }

  export type MessageCreateWithoutReplyToInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReplyToInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageCreateManyReplyToInputEnvelope = {
    data: MessageCreateManyReplyToInput | MessageCreateManyReplyToInput[]
    skipDuplicates?: boolean
  }

  export type MessageStatus_CreateWithoutMessageInput = {
    id?: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
    recipient: UserCreateNestedOneWithoutMessageStatusesInput
  }

  export type MessageStatus_UncheckedCreateWithoutMessageInput = {
    id?: string
    recipientId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type MessageStatus_CreateOrConnectWithoutMessageInput = {
    where: MessageStatus_WhereUniqueInput
    create: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput>
  }

  export type MessageStatus_CreateManyMessageInputEnvelope = {
    data: MessageStatus_CreateManyMessageInput | MessageStatus_CreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutMessageInput = {
    id?: string
    emoji: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type ReactionCreateOrConnectWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionCreateManyMessageInputEnvelope = {
    data: ReactionCreateManyMessageInput | ReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type PinnedMessageCreateWithoutMessageInput = {
    id?: string
    pinnedAt?: Date | string
    room: RoomCreateNestedOneWithoutPinsInput
    pinner: UserCreateNestedOneWithoutPinnedMessagesInput
  }

  export type PinnedMessageUncheckedCreateWithoutMessageInput = {
    id?: string
    roomId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type PinnedMessageCreateOrConnectWithoutMessageInput = {
    where: PinnedMessageWhereUniqueInput
    create: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput>
  }

  export type PinnedMessageCreateManyMessageInputEnvelope = {
    data: PinnedMessageCreateManyMessageInput | PinnedMessageCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUncheckedUpdateManyWithoutRoomNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type DMConversationUpsertWithoutMessagesInput = {
    update: XOR<DMConversationUpdateWithoutMessagesInput, DMConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<DMConversationCreateWithoutMessagesInput, DMConversationUncheckedCreateWithoutMessagesInput>
    where?: DMConversationWhereInput
  }

  export type DMConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: DMConversationWhereInput
    data: XOR<DMConversationUpdateWithoutMessagesInput, DMConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type DMConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant1?: UserUpdateOneRequiredWithoutDmConversations1NestedInput
    participant2?: UserUpdateOneRequiredWithoutDmConversations2NestedInput
    mutedBy?: MutedConversationUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutDmConversationNestedInput
  }

  export type MessageUpsertWithoutRepliesInput = {
    update: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
    create: XOR<MessageCreateWithoutRepliesInput, MessageUncheckedCreateWithoutRepliesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutRepliesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutRepliesInput, MessageUncheckedUpdateWithoutRepliesInput>
  }

  export type MessageUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
    create: XOR<MessageCreateWithoutReplyToInput, MessageUncheckedCreateWithoutReplyToInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReplyToInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReplyToInput, MessageUncheckedUpdateWithoutReplyToInput>
  }

  export type MessageUpdateManyWithWhereWithoutReplyToInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReplyToInput>
  }

  export type MessageStatus_UpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageStatus_WhereUniqueInput
    update: XOR<MessageStatus_UpdateWithoutMessageInput, MessageStatus_UncheckedUpdateWithoutMessageInput>
    create: XOR<MessageStatus_CreateWithoutMessageInput, MessageStatus_UncheckedCreateWithoutMessageInput>
  }

  export type MessageStatus_UpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageStatus_WhereUniqueInput
    data: XOR<MessageStatus_UpdateWithoutMessageInput, MessageStatus_UncheckedUpdateWithoutMessageInput>
  }

  export type MessageStatus_UpdateManyWithWhereWithoutMessageInput = {
    where: MessageStatus_ScalarWhereInput
    data: XOR<MessageStatus_UpdateManyMutationInput, MessageStatus_UncheckedUpdateManyWithoutMessageInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
  }

  export type ReactionUpdateManyWithWhereWithoutMessageInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type PinnedMessageUpsertWithWhereUniqueWithoutMessageInput = {
    where: PinnedMessageWhereUniqueInput
    update: XOR<PinnedMessageUpdateWithoutMessageInput, PinnedMessageUncheckedUpdateWithoutMessageInput>
    create: XOR<PinnedMessageCreateWithoutMessageInput, PinnedMessageUncheckedCreateWithoutMessageInput>
  }

  export type PinnedMessageUpdateWithWhereUniqueWithoutMessageInput = {
    where: PinnedMessageWhereUniqueInput
    data: XOR<PinnedMessageUpdateWithoutMessageInput, PinnedMessageUncheckedUpdateWithoutMessageInput>
  }

  export type PinnedMessageUpdateManyWithWhereWithoutMessageInput = {
    where: PinnedMessageScalarWhereInput
    data: XOR<PinnedMessageUpdateManyMutationInput, PinnedMessageUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutStatusesInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutStatusesInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutStatusesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutStatusesInput, MessageUncheckedCreateWithoutStatusesInput>
  }

  export type UserCreateWithoutMessageStatusesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutMessageStatusesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutMessageStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageStatusesInput, UserUncheckedCreateWithoutMessageStatusesInput>
  }

  export type MessageUpsertWithoutStatusesInput = {
    update: XOR<MessageUpdateWithoutStatusesInput, MessageUncheckedUpdateWithoutStatusesInput>
    create: XOR<MessageCreateWithoutStatusesInput, MessageUncheckedCreateWithoutStatusesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutStatusesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutStatusesInput, MessageUncheckedUpdateWithoutStatusesInput>
  }

  export type MessageUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutMessageStatusesInput = {
    update: XOR<UserUpdateWithoutMessageStatusesInput, UserUncheckedUpdateWithoutMessageStatusesInput>
    create: XOR<UserCreateWithoutMessageStatusesInput, UserUncheckedCreateWithoutMessageStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageStatusesInput, UserUncheckedUpdateWithoutMessageStatusesInput>
  }

  export type UserUpdateWithoutMessageStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type MessageCreateWithoutReactionsInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    pins?: PinnedMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutReactionsInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    pins?: PinnedMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutReactionsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageCreateNestedManyWithoutPinnerInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
    pinnedMessages?: PinnedMessageUncheckedCreateNestedManyWithoutPinnerInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type MessageUpsertWithoutReactionsInput = {
    update: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReactionsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUpdateManyWithoutPinnerNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
    pinnedMessages?: PinnedMessageUncheckedUpdateManyWithoutPinnerNestedInput
  }

  export type RoomCreateWithoutPinsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorCreateNestedManyWithoutRoomInput
    messages?: MessageCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPinsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatarUrl?: string | null
    category: string
    tags?: RoomCreatetagsInput | string[]
    status?: $Enums.RoomStatus
    slowModeSeconds?: number | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    moderators?: RoomModeratorUncheckedCreateNestedManyWithoutRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutRoomInput
    mutedBy?: MutedConversationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPinsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPinsInput, RoomUncheckedCreateWithoutPinsInput>
  }

  export type MessageCreateWithoutPinsInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    room?: RoomCreateNestedOneWithoutMessagesInput
    dmConversation?: DMConversationCreateNestedOneWithoutMessagesInput
    replyTo?: MessageCreateNestedOneWithoutRepliesInput
    replies?: MessageCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_CreateNestedManyWithoutMessageInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutPinsInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: MessageUncheckedCreateNestedManyWithoutReplyToInput
    statuses?: MessageStatus_UncheckedCreateNestedManyWithoutMessageInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutPinsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutPinsInput, MessageUncheckedCreateWithoutPinsInput>
  }

  export type UserCreateWithoutPinnedMessagesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_CreateNestedManyWithoutRecipientInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPinnedMessagesInput = {
    id?: string
    email: string
    handle: string
    name: string
    passwordHash: string
    avatarUrl?: string | null
    bio?: string | null
    role?: $Enums.UserRole
    permissions?: UserCreatepermissionsInput | string[]
    isActive?: boolean
    isVerified?: boolean
    lastSeenAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deviceSessions?: DeviceSessionUncheckedCreateNestedManyWithoutUserInput
    roomModerations?: RoomModeratorUncheckedCreateNestedManyWithoutUserInput
    dmConversations1?: DMConversationUncheckedCreateNestedManyWithoutParticipant1Input
    dmConversations2?: DMConversationUncheckedCreateNestedManyWithoutParticipant2Input
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    messageStatuses?: MessageStatus_UncheckedCreateNestedManyWithoutRecipientInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedByUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    mutedItems?: MutedConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPinnedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPinnedMessagesInput, UserUncheckedCreateWithoutPinnedMessagesInput>
  }

  export type RoomUpsertWithoutPinsInput = {
    update: XOR<RoomUpdateWithoutPinsInput, RoomUncheckedUpdateWithoutPinsInput>
    create: XOR<RoomCreateWithoutPinsInput, RoomUncheckedCreateWithoutPinsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPinsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPinsInput, RoomUncheckedUpdateWithoutPinsInput>
  }

  export type RoomUpdateWithoutPinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUpdateManyWithoutRoomNestedInput
    messages?: MessageUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    tags?: RoomUpdatetagsInput | string[]
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    slowModeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moderators?: RoomModeratorUncheckedUpdateManyWithoutRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRoomNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type MessageUpsertWithoutPinsInput = {
    update: XOR<MessageUpdateWithoutPinsInput, MessageUncheckedUpdateWithoutPinsInput>
    create: XOR<MessageCreateWithoutPinsInput, MessageUncheckedCreateWithoutPinsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutPinsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutPinsInput, MessageUncheckedUpdateWithoutPinsInput>
  }

  export type MessageUpdateWithoutPinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutPinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type UserUpsertWithoutPinnedMessagesInput = {
    update: XOR<UserUpdateWithoutPinnedMessagesInput, UserUncheckedUpdateWithoutPinnedMessagesInput>
    create: XOR<UserCreateWithoutPinnedMessagesInput, UserUncheckedCreateWithoutPinnedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPinnedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPinnedMessagesInput, UserUncheckedUpdateWithoutPinnedMessagesInput>
  }

  export type UserUpdateWithoutPinnedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPinnedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    permissions?: UserUpdatepermissionsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceSessions?: DeviceSessionUncheckedUpdateManyWithoutUserNestedInput
    roomModerations?: RoomModeratorUncheckedUpdateManyWithoutUserNestedInput
    dmConversations1?: DMConversationUncheckedUpdateManyWithoutParticipant1NestedInput
    dmConversations2?: DMConversationUncheckedUpdateManyWithoutParticipant2NestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    messageStatuses?: MessageStatus_UncheckedUpdateManyWithoutRecipientNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedByUsers?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    mutedItems?: MutedConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceSessionCreateManyUserInput = {
    id?: string
    deviceId: string
    platform: $Enums.DevicePlatform
    pushToken?: string | null
    refreshTokenHash: string
    deviceName?: string | null
    deviceModel?: string | null
    ipAddress?: string | null
    lastSeenAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomModeratorCreateManyUserInput = {
    id?: string
    roomId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type DMConversationCreateManyParticipant1Input = {
    id?: string
    participant2Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DMConversationCreateManyParticipant2Input = {
    id?: string
    participant1Id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    roomId?: string | null
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageStatus_CreateManyRecipientInput = {
    id?: string
    messageId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    id?: string
    messageId: string
    emoji: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateManyBlockerInput = {
    id?: string
    blockedId: string
    createdAt?: Date | string
  }

  export type BlockedUserCreateManyBlockedInput = {
    id?: string
    blockerId: string
    createdAt?: Date | string
  }

  export type MutedConversationCreateManyUserInput = {
    id?: string
    roomId?: string | null
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type PinnedMessageCreateManyPinnerInput = {
    id?: string
    roomId: string
    messageId: string
    pinnedAt?: Date | string
  }

  export type DeviceSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    platform?: EnumDevicePlatformFieldUpdateOperationsInput | $Enums.DevicePlatform
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenHash?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutModeratorsNestedInput
  }

  export type RoomModeratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DMConversationUpdateWithoutParticipant1Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant2?: UserUpdateOneRequiredWithoutDmConversations2NestedInput
    messages?: MessageUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateWithoutParticipant1Input = {
    id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateManyWithoutParticipant1Input = {
    id?: StringFieldUpdateOperationsInput | string
    participant2Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DMConversationUpdateWithoutParticipant2Input = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant1?: UserUpdateOneRequiredWithoutDmConversations1NestedInput
    messages?: MessageUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateWithoutParticipant2Input = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutDmConversationNestedInput
    mutedBy?: MutedConversationUncheckedUpdateManyWithoutDmConversationNestedInput
  }

  export type DMConversationUncheckedUpdateManyWithoutParticipant2Input = {
    id?: StringFieldUpdateOperationsInput | string
    participant1Id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_UpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type MessageStatus_UncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_UncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocked?: UserUpdateOneRequiredWithoutBlockedByUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutMutedByNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMutedByNestedInput
  }

  export type MutedConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUpdateWithoutPinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPinsNestedInput
    message?: MessageUpdateOneRequiredWithoutPinsNestedInput
  }

  export type PinnedMessageUncheckedUpdateWithoutPinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUncheckedUpdateManyWithoutPinnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorCreateManyRoomInput = {
    id?: string
    userId: string
    assignedBy: string
    assignedAt?: Date | string
  }

  export type MessageCreateManyRoomInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    dmConversationId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PinnedMessageCreateManyRoomInput = {
    id?: string
    messageId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type MutedConversationCreateManyRoomInput = {
    id?: string
    userId: string
    dmConversationId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomModeratorUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomModerationsNestedInput
  }

  export type RoomModeratorUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomModeratorUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedBy?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutPinsNestedInput
    pinner?: UserUpdateOneRequiredWithoutPinnedMessagesNestedInput
  }

  export type PinnedMessageUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMutedItemsNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMutedByNestedInput
  }

  export type MutedConversationUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyDmConversationInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    replyToId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MutedConversationCreateManyDmConversationInput = {
    id?: string
    userId: string
    roomId?: string | null
    mutedUntil?: Date | string | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    replyTo?: MessageUpdateOneWithoutRepliesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    replyToId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUpdateWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMutedItemsNestedInput
    room?: RoomUpdateOneWithoutMutedByNestedInput
  }

  export type MutedConversationUncheckedUpdateWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MutedConversationUncheckedUpdateManyWithoutDmConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    mutedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyReplyToInput = {
    id?: string
    type?: $Enums.MessageType
    content?: string | null
    mediaUrl?: string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    roomId?: string | null
    dmConversationId?: string | null
    isEdited?: boolean
    editedAt?: Date | string | null
    deletedAt?: Date | string | null
    clientTempId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageStatus_CreateManyMessageInput = {
    id?: string
    recipientId: string
    status?: $Enums.MessageStatus
    updatedAt?: Date | string
  }

  export type ReactionCreateManyMessageInput = {
    id?: string
    userId: string
    emoji: string
    createdAt?: Date | string
  }

  export type PinnedMessageCreateManyMessageInput = {
    id?: string
    roomId: string
    pinnedBy: string
    pinnedAt?: Date | string
  }

  export type MessageUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    room?: RoomUpdateOneWithoutMessagesNestedInput
    dmConversation?: DMConversationUpdateOneWithoutMessagesNestedInput
    replies?: MessageUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UpdateManyWithoutMessageNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: MessageUncheckedUpdateManyWithoutReplyToNestedInput
    statuses?: MessageStatus_UncheckedUpdateManyWithoutMessageNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    pins?: PinnedMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutReplyToInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMetadata?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    dmConversationId?: NullableStringFieldUpdateOperationsInput | string | null
    isEdited?: BoolFieldUpdateOperationsInput | boolean
    editedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientTempId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_UpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: UserUpdateOneRequiredWithoutMessageStatusesNestedInput
  }

  export type MessageStatus_UncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageStatus_UncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPinsNestedInput
    pinner?: UserUpdateOneRequiredWithoutPinnedMessagesNestedInput
  }

  export type PinnedMessageUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PinnedMessageUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    pinnedBy?: StringFieldUpdateOperationsInput | string
    pinnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}