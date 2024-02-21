// Assets/projects.js

// import all images from ./Assets/img/projects/**
export const flashcardTool1 = require('./img/projects/flashcard-tool1.JPG');
export const flashcardTool2 = require('./img/projects/flashcard-tool2.JPG');
export const clock1 = require('./img/projects/clock1.JPG');
export const musicPlayer1 = require('./img/projects/music-player1.JPG');
export const sqlInjection1 = require('./img/projects/sql-injection1.JPG');
export const sqlInjection2 = require('./img/projects/sql-injection2.JPG');


export const projects = [
    {
        title: 'SQL Injection Example Website',
        repositoryLink: 'https://github.com/Enprogames/sql-injection-example',
        thumbnail: sqlInjection1,
        landscapeImage: sqlInjection2,
        description: `A simple Django website, created in collaboration with Sebastien Van Den Bremt (github), to demonstrate how SQL injections work. It features user registration and logging in, and stores documents for the users...`,
        keyPoints: [
            'Demonstrates how the prevalent security vulnerability of SQL injections can be used',
            'Implemented using a fully-fledged web backend with Python and Django'
        ],
        technologies: ['Python (Django)', 'SQL (SQLite)', 'HTML5/CSS'],
        elements: [
            {
                type: 'paragraph',
                content: 'Consider the below example of some user input that could be used to exploit an SQL injection vulnerability:'
            },
            {
                type: 'code',
                language: 'sql',
                content: `SELECT * FROM auth_user WHERE username = '%s' AND password='%s' % (username, make_password(password, salt=salt))`
            },
            {
                type: 'paragraph',
                content: 'If the website does not properly deal with user input, this could be used to login as any user. This type of attack is easily preventable by using "parameterized queries."'
            },
        ]
    },
    {
        title: 'Flashcard Tool',
        description: `A program used for displaying flashcards. Flashcards are a great way to study and memorize large amounts of information...`,
        keyPoints: [
            'Great study aid for memorizing many terms/concepts/ideas',
            'Fully interactive graphical interface'
        ],
        technologies: ['Python', 'TKinter'],
        repositoryLink: 'https://github.com/Enprogames/Flashcard-Tool',
        thumbnail: flashcardTool1,
        landscapeImage: flashcardTool2,
    },
    {
        title: 'School Clock',
        description: `A python clock, created for the computer science classroom at my highschool, which displays the time, current class, whether it is break time, and a joke at the top...`,
        keyPoints: [
            'Displays current events based on list of daily/weekly/monthly events'
        ],
        technologies: ['Python', 'TKinter', 'Joke API'],
        repositoryLink: 'https://github.com/Enprogames/Python-Clock',
        thumbnail: clock1,
        landscapeImage: clock1,
    },
    {
        title: 'Music Player',
        repositoryLink: 'https://github.com/Enprogames/MusicPlayer',
        description: `A simple music player program written in python. It uses pygame mixer for playing sound files, and TKinter for the user interface...`,
        keyPoints: [
            'Simple program for playing music',
            'Fully interactive graphical interface'
        ],
        technologies: ['Python', 'TKinter', 'Pygame and Mutagen'],
        thumbnail: musicPlayer1,
        landscapeImage: musicPlayer1,
    }
];
