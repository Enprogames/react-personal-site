// src/components/TypingEffect/index.tsx
import type { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { createSequence } from './sequence';

const sequence = createSequence();

export const TypingEffect: FC = () => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={30}
      deletionSpeed={50}
      cursor
      repeat={Infinity}
      style={{ fontSize: '1.25em', display: 'inline-block' }}
    />
  );
};
