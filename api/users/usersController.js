const knex = require('../db.js');

const fetchUsers = (req, res) => {
  knex('users')
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
};
const createUser = (req, res) => {
  const { name } = req.body;

  knex('users')
    .insert({ name })
    .then(user => req.status(201).json(user))
    .catch(err => res.status(500).json(err));
};

const fetchUserById = (req, res) => {
  const { id } = req.params;

  knex('users')
    .where('id', id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json(err));
};

const deleteUserById = (req, res) => {
  const { id } = req.params;

  knex('users')
    .where('id', id)
    .del()
    .then(delUser => res.json(delUser))
    .catch(err => res.status(404).json(err));
};

module.exports = {
  fetchUsers,
  createUser,
  fetchUserById,
  deleteUserById,
};
