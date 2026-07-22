import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TypingEffect } from './index';
import { createSequence } from './sequence';

describe('createSequence', () => {
  it('produces 32 elements (16 messages × 2)', () => {
    const seq = createSequence();
    expect(seq).toHaveLength(32);
  });

  it('alternates message strings with 1500 delays', () => {
    const seq = createSequence();
    for (let i = 0; i < seq.length; i += 1) {
      if (i % 2 === 0) {
        expect(typeof seq[i]).toBe('string');
      } else {
        expect(seq[i]).toBe(1500);
      }
    }
  });

  it('contains all 16 original messages', () => {
    const seq = createSequence();
    const messages = seq.filter((_, i) => i % 2 === 0);
    expect(new Set(messages).size).toBe(16);
  });
});

describe('TypingEffect', () => {
  it('renders a span wrapper without crashing', () => {
    render(<TypingEffect />);
    expect(screen.getByText((_, element) => element?.tagName === 'SPAN')).toBeInTheDocument();
  });
});