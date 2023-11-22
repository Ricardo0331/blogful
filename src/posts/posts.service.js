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

function update(postId, updatedPost) {
  return knex("posts")
    .where({ post_id: postId })
    .update(updatedPost)
    .returning("*")
    .then((rows) => rows[0]);
}

function destroy(postId) {
  return knex("posts")
    .where({ post_id: postId })
    .del();
}

module.exports = {
  create,
  read,
  update,
  delete: destroy,
};
