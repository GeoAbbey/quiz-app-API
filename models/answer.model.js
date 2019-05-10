let answers = require("../data/answers.json");
const filename = "./data/answers.json";
const helper = require("../helpers/helper.js");

function getAnswers() {
  return new Promise((resolve, reject) => {
    if (answers.length === 0) {
      reject({
        message: "No answers available",
        status: 202
      });
    }

    resolve(answers);
  });
}

function getAnswer(id) {
  return new Promise((resolve, reject) => {
    helper
      .findAnswerByID(answers, id)
      .then(answer => resolve(answer))
      .catch(err => reject(err));
  });
}

function createAnswer(newAnswer) {
  return new Promise((resolve, reject) => {
    const id = { id: helper.getNewId(answers) };
    const date = {
      createdAt: helper.newDate()
    };
    newAnswer = { ...id, ...date, ...newAnswer };
    answers.push(newAnswer);
    helper.writeJSONFile(filename, answers);
    resolve(newAnswer);
  });
}

module.exports = {
  createAnswer,
  getAnswers,
  getAnswer
};
