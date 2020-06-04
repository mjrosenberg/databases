var models = require('../models');

module.exports = {
  get: function (req, res) {
    //models.readAll
    models.messages.getAll((err, data) =>{
      //getAll should get all the messages from the db, accepts a callback
      if (err) {
        res.status(404).send('route not found');
        //sending an error back to the router
      } else {
        res.json(data);
      }
    }
    );
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var message = {
      content: req.json.message,
      username: req.json.username,
      roomname: req.json.roomname
    };
    models.messages.create(message, (err, data) =>{
      //getAll should get all the messages from the db, accepts a callback
      if (err) {
        res.status(404).send('route not found');
        //sending an error back to the router
      } else {
        res.send('posted correctly');
      }

    });
  } // a function which handles posting a message to the database
};
