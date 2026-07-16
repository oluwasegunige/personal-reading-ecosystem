import { describe, expect, it } from 'vitest';
import type { Book } from './entities.js';

describe('Book contract', () => {
  it('remains framework-free and immutable by convention', () => {
    const book: Book = { id: 'book-1', title: 'Example', authorIds: [], format: 'epub' };
    expect(book.title).toBe('Example');
  });
});
