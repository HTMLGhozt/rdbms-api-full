const { fetchUsers, createUser, fetchUserById, deleteUserById } = require('./users/usersController.js');
const { fetchPosts, createPost } = require('./posts/postsController.js');

module.exports = (app) => {
  app
    .route('/users')
    .get(fetchUsers)
    .post(createUser);

  app
    .route('/users/:id')
    .get(fetchUserById)
    .delete(deleteUserById);

  app
    .route('/posts')
    .get(fetchPosts)
    .post(createPost);
};
