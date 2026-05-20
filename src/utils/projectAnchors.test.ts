import { describe, expect, it } from 'vitest';
import { getProjectAnchorId } from './projectAnchors';

describe('getProjectAnchorId', () => {
  it('creates stable route hash ids from project titles', () => {
    expect(getProjectAnchorId('SQL Injection Example Website')).toBe('sql-injection-example-website');
  });

  it('normalizes surrounding and repeated whitespace', () => {
    expect(getProjectAnchorId('  Music   Player  ')).toBe('music-player');
  });

  it('encodes punctuation that is not safe in a fragment id', () => {
    expect(getProjectAnchorId('Tekku: PHP Forum Website')).toBe('tekku%3A-php-forum-website');
  });
});
