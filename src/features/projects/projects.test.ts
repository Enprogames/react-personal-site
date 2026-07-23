import { describe, expect, it } from 'vitest';
import { projects } from './projects';

describe('projects', () => {
  it('uses stable, unique, URL-safe ids', () => {
    const ids = projects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true);
  });

  it('defines images for every project view', () => {
    projects.forEach((project) => {
      expect(project.thumbnail).toBeTruthy();
      expect(project.landscapeImage).toBeTruthy();
    });
  });
});
