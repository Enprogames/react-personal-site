import { describe, expect, it } from 'vitest';
import { getProjectAnchorId } from './projectAnchors';
import { projects } from './projects';

describe('getProjectAnchorId', () => {
  it('creates stable route hash ids from project titles', () => {
    expect(getProjectAnchorId('SQL Injection Example Website')).toBe('sql-injection-example-website');
  });

  it('normalizes surrounding and repeated whitespace', () => {
    expect(getProjectAnchorId('  Music   Player  ')).toBe('music-player');
  });

  it('normalizes punctuation to simple slug separators', () => {
    expect(getProjectAnchorId('Tekku: PHP Forum Website')).toBe('tekku-php-forum-website');
  });

  it('creates unique project anchors for all configured projects', () => {
    const ids = projects.map((project) => getProjectAnchorId(project.title));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => id.length > 0)).toBe(true);
  });
});
