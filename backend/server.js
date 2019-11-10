const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.json());

// Routes
const userRouter = require('./routes/users');

const postRouter = require('./routes/post');
<<<<<<< HEAD
<<<<<<< HEAD
const commentRouter = require('./routes/comments');
const likeRouter = require('./routes/likes')
//const albumRouter = require('./routes/albums');
=======
=======

>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9
 const commentRouter = require('./routes/comments');
 const likeRouter = require('./routes/likes')
// const albumRouter = require('./routes/albums');
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9
// const pictureRouter = require('./routes/pictures');

app.use('/users', userRouter);
app.use('/likes', likeRouter);
<<<<<<< HEAD
<<<<<<< HEAD
//app.use('/comments', commentRouter);
app.use('/posts', postRouter);
=======
app.use('/post', postRouter);
app.use('/comments', commentRouter);
>>>>>>> master
=======
app.use('/post', postRouter);
app.use('/comments', commentRouter);

>>>>>>> 4b173e51a464ce54fc4bccc3a609d56dfb191db9

app.listen(port, ()=>{
    console.log('Server is running!')
})
