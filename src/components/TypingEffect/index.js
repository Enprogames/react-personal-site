// components/TypingEffect/index.js
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export const TypingEffect = () => {
    const messages = [
        { text: 'Web Developer' },
        { text: 'Backend Web Developer' },
        { text: 'Frontend Web Developer' },
        { text: 'Hiking Enthusiast' },
        { text: 'Cycling Enthusiast' },
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

    // Fisher-Yates Shuffle
    for (let i = messages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [messages[i], messages[j]] = [messages[j], messages[i]]; // Swap
    }

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
