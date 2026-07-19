import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProjectDetailsCard } from './ProjectDetailsCard';
import type { Project } from './projects.types';

const project: Project = {
  id: 'sql-injection-example-website',
  title: 'SQL Injection Example Website',
  description: 'A security demo project.',
  keyPoints: ['Shows a vulnerable query', 'Explains parameterized queries'],
  technologies: ['Python', 'Django'],
  thumbnail: '/thumbnail.png',
  landscapeImage: '/project.png',
  repositoryLink: 'https://github.com/example/project',
  elements: [
    { type: 'paragraph', content: 'A short narrative section.' },
    { type: 'points', content: ['First detail', 'Second detail'] },
    { type: 'image', content: '/diagram.png', alt: 'Architecture diagram' },
    { type: 'code', language: 'sql', content: 'SELECT * FROM auth_user;' },
  ],
};

describe('ProjectDetailsCard', () => {
  it('renders structured project content', () => {
    render(<ProjectDetailsCard project={project} />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'SQL Injection Example Website',
      }),
    ).toBeInTheDocument();
    expect(screen.getByText('A security demo project.')).toBeInTheDocument();
    expect(screen.getByText('Shows a vulnerable query')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: 'Screenshot of SQL Injection Example Website',
      }),
    ).toHaveAttribute('src', '/project.png');
    expect(screen.getByRole('img', { name: 'Architecture diagram' })).toHaveAttribute(
      'src',
      '/diagram.png',
    );
    expect(screen.getByText('SELECT * FROM auth_user;')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Open SQL Injection Example Website repository' }),
    ).toHaveAttribute('href', 'https://github.com/example/project');
    expect(
      screen.getByRole('link', { name: 'Open SQL Injection Example Website repository' }),
    ).toHaveAttribute('target', '_blank');
    expect(
      screen.getByRole('link', { name: 'Open SQL Injection Example Website repository' }),
    ).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
