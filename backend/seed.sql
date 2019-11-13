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
    picture_url VARCHAR,
    body VARCHAR
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
          ('Mediterranean Lunch', 5),
          ('Mediterranean Dinner', 5),
          ('Chinese Apps', 6),
          ('Japanese Apps', 6),
          ('Seafood Pasta', 7),
          ('Seafood Soup', 7);

INSERT INTO pictures(album_id, picture_url, body)
    VALUES(1, 'https://media-public.canva.com/MACoEBYEqIA/1/thumbnail_large.jpg', 
    'Ingredients
    Ravioli Dough:
2 cups all-purpose flour
1 pinch salt
1 teaspoon olive oil
2 eggs
1 1/2 tablespoons water
Ravioli Filling:
1 (8 ounce) container ricotta cheese
1 (4 ounce) package cream cheese, softened
1/2 cup shredded mozzarella cheese
1/2 cup provolone cheese, shredded
1 egg
 
1 1/2 teaspoons dried parsley
Pesto-Alfredo Cream Sauce:
2 tablespoons olive oil
2 cloves garlic, crushed
3 tablespoons prepared basil pesto sauce
2 cups heavy cream
1/4 cup grated Parmesan cheese
1 (24 ounce) jar marinara sauce
Egg Wash:
1 egg
1 tablespoon water
Directions
Mound the flour and salt together on a work surface and form a well. Beat the teaspoon of olive oil, 2 eggs, and water in a bowl. Pour half the egg mixture into the well. Begin mixing the egg with the flour with one hand; use your other hand to keep the flour mound steady. Add the remaining egg mixture and knead to form a dough.
Knead the dough until smooth, 8 to 10 minutes; add more flour if the dough is too sticky. Form the dough into a ball and wrap tightly with plastic. Refrigerate for 1 hour.
While the dough is resting, prepare the ravioli filling. Combine the ricotta cheese, cream cheese, mozzarella cheese, provolone cheese, egg, and parsley and mix well. Set the filling aside.
Heat 2 tablespoons of olive oil in a skillet over medium heat. Add the crushed garlic and pesto sauce and cook for one minute. Pour in the heavy cream, raise the heat to high, and bring the sauce to a boil. Reduce the heat and simmer for 5 minutes. Add the Parmesan cheese and stir until the cheese melts. Remove the pan from the heat and keep warm.
Meanwhile, in a separate saucepan, warm the marinara sauce over medium-low heat.
Preheat an oven to 375 degrees F (190 degrees C). Beat the egg with the tablespoon of water to make the egg wash.
Roll out the pasta dough into thin sheets no thicker than a nickel. To assemble the ravioli, brush the egg wash over a sheet of pasta. Drop the filling mixture on the dough by teaspoonfuls about one inch apart. Cover the filling with the top sheet of pasta, pressing out the air from around each portion of filling. Press firmly around the filling to seal. Cut into individual ravioli with a knife or pizza cutter. Seal the edges.
Fill a large pot with lightly salted water and bring to a rolling boil over high heat. Stir in the ravioli, and return to a boil. Cook uncovered, stirring occasionally, until the ravioli float to the top and the filling is hot, 4 to 8 minutes. Drain well.
Grease a baking sheet. Place the cooked ravioli on the sheet pan and bake in the preheated oven until brown, about 4 minutes.
To serve the ravioli, divide them among four warmed serving bowls. Drizzle the marinara sauce over the ravioli and then top with the cream sauce.'),

(1, 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg', 'Ingredients
1 1/2 pounds T-bone steak , about 1-inch (2.5 cm) thick*
2 tablespoons olive oil**
1 teaspoon coarse salt, or to taste
1 teaspoon black pepper, freshly ground, or to taste
2 cloves garlic, minced (2 teaspoons)
1 tablespoon unsalted butter
fresh rosemary, optional
Instructions
Remove the steak from refrigerator 30-60 minutes before cooking, so they can reach room temperature for even cooking.
Position the oven rack in the middle and preheat oven to 425°F (218°C).
Place a large cast-iron skillet over high heat and allow to heat for 5 minutes until very hot. (You can also place in the preheated oven for 15 minutes.)
Remove any bits of bone and pat dry the steak with paper towels to remove excess moisture that could interfere with searing.
Rub on all sides with 1 tablespoon of olive oil.
Season both sides with salt and pepper.
Add the remaining 1 tablespoon oil to the pan and swirl to coat.
Carefully place the steak in the pan using kitchen tongs, laying them away from you to avoid splatter.
Sear the first side for 2 minutes.
Flip using kitchen tongs and sear the other side for 2 minutes.
Add garlic, butter and rosemary and then immediately transfer the pan to the oven.
Bake for 2-3 minutes without flipping for medium-rare steaks (130°F/54°C), checking doneness by inserting an instant-read meat thermometer (see recipe notes for other donenesses***).
Remove steak to a plate or cutting board covered with aluminum foil to rest for 5 minutes so the juices can retreat back into the meat.
To serve, cut the meat away from the bone and slice across the grain into strips.'),

(2, 'https://cdn.pixabay.com/photo/2019/08/16/16/18/pancakes-4410606_1280.jpg', 'Ingredients
1 cup all-purpose flour
2 eggs
1/2 cup milk
 
1/2 cup water
1/4 teaspoon salt
2 tablespoons butter, melted
Directions
In a large mixing bowl, whisk together the flour and the eggs. Gradually add in the milk and water, stirring to combine. Add the salt and butter; beat until smooth.
Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crepe. Tilt the pan with a circular motion so that the batter coats the surface evenly.
Cook the crepe for about 2 minutes, until the bottom is light brown. Loosen with a spatula, turn and cook the other side. Serve hot.'),

(2, 'https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_1280.jpg', 'Ingredients
2 cups enriched white rice
4 cups water
2/3 cup chopped baby carrots
1/2 cup frozen green peas
 
2 tablespoons vegetable oil
2 eggs
soy sauce to taste
sesame oil, to taste (optional)
Directions
In a saucepan, combine rice and water. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes.
In a small saucepan, boil carrots in water about 3 to 5 minutes. Drop peas into boiling water, and drain.
Heat wok over high heat. Pour in oil, then stir in carrots and peas; cook about 30 seconds. Crack in eggs, stirring quickly to scramble eggs with vegetables. Stir in cooked rice. Shake in soy sauce, and toss rice to coat. Drizzle with sesame oil, and toss again.'),

(3, 'https://cdn.pixabay.com/photo/2015/02/15/17/14/potatoes-637370_1280.jpg', 'INGREDIENTS
6 Yukon gold potatoes, about 6 ounces each
4 tablespoons unsalted butter, melted
3 tablespoons olive oil
3 tablespoons chopped fresh parsley, plus more for garnish
Flaky sea salt, to taste.

1 Preheat the oven to 425ºF.
2 Slice the potatoes: Set a potato on a cutting board and place a chopstick on either side of the potato. With a sharp, thin knife, make deep vertical cuts 1/8-inch apart, but without cutting all the way through the potato. The chopsticks should keep you from accidentally cutting too deeply or going all the way through.
Place the potatoes with the cut side up in the baking dish, spaced a little apart so each one has some room. Fan the potatoes open slightly.
3 Season the potatoes: In a small bowl, combine the melted butter, oil, and parsley. Drizzle this over the potatoes and then use a pastry brush to spread the butter and oil mixture evenly and in between the slices of each potato. Sprinkle with salt.
4 Bake for 1 hour and 15 minutes, or until golden and crispy. The potatoes will fan out more during cooking and take on their accordion-like appearance. Serve hot.'),

          (3, 'https://cdn.pixabay.com/photo/2019/11/08/13/56/cake-4611484_1280.jpg'),
          (4, 'https://cdn.pixabay.com/photo/2019/04/07/17/20/chicken-4110208_1280.jpg'),
          (4, 'https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548_1280.jpg'),
          (5, 'https://cdn.pixabay.com/photo/2019/10/12/15/39/falafel-4544137_1280.jpg'),
          (5, 'https://cdn.pixabay.com/photo/2014/07/31/23/59/tapas-407231_1280.jpg'),
          (6, 'https://pixabay.com/photos/%E9%BA%BB%E8%BE%A3-spicy-vegetables-mushroom-food-951834/'),
          (6, 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_1280.jpg'),
          (7, 'https://cdn.pixabay.com/photo/2015/09/27/16/50/spaghetti-960978_1280.jpg'),
          (7, 'https://cdn.pixabay.com/photo/2018/09/27/17/34/seafood-dinner-3707538_1280.jpg');
