import type { Book, BookId, ReaderState } from '@reading/domain';

/** Ports are owned by workflows; infrastructure supplies their implementations. */
export interface BookRepository {
  findById(id: BookId): Promise<Book | null>;
  save(book: Book): Promise<void>;
}

export interface ReaderStateRepository {
  save(state: ReaderState): Promise<void>;
}

export interface WorkQueue {
  enqueue(work: DurableWork): Promise<void>;
}

export interface DurableWork {
  readonly id: string;
  readonly type: 'import' | 'sync-upload' | 'sync-download';
}
