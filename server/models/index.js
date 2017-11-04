var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    
    post: function (messageText, roomName, username) {
      console.log('inside messages model post');
      db.dbConnection.query(`SELECT id FROM USERS where username="${username}"`, function(error, results, fields) {
                
        var queryString = 'INSERT INTO messages (message_text, room_name, users_id) VALUES ?';
        var queryArgs = [messageText, roomName, 15];
        db.dbConnection.query(queryString, queryArgs, function(error, results, fields) {

          console.log('inserted into messages!');
        });
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      console.log('inside users model post! user: ', user);      
      db.dbConnection.query(`INSERT INTO users (username) VALUES ("${user}")`);      
    }
  }
};

// models will read and write to the db
