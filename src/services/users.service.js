/* eslint-disable no-unused-vars */
const db = require('../config/db.config')

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO users (firstName, lastName, emailId, password) VALUES (?, ?, ?, ?)`,
    [data.firstName, data.lastName, data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
  
      const insertedId = results.insertId; // Get the ID of the newly inserted user
  
      // Now, retrieve the inserted user record using the insertId
      db.query(
        `SELECT id,firstName,lastName,emailId FROM users WHERE id = ?`,
        [insertedId],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
  
          return callback(null, results[0]); // Return the inserted user record
        }
      );
    }
  );
  
}
exports.login = (data, callback) => {
  db.query(
    `SELECT id FROM users WHERE emailId = ? AND password = ?`,
    [data.emailId, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error)
      }
      if (results.length > 0) {
        return callback(null, 'Login success')
      } else {
        return callback('Invalid credentials')
      }
    }
  )
}
