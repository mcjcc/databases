var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('msgs req.body', req.body);
      var username = req.body.username;
      var messageText = req.body.message;
      var roomName = req.body.roomname;
      res.send(models.messages.post(messageText, roomName, username));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {   
      console.log('users req.body', req.body);
      var username = req.body.username;      
      res.send(models.users.post(username));
    }
  }, 

  home: {
    get: function(req, res) {
      // res.send('hello');
    }
  }
};

// requests and responses to the server