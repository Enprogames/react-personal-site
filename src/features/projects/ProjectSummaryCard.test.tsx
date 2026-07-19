import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ProjectSummaryCard } from './ProjectSummaryCard';
import type { Project } from './projects.types';

const project: Project = {
  id: 'tekku-php-forum-website',
  title: 'Tekku: PHP Forum Website',
  description: 'A forum project.',
  thumbnail: '/tekku.png',
  landscapeImage: '/tekku-large.png',
};

describe('ProjectSummaryCard', () => {
  it('links to the matching project anchor', () => {
    render(
      <HashRouter>
        <ProjectSummaryCard project={project} />
      </HashRouter>,
    );

    expect(screen.getByRole('link', { name: /tekku/i })).toHaveAttribute(
      'href',
      '#/Projects#tekku-php-forum-website',
    );
    expect(screen.getByRole('img', { name: 'Preview of Tekku: PHP Forum Website' }))
      .toHaveAttribute('src', '/tekku.png');
  });
});
