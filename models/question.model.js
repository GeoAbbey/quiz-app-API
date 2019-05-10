let questions = require("../data/questions.json");
const helper = require("../helpers/helper.js");

function getQuestions() {
  return new Promise((resolve, reject) => {
    if (questions.length === 0) {
      reject({
        message: "no questions available",
        status: 202
      });
    }

    resolve(questions);
  });
}

function getQuestion(id) {
  return new Promise((resolve, reject) => {
    helper
      .findByID(questions, id)
      .then(question => resolve(question))
      .catch(err => reject(err));
  });
}

module.exports = {
  getQuestions,
  getQuestion
};
