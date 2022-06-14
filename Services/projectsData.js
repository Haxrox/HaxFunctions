const PROJECTS = [
    {
        title: "HaxRover",
        date: "May 2022 - Present",
        type: "Personal Project - Hardware + Software",
        shortDescription: "BLE Rover built using a Raspberry Pi Zero W running Ubuntu Desktop 32-bit, motor driver, camera module, and 2 servo motors",
        tasks: [
            "Developing an Android app in Java to remotely control the rover and stream video through BLE",
            "Using BlueZ and dbus-python library to create a BLE advertiser and GATT Server in Python and writing a state machine to control rover movement and BLE commands concurrently"
        ],
        techStack: ['Raspberry Pi', 'Python', 'Linux', 'BlueZ', 'Bluetooth Low Energy', 'DBus', 'BASH', 'Android Studio', 'Java'
        ],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxRover"
            }
        ]
    },
    {
        title: "Haxdroid",
        date: "December 2021 - Present",
        type: "Personal Project - Software",
        shortDescription: "Discord utility bot written in Node.js hosted on a Microsoft Azure Standard B1 Linux Virtual Machine running Ubuntu Server 16.04-LTS",
        tasks: [
            "Interact with the UBCGrades API using Chart.js, and Axios to display course grade information",
            "Utilize Cheerio and Axios to web scrape course information from UBC course registration website",
            "Streaming audio from a YouTube video to a Discord Voice call and implements Axios to call YouTube API backend endpoint to get video information",
            "Writing autoplay algorithm to generate the next played song when the queue is empty",
            "Coding cryptography algorithms for Caeser, Affine and RSA ciphers"
        ],
        components: [
            {
                component: "Typography",
                properties: {
                    variant: "h6"
                },
                children: ["Commands"]
            },
            {
                component: "Typography",
                properties: {
                    variant: "body1"
                },
                children: [
                    "Cryptography: encrypting and decrypting Caeser (w/ key or brute force), Affine, and RSA Cipher (w/ keys)",
                    "Dictionary: gets definition + synonyms of a given word from Merriam-Webster dictionary API",
                    "Generate: generates array data (ascending, descending, and unordered) of any type and random strings, for LeetCode test cases, UUIDs, and passwords (not to be used)",
                    "Music: streams audio from a YouTube video to a Discord Voice Call with features, such as autoplay, repeat, queueing, playlsts",
                    "RNG: generates a random number",
                    "UBCGrades: gets course grade summary from UBCGrades API"
                ]
            }
        ],
        techStack: ['Microsoft Azure Virtual Machine', 'Linux', 'BASH', 'Node.js'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Haxdroid"
            }
        ]
    },
    {
        title: "HaxFunctions",
        date: "December 2021 - Present",
        type: "Personal Project - Software",
        shortDescription: "Serverless Backend API on Microsoft Azure Cloud Functions for redesigning GitHub Webhook message embeds in Discord",
        tasks: [
            "Following GitHub Webhook documentations to understand payload data to redesign messages sent to Discord channels",
            "Planning to connect Microsoft Azure Cosmo DB to serve as a backend database for personal projects for this website"
        ],
        techStack: ['Microsoft Azure Cloud Functions', 'Node.js'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/HaxFunctions"
            }
        ]
    },
    {
        title: "Hello! My Name Is ...",
        date: "June 2020 - Present",
        type: "Personal Project - Software",
        shortDescription: "Android BLE chatting app",
        longDescription: "Detailed description w/ build instructions, what i learned, etc, etc",
        tasks: [
            "Program a BLE chatting app written in Java on the Android platform",
            "Developing a test suite to validate apps correctness",
            "Integrate AWS AppSync to query user data stored in AWS Amplify DataStore"
        ],
        techStack: ['Android Studio', 'Java',  'Bluetooth Low Energy', 'AWS AppSync', 'AWS Amplify Datastore'],
        url: [
            {
                type: "PlayStore",
                href: "https://play.google.com/store/apps/details?id=com.belltek.androidxhmni"
            }
        ]
    },
    {
        title: "Personal Website",
        date: "May 2022",
        type: "Personal Project - Software",
        shortDescription: "Portfolio with all my personal projects",
        tasks: [
            "Implemented MaterialUI library for frontend design",
            "Configured react-router-dom for page navigation"
        ],
        techStack: ['React', 'JavaScript', 'Firebase Hosting', 'GitHub Actions'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/haxrox/haxrox"
            },
            {
                type: "Web",
                href: "https://haxtech.web.app/"
            }
        ]
    },
    {
        title: "The Exploring Rover",
        date: "March 2022 - April 2022",
        type: "UBC CPEN 291 - Hardware + Software",
        shortDescription: "Rover constructed using a Raspberry Pi Zero W running Raspberry Pi OS 32-bit, motor driver, 2 servo motors and camera module",
        tasks: [
            "Commanded in a way similar to Google Maps Street View",
            "Designed the system diagrams, data flow, and control flow and delegated tasks to group members",
            "Hosted a Node.js server on a UBC virtual machine with an express.js framework for sending frontend webpage to client and websockets to handle communication between frontend and rover",
            "Wrote a state machine in Python to control rover movement"
        ],
        techStack: ['Raspberry Pi', 'Python', 'Linux', 'WebSockets', 'Node.js', 'Express.js', 'HTML', 'CSS'],
        url: []
    },
    {
        title: "Fithub",
        date: "February 2022 - April 2022",
        type: "UBC Launchpad - Software",
        shortDescription: "Web application* to help users organize and follow playlists of exercises *NOTE: must accept backend certificate to view videos",
        tasks: [
            "Created with a Flutter frontend, Node.js with Express and Sequelize backend, and PostgreSQL database",
            "Implemented backend endpoints for the workout player",
            "Deployed frontend on Firebase Hosting with GitHub Actions for continuous deployment, backend on Amazon Elastic Compute(EC2), and database on Amazon Relational Database Service(RDS)"
        ],
        techStack: ['Flutter', 'Node.js', 'Express.js', 'Firebase Hosting', 'GitHub Actions', 'Amazon EC2', 'Sequelize', 'PostgreSQL', 'Amazon RDS'],
        url: [
            {
                type: "GitHub",
                tooltip: "Frontend Repository",
                href: "https://github.com/ubclaunchpad/workoutpersonalizer-frontend"
            },
            {
                type: "GitHub",
                tooltip: "Backend Repository",
                href: "https://github.com/ubclaunchpad/workoutpersonalizer-backend"
            },
            {
                type: "Web",
                href: "https://fithub-launchpad.web.app/#/"
            },
            {
                type: "Backend",
                href: "https://ec2-54-193-129-230.us-west-1.compute.amazonaws.com:8000/"
            }
        ]
    },
    {
        title: "Entertainment Biped Robot",
        date: "January 2022 - March 2022",
        type: "UBC CPEN 291 - Hardware + Software",
        shortDescription: "Biped Robot that dances to a variety of songs",
        tasks: [
            "Assembled a Biped Robot to dance to various songs using an ItsyBitsy M4 microcontroller, servo motors, colour TFT LCD, piezo buzzer, 3x4 numeric matrix keypad",
            "Coded an audio class and queue to convert letter notes to frequencies and play music on piezo buzzer, and parallelized the execution of the program written in CircuitPython"
        ],
        techStack: ['ItsyBitsy M4 Express Microcontroller', 'CircuitPython'],
        url: []
    },
    {
        title: "Sitdown",
        date: "January 2022",
        type: "nwHacks Hackathon - Hardware + Software",
        shortDescription: "Web application to help students find or reserve seats in common study areas",
        tasks: [
            "Devised backend database structure to efficiently store study space configurations, reservations, and occupancies and implemented client API calls on the frontend"
        ],
        techStack: ['React', 'Bootstrap', 'JavaScript', 'Firebase Firestore', 'Firebase Hosting', 'Firebase Authentication'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/sitdown"
            },
            {
                type: "Web",
                href: "https://nwhacks-sitdown.web.app/"
            }
        ]
    },
    {
        title: "Simple RISC Machine",
        date: "September 2021 - December 2021",
        type: "UBC CPEN 211 - Hardware",
        shortDescription: "Reduced Instruction Set Computer (RISC) written in Verilog on an Intel FPGA DE1-SoC",
        tasks: [
            "Supported decoding ARM Assembly arithmetic and memory instructions, reading/writing to on-board RAM, reading from switches, and outputting information to a 7-segment display"
        ],
        techStack: ['Verilog', 'FPGA', 'Quartus', 'ModelSim', 'Assembly'],
        url: []
    },
    {
        title: "Mini Projects",
        date: "September 2021 - December 2021",
        type: "UBC CPEN 221 - Software",
        shortDescription: "Used Java, OOP, algorithm efficiency, client-server model, concurrency, multithreading, and big data processing concepts to create a Malware Distribution Risk Analyzer, Document-Level Sentiment Analyzer, and WikiMediator Network Server",
        tasks: [
            "Wrote software specifications and test cases, resulting in 95% line and 85% branch coverage",
            "Led team by delegating tasks to group members based on their skill set and interests, helping them design algorithms for their tasks, and setting deadlines so that we stayed on track "

        ],
        techStack: ['Java', 'IntelliJ IDEA', 'JUnit', 'Google Cloud Sentiment Analysis'],
        url: []
    },
    {
        title: "BleAudio",
        date: "May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android application that uses the Opus Codec to encode and decode audio data to send to another another device using BLE",
        tasks: ["Integrated the Opus Codec using ndk-build for audio encoding and decoding and a queue for efficient data transmission"],
        techStack: ['Java', 'Android Studio', 'Bluetooth Low Energy', 'Opus Codec'],
        url: [
            {
                type: "Android",
                href: "apks/BleAudio.apk",
                tooltip: "Android Application APK"
            }
        ]
    },
    {
        title: "Android Opus Codec Prototype",
        date: "May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android application that uses the Opus Codec to encode and decode audio data",
        tasks: ["Applied Android AudioTrack, AudioRecord and ndk-build"],
        techStack: ['Java', 'Android Studio', 'Opus Codec'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Android-OpusCodecPrototype"
            }
        ]
    },
    {
        title: "Button Masher",
        date: "December 2020 - May 2021",
        type: "Personal Project - Software",
        shortDescription: "Android Button Masher game written in Java",
        tasks: [
            "Utilized Firebase Firestore to store user data",
            "Experimented with Android Preferences Library and ViewModels"
        ],
        techStack: ['Java', 'Android Studio', 'Firebase Firestore'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/Android-ButtonMasher"
            }
        ]
    },
    {
        title: "Claw Retrieval System",
        date: "February 2021 - March 2021",
        type: "UBC APSC 101 - Hardware",
        shortDescription: "Claw manufactured out of household items to pick up multifarious items",
        tasks: [
            "Coded a state machine written in C to efficiently handle claw opening and closing"
        ],
        techStack: ['C', 'Arduino Uno', 'Arduino IDE'],
        url: [
            {
                type: "GitHub",
                href: "https://github.com/Haxrox/ClawRetrievalSystem"
            }
        ]
    }
];

export default PROJECTS;