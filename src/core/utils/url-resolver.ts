
/**
 * Module dependencies.
 */

import { resolve } from 'url';

/**
 * Export `absoluteUrlResolver`.
 */

export function absoluteUrlResolver(path: string): string {
  const url: string = process.env.NEXT_PUBLIC_BASE_URL || 'localhost:3000';

  return resolve(url, path);
}

