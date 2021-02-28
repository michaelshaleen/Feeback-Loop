const { Router } = require('express');
const express = require('express');
const feedbackRouter = express.Router();
const pool = require('../modules/pool');


feedbackRouter.post('/', (req, res) => {
  const feedback = req.body;

  console.log("ROUTER POST", feedback)
  let sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                  VALUES ($1, $2, $3, $4);`;


  pool.query(sqlQuery,[
    Number(feedback.feeling),
    Number(feedback.understanding),
    Number(feedback.support),
    feedback.comments
  ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    })

})

module.exports = feedbackRouter;
