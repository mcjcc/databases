CREATE DATABASE chat;

USE chat;
/* Create other tables and define schemas for them here! */
CREATE TABLE users (
id INT NOT NULL,
username VARCHAR(20) NOT NULL,

PRIMARY KEY (id)

);

CREATE TABLE messages (
  /* Describe your table here.*/
  -- column_name column_data_type [additonal info] ,
  -- PRIMARY KEY (<column_name>)
  id INT NOT NULL,
  message_text TEXT NOT NULL,
  room_name VARCHAR(20) NOT NULL DEFAULT 'Lobby',
  users_id  INT,

  FOREIGN KEY (users_id) REFERENCES users(id),
  PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

