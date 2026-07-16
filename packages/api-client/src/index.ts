/** Versioned contracts prevent desktop, mobile, and cloud model drift. */
export const API_V1_PREFIX = '/v1' as const;

export interface SyncApi {
  readonly version: 'v1';
}
