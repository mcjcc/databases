var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.dbConnection.query(queryString, function(error, results, fields) {
        // do something with results
        console.log(results);
        callback(results);
      });

    }, // a function which produces all the messages
    
    post: function (messageText, roomName, username) {

      db.dbConnection.query(`SELECT id FROM USERS where username="${username}"`, function(error, results, fields) {
                
        var queryString = 'INSERT INTO messages (message_text, room_name, users_id) VALUES (?, ?, ?)';
        var queryArgs = [messageText, roomName, results[0].id];

        db.dbConnection.query(queryString, queryArgs, function(error, results, fields) {
        });
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {      
      db.dbConnection.query(`INSERT INTO users (username) VALUES ("${user}")`);      
    }
  }
};

// models will read and write to the db
