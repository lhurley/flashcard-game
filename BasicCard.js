var cloze = require("./ClozeCard");
var questions = require("./questions.json");
var inquirer = require('inquirer');
var i = 0;

if(process.argv[2] === "basic") {
  basicGame();
}

function basicGame() {

  var askQuestion = new BasicCard(questions.ask[i].front, questions.ask[i].back);

  inquirer.prompt([
    {
      name: "answer",
      message: askQuestion.front
    }
  ]).then(function (answers) {
    if(answers.answer === askQuestion.back) {
      console.log("Correct!");
      console.log("");
    } else {
      console.log("Incorrect! " + questions.ask[i].text);
      console.log("");
    }
    if(i < questions.ask.length - 1) {
      i+=1;
      basicGame();
    }
  });
}

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

module.exports = {
  basicGame
};
