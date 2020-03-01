-- CREATE DATABASE volunteerhood;
USE volunteerhood;

-- CREATE TABLE skills(
--     name VARCHAR(50) NOT NULL PRIMARY KEY
-- );

-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     email VARCHAR(50)  NOT NULL UNIQUE,
--     password VARCHAR(20) NOT NULL,
--     phone INT NOT NULL,
--     radius FLOAT,
--     ranking FLOAT,
--     counter INT,
--     image VARCHAR(100)
-- );

-- CREATE TABLE help_requests (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     userReq INT NOT NULL,
--     userHelper INT,
--     status ENUM ('New', 'In process', 'Help is on the way!'),
--     description VARCHAR(255) NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     date DATE,
--     name VARCHAR(50),
--     FOREIGN KEY (userReq) REFERENCES user(id),
--     FOREIGN KEY (userHelper) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- );

-- CREATE TABLE user_skills (
--     user INT NOT NULL,
--     skill VARCHAR(50) NOT NULL,
--     FOREIGN KEY (user) REFERENCES user(id),
--     FOREIGN KEY (skill) REFERENCES skills(name)
-- );

-- INSERT INTO skills VALUES('Carpentry' );
-- INSERT INTO skills VALUES('Electricity' );
-- INSERT INTO skills VALUES('Design' );
-- INSERT INTO skills VALUES('Translation' );
-- INSERT INTO skills VALUES('Cooking' );
-- INSERT INTO skills VALUES('Financial' );
-- INSERT INTO skills VALUES('Plumbing' );
-- INSERT INTO skills VALUES('Writing' );
-- INSERT INTO skills VALUES('Programming' );
-- INSERT INTO skills VALUES('Shopping' );

-- DROP TABLE user;
-- DROP TABLE skills;
-- DROP TABLE help_requests;
-- DROP TABLE user_skills;
-- DROP TABLE help_requests_helpers;

-- CREATE TABLE help_requests_helpers(
--     help_request_id INT NOT NULL,
--     helper_id INT NOT NULL,
--     name VARCHAR(50),
--     FOREIGN KEY (help_request_id) REFERENCES help_requests(id),
--     FOREIGN KEY (helper_id) REFERENCES user(id)
-- )

-- ALTER TABLE help_requests_helpers

-- ALTER TABLE help_requests
-- ADD lat FLOAT
-- ADD lon FLOAT;

-- INSERT INTO help_requests VALUES(null,10,null,'open','location2','Design',null,"name",32.1668265,34.8631278)
-- ADD name VARCHAR(50)

-- DROP COLUMN helperName

-- TRUNCATE TABLE help_requests

-- INSERT INTO user VALUES(null, 'Victor Gibson','victorgibson@gmail.com', '123', '0169774304', '0', '4.5', '3', 'https://randomuser.me/api/portraits/men/58.jpg');
-- INSERT INTO user VALUES(null, 'Lilian Wells','lilianwells@gmail.com', '123', '0433480296', '0', '4.8', '5', 'https://randomuser.me/api/portraits/women/33.jpg');
-- INSERT INTO user VALUES(null, 'Joaquin Guerrero','joaquinguerrero@gmail.com', '123', '643188355', '0', '4.6', '7', 'https://randomuser.me/api/portraits/men/88.jpg');
-- INSERT INTO user VALUES(null, 'Michelle Theunis','michelle@gmail.com', '123', '0039267578', '0', '4.7', '5', 'https://randomuser.me/api/portraits/women/86.jpg');

-- ALTER TABLE help_requests
-- ADD lat FLOAT;

-- ALTER TABLE help_requests
-- ADD lon FLOAT

