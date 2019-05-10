function mustBeInteger(req, res, next) {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    res.status(400).json({ message: "ID must be an integer" });
  } else {
    next();
  }
}

function checkAnswerFields(req, res, next) {
  const { name, email, solved_questions, percentage_score } = req.body;
  if (name && email && solved_questions && percentage_score) {
    next();
  } else if (!name) {
    res.status(400).json({ message: "name field is required" });
  } else if (!email) {
    res.status(400).json({ message: "email field is required" });
  } else if (!solved_questions) {
    res.status(400).json({ message: "solved_questions field is required" });
  } else if (!percentage_score) {
    res.status(400).json({ message: "percentage_score field is required" });
  }
}
module.exports = {
  mustBeInteger,
  checkAnswerFields
};
