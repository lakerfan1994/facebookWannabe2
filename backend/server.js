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
const commentRouter = require('./routes/comments');
const likeRouter = require('./routes/likes')
//const albumRouter = require('./routes/albums');
=======
 const commentRouter = require('./routes/comments');
 const likeRouter = require('./routes/likes')

// const albumRouter = require('./routes/albums');
>>>>>>> master
// const pictureRouter = require('./routes/pictures');

app.use('/users', userRouter);
app.use('/likes', likeRouter);
<<<<<<< HEAD
//app.use('/comments', commentRouter);
app.use('/posts', postRouter);
=======
app.use('/post', postRouter);
app.use('/comments', commentRouter);
>>>>>>> master

app.listen(port, ()=>{
    console.log('Server is running!')
})
