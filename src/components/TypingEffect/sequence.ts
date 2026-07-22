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

export function createSequence() {
  const shuffled = [...messages];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.flatMap((message) => [message, 1500]);
}