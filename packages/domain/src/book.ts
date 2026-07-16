/**
 * The shared, storage-agnostic record for a user-owned book.
 * File paths, hashes, covers, and extraction details belong to infrastructure
 * and the import pipeline, not to this aggregate.
 */
export type BookId = string;
export type AuthorId = string;
export type SeriesId = string;
export type TagId = string;
export type CollectionId = string;

export type BookFormat = 'pdf' | 'epub';
export type IsoDateTime = string;

export interface Book {
  readonly id: BookId;
  readonly title: string;
  readonly authorIds: readonly AuthorId[];
  readonly format: BookFormat;
  readonly fileSizeBytes: number;
  readonly pageCount?: number;
  readonly addedAt: IsoDateTime;
  readonly publisher?: string;
  readonly publicationYear?: number;
  readonly isbn?: string;
  readonly language?: string;
  readonly description?: string;
  readonly seriesId?: SeriesId;
  readonly seriesPosition?: number;
  readonly tagIds: readonly TagId[];
  readonly collectionIds: readonly CollectionId[];
}

export interface CreateBookInput {
  readonly id: BookId;
  readonly title: string;
  readonly authorIds: readonly AuthorId[];
  readonly format: BookFormat;
  readonly fileSizeBytes: number;
  readonly pageCount?: number;
  readonly addedAt: IsoDateTime;
  readonly publisher?: string;
  readonly publicationYear?: number;
  readonly isbn?: string;
  readonly language?: string;
  readonly description?: string;
  readonly seriesId?: SeriesId;
  readonly seriesPosition?: number;
  readonly tagIds?: readonly TagId[];
  readonly collectionIds?: readonly CollectionId[];
}

export type CreateBookResult =
  | { readonly ok: true; readonly value: Book }
  | { readonly ok: false; readonly errors: readonly BookValidationError[] };

export type BookValidationError =
  | 'id-required'
  | 'title-required'
  | 'author-required'
  | 'author-id-invalid'
  | 'file-size-invalid'
  | 'page-count-invalid'
  | 'added-at-invalid'
  | 'publication-year-invalid'
  | 'series-position-without-series'
  | 'series-position-invalid';

/** Creates a normalized, immutable Book or returns all recoverable input errors. */
export const createBook = (input: CreateBookInput): CreateBookResult => {
  const errors = validate(input);

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: Object.freeze({
      id: input.id.trim(),
      title: input.title.trim(),
      authorIds: freezeIds(input.authorIds),
      format: input.format,
      fileSizeBytes: input.fileSizeBytes,
      pageCount: input.pageCount,
      addedAt: input.addedAt,
      publisher: trimOptional(input.publisher),
      publicationYear: input.publicationYear,
      isbn: trimOptional(input.isbn),
      language: trimOptional(input.language),
      description: trimOptional(input.description),
      seriesId: trimOptional(input.seriesId),
      seriesPosition: input.seriesPosition,
      tagIds: freezeIds(input.tagIds ?? []),
      collectionIds: freezeIds(input.collectionIds ?? []),
    }),
  };
};

const validate = (input: CreateBookInput): BookValidationError[] => {
  const errors: BookValidationError[] = [];

  if (input.id.trim().length === 0) errors.push('id-required');
  if (input.title.trim().length === 0) errors.push('title-required');
  if (input.authorIds.length === 0) errors.push('author-required');
  if (input.authorIds.some((authorId) => authorId.trim().length === 0)) {
    errors.push('author-id-invalid');
  }
  if (!Number.isSafeInteger(input.fileSizeBytes) || input.fileSizeBytes < 0) {
    errors.push('file-size-invalid');
  }
  if (
    input.pageCount !== undefined &&
    (!Number.isSafeInteger(input.pageCount) || input.pageCount <= 0)
  ) {
    errors.push('page-count-invalid');
  }
  if (!isIsoDateTime(input.addedAt)) errors.push('added-at-invalid');
  if (
    input.publicationYear !== undefined &&
    (!Number.isSafeInteger(input.publicationYear) || input.publicationYear < 0)
  ) {
    errors.push('publication-year-invalid');
  }
  if (input.seriesPosition !== undefined && trimOptional(input.seriesId) === undefined) {
    errors.push('series-position-without-series');
  }
  if (input.seriesPosition !== undefined && input.seriesPosition <= 0) {
    errors.push('series-position-invalid');
  }

  return errors;
};

const isIsoDateTime = (value: string): boolean => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString() === value;
};

const trimOptional = (value: string | undefined): string | undefined => {
  const trimmed = value?.trim();
  return trimmed === '' ? undefined : trimmed;
};

const freezeIds = <T extends string>(ids: readonly T[]): readonly T[] =>
  Object.freeze(ids.map((id) => id.trim() as T));
