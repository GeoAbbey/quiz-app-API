function mustBeInteger(req, res, next) {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: "ID must be an integer" });
  } else {
    next();
  }
}

function checkQuestionFields(req, res, next) {
  const { question, options, correct_answer } = req.body;
  if (question && options && correct_answer) {
    next();
  } else if (!question) {
    res.status(400).json({ message: "question field is required" });
  } else if (!options) {
    res.status(400).json({ message: "options field is required" });
  } else if (!correct_answer) {
    res.status(400).json({ message: "correct answer field is required" });
  }
}
module.exports = {
  mustBeInteger,
  checkQuestionFields
};
