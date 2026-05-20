import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProjectPane } from '.';

describe('ProjectPane', () => {
  it('renders structured project content', () => {
    render(
      <ProjectPane
        title="SQL Injection Example Website"
        description="A security demo project."
        keyPoints={['Shows a vulnerable query', 'Explains parameterized queries']}
        technologies={['Python', 'Django']}
        image="/project.png"
        repositoryLink="https://github.com/example/project"
        elements={[
          { type: 'paragraph', content: 'A short narrative section.' },
          { type: 'points', content: ['First detail', 'Second detail'] },
          { type: 'image', content: '/diagram.png', alt: 'Architecture diagram' },
          { type: 'code', language: 'sql', content: 'SELECT * FROM auth_user;' },
        ]}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'SQL Injection Example Website' }),
    ).toBeInTheDocument();
    expect(screen.getByText('A security demo project.')).toBeInTheDocument();
    expect(screen.getByText('Shows a vulnerable query')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'SQL Injection Example Website' })).toHaveAttribute('src', '/project.png');
    expect(screen.getByRole('img', { name: 'Architecture diagram' })).toHaveAttribute('src', '/diagram.png');
    expect(
      screen.getAllByText((_, element) => element?.textContent === 'SELECT * FROM auth_user;').length,
    ).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /repository/i })).toHaveAttribute(
      'href',
      'https://github.com/example/project',
    );
  });
});
