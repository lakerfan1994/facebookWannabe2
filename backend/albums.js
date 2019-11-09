const express = require('express');
const router = express.Router();
const db = require('../db')

router.get('/:user_id', async(req,res) => {
    let userID = req.params.user_id

    try {
        let albumQuery = 
       `SELECT * 
        FROM albums 
        WHERE user_id = $1;
        `
        let result = await db.any(albumQuery, [userID])
        res.json({
            payload: result,
            message: "Success. Retrieve all the posts"
        });
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
        let insertAlbum = `INSERT INTO albums(album_name, albumOwner_id)
        VALUES($1, $2)`

    await db.none(insertAlbum, [req.body.album_name, req.body.albumOwner_id])
        res.json({
            payload:req.body,
            message:"album added"
        })
    }catch (error){
        res.json({
            message: "there was an error"
        })
    }
})

module.exports = router;