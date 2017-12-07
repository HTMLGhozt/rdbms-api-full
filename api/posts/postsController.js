const knex = require('../db.js');

const fetchPosts = (req, res) => {
  knex('posts')
    .then(posts => res.json(posts))
    .catch(err => res.status(500).json(err));
};
const createPost = (req, res) => {
  const { userId, text } = req.body;
  knex('posts')
    .insert({ userId, text })
    .then(user => req.status(201).json(user))
    .catch(err => res.status(422).json(err));
};

module.exports = {
  fetchPosts,
  createPost,
};
