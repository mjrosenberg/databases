var models = require('../models');

module.exports = {
  get: function (req, res) {
    //models.readAll
    models.rooms.getAll((err, data) =>{
      //getAll should get all the messages from the db, accepts a callback
      if (err) {
        res.status(404).send('route not found');
        //sending an error back to the router
      } else {
        res.json(data);
      }
    }
    );
  },
  post: function (req, res) {
    models.rooms.create(req.body.roomname, (err) =>{
      //getAll should get all the messages from the db, accepts a callback
      if (err) {
        res.status(404).send('route not found');
        //sending an error back to the router
      } else {
        res.send('posted correctly');
      }

    });
  }
};