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


-- Ruben 1
-- kerttu 2
-- Younes 3
-- Anna 4
-- Angela 5
-- Zachary 6
-- Leon 7

INSERT INTO posts(poster_id, body)
    VALUES (2, 'I am grateful to my parents for teaching me how to make the family dish'),
          (3, 'Ugh, pastries are so hard to make on my own, my wife makes them so much easier'),
          (5, 'Me gusta cocinando carne'),
          (4, 'Oof I broke out with a really bad rash, time to go to the hospital again LOL'),
          (7, 'I have a secret sauce I put on the meat to make it pop'),
          (1, 'Alot of new pasta dishes use too much cheese, I have to stay healthy!'),
          (4, 'Hospital gave me some allergy medication, I think the doctor there is fed up with me...'),
          (7, 'My chicken recipe is the best!'),
          (3, 'I hope nutmeg works with this cookie recipe'),
          (4, 'Oof I broke out with a really bad rash, time to go to the hospital again LOL'),
          (5, 'Sancocho es difficil cocinar... ugh'),
          (6, 'I think I have some leftover lasagna from last night, ITS LIT'),
          (4, 'I have a really bad allergy to shrimp, but I love cooking it! Seafood is the best'),
          (1, 'I really like this new recipe I created, it reflects my love for pasta!');
          
-- Ruben 1
-- kerttu 2
-- Younes 3
-- Anna 4
-- Angela 5
-- Zachary 6
-- Leon 7

INSERT INTO likes(liker_id, post_id)
    VALUES(1, 3), (1, 6), (1, 7), (1, 8),
          (2, 1), (2, 2), (2, 6),
          (3, 9), (3, 13),
          (4, 10),
          (5, 3), (5, 4),
          (6, 1), (6, 2), (6, 12), (6, 13),
          (7, 9), (7, 10);

-- Ruben 1
-- kerttu 2
-- Younes 3
-- Anna 4
-- Angela 5
-- Zachary 6
-- Leon 7

INSERT INTO comments(post_id, commenter_id, body)
    VALUES (1, 3, 'Care to share the recipe???'),
           (1, 2, 'Sorry it is a protected family secret...'),
           (1, 3, 'That just makes me want it more!'),

           (2, 7, 'Just look on youtube dude, there is like a billion tutorials'),
           (2, 3, 'I have tried those, it is not the same as the way she makes them'),

           (3, 4, 'Does shrimp count as meat'),
           (3, 6, 'Shrimp is seafood Anna...'),
           (3, 4, '... I knew that'),

           (5, 1, 'I think I have found out your secret sauce recipe'),
           (5, 7, 'I dont believe you Ruben'),

           (6, 2, 'I have a couple of recipes that use a cheese substitute, i can send them to you'),
           (6, 1, 'Thanks!'),

           (9, 5, 'I love cookies, but I dont know how to bake them right'),
           (9, 7, 'Chocolate chip is the bomb'),

           (11, 3, 'What is Sancocho?'),
           (11, 5, 'Sancocho is a dish made with a bunch of different meats and veggies, es muy bueno!'),

           (12, 5, 'Does it have any meat?'),
           (12, 6, 'Yeah I put a load of ground beef in it'),
           (12, 5, 'Sounds delicious'),

           (13, 2, 'I am really concerned for your wellbeing, how allergic are you?'),
           (13, 4, 'Ahhh dont worry too much about it LOL'),
           (13, 5, 'You really should not be eating it!!'),

           (14, 2, 'I really like to eat pasta with alot of sauce, what does this recipe use?'), 
           (14, 4, 'Does it have shrimp in it? I love shrimp'),
           (14, 6, 'Anna did you not say you were allergic LOL'),
           (14, 4, 'Ugh leave me alone Zach i make my own decisions'),
           (14, 1, 'Please refrain from fighting on my pasta post smh');


INSERT INTO albums(album_name, albumOwner_id)
    VALUES('Pasta lover', 1),
          ('Carnivore', 1),
          ('Homemade', 2),
          ('Rice Dishes', 2),
          ('Vegan Dinner', 3),
          ('Vegan Dessert', 3),
          ('Chicken', 4),
          ('Chicken Apps', 4),
          ('Mediterainian Lunch', 5),
          ('Mediterainian Dinner', 5),
          ('Chinese Apps', 6),
          ('Japanese Apps', 6),
          ('Seafood Pasta', 7),
          ('Seafood Soup', 7);

INSERT INTO pictures(album_id, picture_url)
    VALUES(1, 'https://media-public.canva.com/MACoEBYEqIA/1/thumbnail_large.jpg'), (1, 'https://media-public.canva.com/MAC5J15iTgg/1/thumbnail_large-1.jpg');
