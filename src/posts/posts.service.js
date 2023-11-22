const knex = require("../db/connection");

function create(post) {
  return knex("posts")
    .insert(post)
    .returning("*")
    .then((rows) => rows[0]);
}


function read(postId) {
  return knex("posts").select("*").where({ post_id: postId }).first();
}

function update(updatedPost) {
  //your solution here
}

function destroy(postId) {
  //your solution here
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
