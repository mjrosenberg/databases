var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connect();
    db.connection.query('SELECT * FROM messages', (err, data) => {
      //idk about syntax here or how to get it in the right format
      //maybe need to implement functionality where it can filter the messages based off the room, but we can add that later
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    //should accept an object with the properties needed to populate the table
    //make sure we figure out what info the client is sending and use that info
    //INSERT INTO messages(content,user_id,room_id) VALUES (message.content, message.username, message.roomname);
    db.connect();
    db.connection.query(`INSERT INTO messages(content,user_id,room_id) VALUES (${message.content}, ${message.username}, ${message.roomname})`, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  } // a function which can be used to insert a message into the database
};
