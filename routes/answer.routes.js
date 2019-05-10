const express = require("express");
const router = express.Router();
const answer = require("../models/answer.model");
const m = require("../helpers/middlewares");

// Get all answers
router.get("/", async (req, res) => {
  await answer
    .getAnswers()
    .then(answers => res.json(answers))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// Get an answer by id
router.get("/:id", m.mustBeInteger, async (req, res) => {
  const id = req.params.id;
  await answer
    .getAnswer(id)
    .then(answer => res.json(answer))
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// Create a new answer
router.post("/", m.checkAnswerFields, async (req, res) => {
  await answer
    .createAnswer(req.body)
    .then(answer =>
      res.status(201).json({
        message: `The answer #${answer.id} has been created`,
        data: answer
      })
    )
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;
