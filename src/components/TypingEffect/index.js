// components/TypingEffect/index.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const TypingEffect = () => {
    const messages = [
        { text: 'Web Developer' },
        { text: 'Backend Web Developer' },
        { text: 'Frontend Web Developer' },
        { text: 'Hiking Enthusiast' },
        { text: 'Biking Enthusiast' },
        { text: 'Django Developer' },
        { text: 'React Developer' },
        { text: 'Python Developer' },
        { text: 'JavaScript Developer' },
        { text: 'Software Engineer' },
        { text: 'Software Developer' },
        { text: 'Full Stack Developer' },
        { text: 'Web Designer' },
        { text: 'AWS Full-Stack Engineer' }
    ];

    return (
        <ReactTypingEffect
            text={messages.map((message) => message.text)}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={1000}
            cursor={'_'} />
    );
};
