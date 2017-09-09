var basic = require("./BasicCard");
var questions = require("./questions.json");
var inquirer = require('inquirer');
var i = 0;

if(process.argv[2] === "cloze") {
  clozeGame();
}

function clozeGame() {
  var askQuestion = new ClozeCard(questions.ask[i].text, questions.ask[i].cloze);

  inquirer.prompt([
    {
      name: "answer",
      message: askQuestion.partial
    }
  ]).then(function (answers) {
    if(answers.answer === askQuestion.cloze) {
      console.log("Correct!");
      console.log("");
    } else {
      console.log("Incorrect! " + questions.ask[i].text);
      console.log("");
    }
    if(i < questions.ask.length - 1) {
      i+=1;
      clozeGame();
    }
  });
}

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = this.text.replace(this.cloze, ". . .");
  this.fullText = this.text;
  if(this.partial === this.text) {
    console.log("Please enter a valid cloze.")
  }
}

module.exports = clozeGame;
