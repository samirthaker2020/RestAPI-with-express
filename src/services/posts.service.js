/* eslint-disable no-unused-vars */
const db = require('../config/db.config');

exports.addPost = (data, callback) => {
  db.query(
    `INSERT INTO posts (description, imagePath, datetimeCreated, addedByUserId)
     VALUES (?, ?, ?, ?)`,
    [data.description, data.imagePath, new Date(), data.addedByUserId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }

      const insertedId = results.insertId;

      db.query(
        'SELECT * FROM posts WHERE id = ?',
        [insertedId],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results[0]);
        }
      );
    }
  );
};

exports.getAllPosts = (data, callback) => {
  db.query(
    `SELECT p.id AS postId, p.description, p.datetimeCreated, 
    p.likeCount, p.dislikeCount, p.addedByUserId, u.firstName, u.lastName 
    FROM posts AS p INNER JOIN users AS u ON p.addedByUserId = u.id`,
    [],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.addPostComment = (data, callback) => {
  db.query(
    'INSERT INTO comments (addedByPostId, comment, datetimeCreated, addedByUserId) VALUES (?, ?, ?, ?)',
    [data.postId, data.comment, new Date(), data.addedByUserId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }

      const insertedId = results.insertId; // Get the ID of the newly inserted comment

      // Now, retrieve the inserted comment using the insertId
      db.query(
        'SELECT * FROM comments WHERE id = ?',
        [insertedId],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }

          return callback(null, results[0]); // Return the inserted comment record
        }
      );
    }
  );
};
exports.getPostAllComments = (data, callback) => {
  db.query(
    `SELECT c.comment, c.datetimeCreated, c.addedByUserId, u.firstName, u.lastName
    FROM comments AS c INNER JOIN users AS u ON c.addedByUserId = u.id
    WHERE c.addedByPostId = ?`,
    [data.postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
exports.likePost = (data, callback) => {
  db.query(
    `UPDATE  posts
    SET 
    likeCount = likeCount + 1
    WHERE 
    id = ?`,
    [data.postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows === 1) {
        return callback(null, 'Like Successful');
      } else {
        return callback(new Error('Invalid post'));
      }
    }
  );
};

exports.dislikePost = (data, callback) => {
  db.query(
    `UPDATE  posts
    SET 
    dislikeCount = dislikeCount + 1
    WHERE 
    id = ?`,
    [data.postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows === 1) {
        return callback(null, 'Dislike Successful');
      } else {
        return callback(new Error('Invalid post'));
      }
    }
  );
};
exports.deletePost = (data, callback) => {
  db.query(
    `DELETE FROM posts 
     WHERE id = ?`,
    [data.postId],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.affectedRows === 1) {
        // Return the deleted post ID as confirmation
        return callback(null, { deletedPostId: data });
      } else {
        return callback(new Error('Invalid post'));
      }
    }
  );
};
