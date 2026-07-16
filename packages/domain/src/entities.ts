/** Framework-free shared language for every application in the ecosystem. */
export type BookId = string;
export type DeviceId = string;
export type UserId = string;

export interface Book {
  readonly id: BookId;
  readonly title: string;
  readonly authorIds: readonly string[];
  readonly format: BookFormat;
}

export type BookFormat = 'pdf' | 'epub';

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
