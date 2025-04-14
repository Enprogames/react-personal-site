// src/components/TypingEffect/index.js
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

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
        { text: 'AWS Full-Stack Engineer' },
        { text: 'WPF Developer' },
        { text: 'C# Developer' }
    ];

    // Fisher-Yates Shuffle
    for (let i = messages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [messages[i], messages[j]] = [messages[j], messages[i]];
    }

    // Prepare the sequence for react-type-animation
    // It needs an array like: [text1, delay1, text2, delay2, ...]
    const sequence = messages.flatMap(message => [
        message.text,
        1500 // Pause after typing each message
    ]);

    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span" // Or 'div', 'p', etc. - the HTML element to wrap the text
            speed={30} // Typing speed (lower is faster) - adjust to match desired feel
            deletionSpeed={50} // Deletion speed (optional, defaults same as speed)
            cursor={true} // Show cursor
            repeat={Infinity} // Repeat the sequence indefinitely
            style={{ fontSize: '1.5em', display: 'inline-block' }} // Optional styling
        />
    );
};
