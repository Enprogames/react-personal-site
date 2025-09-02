// Assets/projects.ts

// import all images from ./Assets/img/projects/**
import flashcardTool1 from './img/projects/flashcard-tool1.jpg';
import flashcardTool2 from './img/projects/flashcard-tool2.jpg';
import clock1 from './img/projects/clock1.jpg';
import musicPlayer1 from './img/projects/music-player1.jpg';
import sqlInjection1 from './img/projects/sql-injection1.jpg';
import sqlInjection2 from './img/projects/sql-injection2.jpg';
import tekku1 from './img/projects/tekku_title_page_small.jpeg';
import tekku2 from './img/projects/tekku_title_page_large.jpeg';
import bitcoin1 from './img/projects/bitcoin_history.jpg';
import bitcoin2 from './img/projects/bitcoin_paths.jpg';

export const projects = [
    {
        title: 'Bitcoin Research Project',
        repositoryLink: 'https://github.com/Enprogames/Bitcoin_JanusGraph',
        thumbnail: bitcoin1,
        landscapeImage: bitcoin2,
        description: `As part of my senior research project at VIU, I developed a graph representation of the Bitcoin blockchain data. This graph representation is intended to be used for tracing Bitcoin transactions and for developing algorithms to achieve it.`,
        keyPoints: [
            'Developed a novel data model for representing bitcoin transactions in a graph database.',
            'Used depth-first search algorithms to efficiently determine sources of specific bitcoins, going backwards and forwards through time.'
        ],
        technologies: [
            'Python (SQLAlchemy, Alembic, etc)',
            'JanusGraph graph database',
            'PostgreSQL relational database'
        ],
        'elements': [
            {
                type: 'paragraph',
                content: `It is fascinating to analyze the complex transactions on the Bitcoin blockchain. Since all transaction data is public, it is possible to trace the flow of Bitcoin from its creation to its current location. This is not a completely straightforward task, as it involves a bit of estimation and guesswork, but it allows for telling the source and destination of specific Bitcoins with some degree of certainty.`
            },
            {
                type: 'paragraph',
                content: `The main challanges when attempting to trace Bitcoin transaction histories are:`
            },
            {
                type: 'points',
                content: [
                    'The massive scale of the Bitcoin blockchain dataset and the transactions therein',
                    'The complexity of the Bitcoin transaction data model, and',
                    'the presence of "bad data", such as duplicate transactions.'
                ]
            }
        ]
    },
    {
        title: 'Tekku: PHP Forum Website',
        repositoryLink: 'https://github.com/Enprogames/Tekku',
        thumbnail: tekku1,
        landscapeImage: tekku2,
        description: `A forum website, created in collaboration with Nicholas Hopkins, that allows users to post content under various topics. It features user registration and logging in, and stores posts and comments in a MySQL database. This was an exercise in creating a full-stack web application. It was an excellent experience in learning how to create a website from scratch, and how to use PHP and MySQL.`,
        keyPoints: [
            'Fully functional forum website.',
            'Implemented using a fully-fledged web backend with Apache, PHP, and MySQL.'
        ],
        technologies: [
            'PHP', 'MySQL', 'Apache Web Server', 'Docker'
        ]
    },
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
