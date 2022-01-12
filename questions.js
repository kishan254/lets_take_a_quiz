// qs
// title
// choices -- array
// correct choice
// object
// const qs = {
//     title: 'how are ya?',
//     choices: [
//         'gooda', 'bad'
//     ],
//     answer: 'good'
// }

const questions = [
    {
        title: "how are you today?",
        choices: [
            {
                title: "GOOD",
                isAnswer: true,
            },
            {
                title: "BAD",
                isAnswer: false,
            },
        ],
        if (isAnswer = true) {
            greeting = "Correct";}
    },

    {
        title: "What is 3 multiplied by 3",
        choices: [
            {
                title: "9",
                isAnswer: true,
                
            },
            
            {
                title: "6",
                isAnswer: false,
            },
            {
                title: "I don't know",
                isAnswer: false,
            },
        ],
    },

    {
        title: "How confident are you for your test?",
        choices: [
            {
                title: "Confident",
                isAnswer: true,
            },
            {
                title: "Not Confident",
                isAnswer: false,
            },
        ],
    },
];
