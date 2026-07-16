import type { BookId } from './book.js';

/** Framework-free shared language for every application in the ecosystem. */
export type DeviceId = string;
export type UserId = string;

export interface ReaderState {
  readonly bookId: BookId;
  readonly location: string;
  readonly updatedAt: Date;
}

export interface Bookmark {
  readonly id: string;
  readonly bookId: BookId;
  readonly location: string;
}

export interface Highlight {
  readonly id: string;
  readonly bookId: BookId;
  readonly anchor: TextAnchor;
}

export interface TextAnchor {
  readonly selectedText: string;
  readonly contextBefore: string;
  readonly contextAfter: string;
  readonly location: string;
}
