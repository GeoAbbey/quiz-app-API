const express = require("express");
const router = express.Router();
const question = require("../models/question.model");
const m = require("../helpers/middlewares");

// Get all questions
router.get("/", async (req, res) => {
  await question
    .getQuestions()
    .then(questions => res.json(questions))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// Get a question by id
router.get("/:id", m.mustBeInteger, async (req, res) => {
  const id = req.params.id;
  await question
    .getQuestion(id)
    .then(question => res.json(question))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

module.exports = router;
