// src/components/TypingEffect/index.tsx
import type { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

const messages = [
  'Web Developer',
  'Backend Web Developer',
  'Frontend Web Developer',
  'Hiking Enthusiast',
  'Cycling Enthusiast',
  'Django Developer',
  'React Developer',
  'Python Developer',
  'JavaScript Developer',
  'Software Engineer',
  'Software Developer',
  'Full Stack Developer',
  'Web Designer',
  'AWS Full-Stack Engineer',
  'WPF Developer',
  'C# Developer',
];

function createSequence() {
  const shuffled = [...messages];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.flatMap((message) => [message, 1500]);
}

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
