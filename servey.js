const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

const answers = {};


const servey = function () {
  // questions array index 
  let counter = 0;

  const askQuestion = function () {
    // ask one question at one time and save the answer to the object
    rl.question(`${questions[counter]}\n`, (answer) => {
      answers[counter] = answer;
      counter++;

      // if the question done
      if (counter === questions.length) {
        // close readline and console the result
        rl.close();
        // display profile
        console.log(`Your profile: \n
        ${answers[0]} likes ${answers[1]} while listening to ${answers[2]}.\n
        Your favorite meal is ${answers[3]}, and favorite thing to eat for meal is ${answers[4]}.\n
        Favorite sport is ${answers[5]}. \n
        Superpower is ${answers[6]}.
        `);
      } else {
        // not done, ask next question
        askQuestion();
      }
    });
  };

  // call askquestion function
  askQuestion();
};

servey();
