const express = require('express');
const router = express.Router();
const db = require('../db')


router.get('/all', async (req,res) => {
    try {
        let post = await db.any("SELECT * FROM posts")
        console.log(post);
        res.json({
            payload: post,
            message: "Success. Retrieve all the posts"
        });
    } catch (error){
        res.status(500)
        res.json({
            message: "something went wrong!"
        })
        console.log(error);
        
}   
})

router.get('/:user_id', async(req, res) => {
    let userID = req.params.user_id
    try{
        let postQuery = `
        SELECT * 
        FROM posts 
        WHERE poster_id = $1;
        `
        let result = await db.any(postQuery, [userID])
        res.json({
            payload: result,
            message: "Success!" 
        })
    }catch (error){
        res.status(500)
        res.json({
            message: "something went wrong!"
        })
        console.log(error);
    }
})

router.post('/register', async(req, res) => {
    try {
        let insertPost = `INSERT INTO posts(poster_id, body)
        VALUES($1, $2)`

    await db.none(insertPost, [req.body.poster_id, req.body.body])
        res.json({
            payload:req.body,
            message:"post registered"
        })
    }catch (error){
        res.json({
            message: error
        })
    }
})

router.delete('/:id', (req, res)=>{
    try{
        let deletePost = `DELETE FROM posts WHERE id = $1`
        res.json({
            message:"post deleted!"
        })
    }catch(error){
        res.json({
            message: error
        })
    }
})




module.exports = router;