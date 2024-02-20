// data/projects.js

export const projects = [
    {
        title: 'SQL Injection Example Website',
        repositoryLink: 'https://github.com/Enprogames/sql-injection-example',
        elements: [
            {
                type: 'image',
                content: 'img/sql-injection3.JPG'
            },
            {
                type: 'keyPoints',
                content: [
                    'Demonstrates how the prevalent security vulnerability of SQL injections can be used',
                    'Implemented using a fully-fledged web backend with Python and Django'
                ]
            },
            {
                type: 'description',
                content: `A simple Django website, created in collaboration with Sebastien Van Den Bremt (github), to demonstrate how SQL injections work. It features user registration and logging in, and stores documents for the users...`
            },
            {
                type: 'code',
                language: 'sql',
                content: `SELECT * FROM auth_user WHERE username = '%s' AND password='%s' % (username, make_password(password, salt=salt))`
            },
            {
                type: 'technologies',
                content: ['Python (Django)', 'SQL (SQLite)', 'HTML5/CSS']
            }
        ]
    },
    {
        title: 'Flashcard Tool',
        repositoryLink: 'https://github.com/Enprogames/Flashcard-Tool',
        elements: [
            {
                type: 'image',
                content: ['img/flashcard-tool1.JPG', 'img/flashcard-tool2.JPG']
            },
            {
                type: 'keyPoints',
                content: [
                    'Great study aid for memorizing many terms/concepts/ideas',
                    'Fully interactive graphical interface'
                ]
            },
            {
                type: 'description',
                content: `A program used for displaying flashcards. Flashcards are a great way to study and memorize large amounts of information...`
            },
            {
                type: 'technologies',
                content: ['Python', 'TKinter', 'Notion API']
            }
        ]
    },
    {
        title: 'School Clock',
        repositoryLink: 'https://github.com/Enprogames/Python-Clock',
        elements: [
            {
                type: 'image',
                content: 'img/clock1.JPG'
            },
            {
                type: 'keyPoints',
                content: [
                    'Displays current events based on list of daily/weekly/monthly events'
                ]
            },
            {
                type: 'description',
                content: `A python clock, created for the computer science classroom at my highschool, which displays the time, current class, whether it is break time, and a joke at the top...`
            },
            {
                type: 'technologies',
                content: ['Python', 'TKinter', 'Joke API']
            }
        ]
    },
    {
        title: 'Music Player',
        repositoryLink: 'https://github.com/Enprogames/MusicPlayer',
        elements: [
            {
                type: 'image',
                content: 'img/music-player1.JPG'
            },
            {
                type: 'keyPoints',
                content: [
                    'Simple program for playing music',
                    'Fully interactive graphical interface'
                ]
            },
            {
                type: 'description',
                content: `A simple music player program written in python. It uses pygame mixer for playing sound files, and TKinter for the user interface...`
            },
            {
                type: 'technologies',
                content: ['Python', 'TKinter', 'Pygame and Mutagen']
            }
        ]
    }
];
