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
    VALUES(1, ''),
          (1, ''),
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')
          (1, '')

INSERT INTO likes(liker_id, post_id)
    VALUES();

INSERT INTO comments(post_id, commenter_id, body)
    VALUES (1,2, 'wOW'), (4,5,'OdddK');

INSERT INTO albums(album_name, albumOwner_id)
    VALUES('basketball', 1), ('sports', 2);

INSERT INTO pictures(album_id, picture_url)
    VALUES(1, 'http://www.espn.com'), (2, 'http://www.nba.com');
