CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  /* Describe your table here.*/
  id int NOT NULL,
  user_name varchar(255),
  PRIMARY KEY(id)
);
CREATE TABLE rooms (
  /* Describe your table here.*/
  id int NOT NULL,
  room_name varchar(255),
  PRIMARY KEY(id)
);
CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL,
  content varchar(255),
  user_name varchar(255) NOT NULL REFERENCES users(user_name),
  room_name varchar(255) NOT NULL REFERENCES rooms(room_name),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

