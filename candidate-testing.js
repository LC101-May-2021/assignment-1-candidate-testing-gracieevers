const input = require('readline-sync');

// 2: modify your quiz app to ask 5 questions //

// 1.1a: Define candidateName // 
let candidateName = "";
// 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space? ", "2) True of false: 5 kilometer == 5000 meters? ", "3) (5 + 3) / 2 * 10 = ? ", "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  //  1.1b: Ask for candidate's name //
  canidateName = input.question("What's your name? ")

}

function askQuestion() {
  // 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    let answers = input.question(questions[i]);
    candidateAnswers.push(answers);
  }
}


function gradeQuiz(candidateAnswers) {

  // 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer == correctAnswer){
  console.log("Correct.");
} else {
  console.log("Incorrect. Try again.");
}
*/
    let correct = 0;
    let numOfQuestions = questions.length;
    for (let i = 0; i < candidateAnswers.length; i++) {
        let answer = candidateAnswers[i].toLowerCase();
        let correctAnswer = correctAnswers[i].toLowerCase();
        console.log(`Your Answer: ${answer}`);
        console.log(`Correct Answer: ${correctAnswer}`);

        if (answer == correctAnswer){
            correct = correct + 1;
        }

        // console.log(`Your Answer: ${candidateAnswers[i]} Correct Answer: ${correctAnswers[i]}`)
    }

    let grade = (correct) / (numOfQuestions) * 100;
    console.log(`${grade}%`);

    return grade;
}

function runProgram() {
  askForName();
  // 1.1c: Ask for candidate's name //
  console.log(`Hello, ${canidateName}.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};