// Client-safe enum mirroring Prisma's NodeType
// Keep in sync with prisma/schema.prisma enum NodeType
export enum NodeType {
  INITIAL = 'INITIAL',
  MANUAL_TRIGGER = 'MANUAL_TRIGGER',
  HTTP_REQUEST = 'HTTP_REQUEST',
}
