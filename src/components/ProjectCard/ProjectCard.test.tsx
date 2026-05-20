import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProjectCard from '.';

describe('ProjectCard', () => {
  it('links to the matching project anchor', () => {
    render(
      <HashRouter>
        <ProjectCard
          title="Tekku: PHP Forum Website"
          description="A forum project."
          imgSrc="/tekku.png"
        />
      </HashRouter>,
    );

    expect(screen.getByRole('link', { name: /tekku/i })).toHaveAttribute(
      'href',
      '#/Projects#tekku-php-forum-website',
    );
  });
});
