const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/:post_id', async (req, res) => {
let post_id = req.params.post_id
let comments = await db.any(`
    SELECT * FROM comments JOIN users ON users.id = comments.commenter_id WHERE post_id = ${post_id}`);

    try {
        if(comments.length === 0){
    throw new Error;
}

        let getComments = (comments)
        res.json({
            payload: comments,
            message: "getting all comments"
        })
    } catch (error) {
        console.log(error)
        res.json({
            message: 'error something went wrong. Could not retrieve all users.'
        })
    }
})

router.post('/register', async (req, res)=>{
let post_id = req.body.post_id
let commenter_id = req.body.commenter_id;
let commentBody = req.body.body;
 let insertstuff = 
        `INSERT INTO comments(post_id, commenter_id, body)
         VALUES ($1, $2, $3)`;



try {
    let postQuery = await db.none(insertstuff, [post_id, commenter_id, commentBody]);
    let registerPost = ([post_id, commenter_id, commentBody])
    res.json({
        payload: registerPost,
        message:"Success posting comment"
    })
} catch (error){
    res.json({err: error})}

 })


router.patch('/update', async (req, res)=>{
let post_id = req.body.post_id;
let commenter_id = req.body.commenter_id;
let commentBody = req.body.body;

let patchQuery = await db.none(`UPDATE comments SET body = $1 WHERE post_id = $2 AND commenter_id = $3 `, [commentBody, post_id, commenter_id]);
try{
    let editPost = ([post_id, commenter_id])
    res.json({
        payload: editPost, 
        message: "Edits to comment were made!"
    })
} catch (err0r){
    res.json({
        error: err0r
    })
}
})

router.delete('/delete', async (req, res)=>{
let post_id = req.body.post_id;
let commenter_id = req.body.commenter_id;

let deleteQUERY = await db.none(`DELETE FROM comments WHERE post_id = $1 AND commenter_id = $2`, [post_id, commenter_id]);
try{
    let deletePost = ([post_id, commenter_id])
    res.json(
        {
            payload: deletePost, 
            message: "Comment was deleted!"
        })
    }
catch (error ){
    message: "Was unable to Delete Comment!"
}
})

module.exports = router;

