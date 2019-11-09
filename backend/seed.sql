DROP DATABASE IF EXISTS fbwannabe_db;

CREATE DATABASE fbwannabe_db;

\c fbwannabe_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR,
    lastname VARCHAR,
    age INT
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

INSERT INTO users(firstname, lastname, age)
    VALUES('Lebron', 'James', 35), ('Anthony','Davis', 26),
    ('Rajon', 'Rondo', 31), ('God', 'Caruso', 1000), ('Chuck', 'Okonkwo', 25);

    INSERT INTO posts(body, poster_id)
    VALUES('I am so bored of regular season' ,1), ('Im re-signing', 2),
     ('I am a trash basketball player', 3), ('WIN', 4), ('Statistics are key', 5),
     ('Lake show for life', 5), ('Nba basketball is amazing', 5);

     INSERT INTO likes(liker_id, post_id)
    VALUES(1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7),(2,2), (3, 1), (3, 2),
    (4, 2), (4, 3), (4, 5), (4, 6), (4, 7), (5, 1), (5, 2), (5, 3);

    INSERT INTO comments(post_id, commenter_id, body)
    VALUES (1,2, 'wOW'), (4,5,'OdddK');

    INSERT INTO albums(album_name, albumOwner_id)
    VALUES('basketball', 1), ('sports', 2);

    INSERT INTO pictures(album_id, picture_url)
    VALUES(1, 'http://www.espn.com'), (2, 'http://www.nba.com');
