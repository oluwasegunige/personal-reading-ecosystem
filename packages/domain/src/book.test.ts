import { describe, expect, it } from 'vitest';
import { createBook } from './book.js';

const validBook = {
  id: ' book-1 ',
  title: ' A Fire Upon the Deep ',
  authorIds: [' author-1 '],
  format: 'epub' as const,
  fileSizeBytes: 1_024,
  pageCount: 640,
  addedAt: '2026-07-16T12:00:00.000Z',
};

describe('Book', () => {
  it('creates an immutable, normalized record with required metadata', () => {
    const result = createBook({ ...validBook, tagIds: [' science-fiction '], collectionIds: [' read-soon '] });

    expect(result).toEqual({
      ok: true,
      value: expect.objectContaining({
        id: 'book-1',
        title: 'A Fire Upon the Deep',
        authorIds: ['author-1'],
        tagIds: ['science-fiction'],
        collectionIds: ['read-soon'],
      }),
    });
    if (result.ok) {
      expect(Object.isFrozen(result.value)).toBe(true);
      expect(Object.isFrozen(result.value.authorIds)).toBe(true);
    }
  });

  it('reports every invalid required and dependent value', () => {
    const result = createBook({
      ...validBook,
      id: ' ',
      title: ' ',
      authorIds: [],
      fileSizeBytes: -1,
      pageCount: 0,
      addedAt: 'not-a-date',
      seriesPosition: 0,
    });

    expect(result).toEqual({
      ok: false,
      errors: [
        'id-required',
        'title-required',
        'author-required',
        'file-size-invalid',
        'page-count-invalid',
        'added-at-invalid',
        'series-position-without-series',
        'series-position-invalid',
      ],
    });
  });
});
