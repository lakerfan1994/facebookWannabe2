DROP DATABASE IF EXISTS fbwannabe_db;

CREATE DATABASE fbwannabe_db;

\c fbwannabe_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    age INT,
    img_url VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users (id) ON DELETE CASCADE,
    body VARCHAR
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts (id) ON DELETE CASCADE,
    commenter_id INT REFERENCES users (id) ON DELETE CASCADE,
    body VARCHAR
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users (id) ON DELETE CASCADE,
    post_id INT REFERENCES posts (id) ON DELETE CASCADE
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album_name VARCHAR,
    albumOwner_id INT REFERENCES users (id) ON DELETE CASCADE 
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums (id) ON DELETE CASCADE,
    picture_url VARCHAR
);

INSERT INTO users(firstname, lastname, age, img_url)
    VALUES('Ruben', 'Garcia', 34, 'https://randomuser.me/api/portraits/men/66.jpg'),
          ('Kerttu', 'Hanka', 28, 'https://randomuser.me/api/portraits/women/21.jpg'),
          ('Younes', 'Haakonsen', 27, 'https://randomuser.me/api/portraits/men/44.jpg'),
          ('Anna', 'Jones', 45, 'https://randomuser.me/api/portraits/women/62.jpg'),
          ('Angela', 'Castillo', 39, 'https://randomuser.me/api/portraits/women/64.jpg'),
          ('Zachary', 'Kowalski', 37, 'https://randomuser.me/api/portraits/men/68.jpg'),
          ('Leon', 'Bryne', 28, 'https://randomuser.me/api/portraits/men/94.jpg');

INSERT INTO posts(poster_id, body)
    VALUES(1, 'I really like this new recipe I created, it reflects my love for pasta!'),
          (4, 'I have a really bad allergy to shrimp, but I love cooking it! Seafood is the best'),
          (2, 'I am grateful to my parents for teaching me how to make the family dish'),
          (3, 'Ugh, pastries are so hard to make on my own, my wife makes them so much easier'),
          (5, 'Me gusta cocinando carne'),
          (4, 'Oof I broke out with a really bad rash, time to go to the hospital again LOL'),
          (7, 'I have a secret sauce I put on the meat to make it pop'),
          (1, 'Alot of new pasta dishes use too much cheese, I have to stay healthy!'),
          (4, 'Hospital gave me some allergy medication, I think the doctor there is fed up with me...'),
          (3, 'I hope nutmeg works with this cookie recipe'),
          (5, 'Sancocho es difficil cocinar... ugh'),
          (6, 'I think I have some leftover lasagna from last night, ITS LIT'),
          (7, 'My chicken recipe is the best!');
          

INSERT INTO likes(liker_id, post_id)
    VALUES(1, 3), (1, 6), (1, 7), (1, 8),
          (2, 1), (2, 2), (2, 6),
          (3, 9), (3, 13),
          (4, 10),
          (5, 3), (5, 4),
          (6, 1), (6, 2), (6, 12), (6, 13),
          (7, 9), (7, 10);

INSERT INTO comments(post_id, commenter_id, body)
    VALUES (1,2, 'wOW'), (4,5,'OdddK');

INSERT INTO albums(album_name, albumOwner_id)
    VALUES('basketball', 1), ('sports', 2);

INSERT INTO pictures(album_id, picture_url)
    VALUES(1, 'http://www.espn.com'), (2, 'http://www.nba.com');
