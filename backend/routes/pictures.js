const express = require('express');
const router = express.Router();

const db = require('/db');

router.get('/albums/:album_id'), async (req, res =>{
try{
    let getPictures = await db.any(`SELECT * FROM albums WHERE id = album_id`)
res.json({
    payload: getPictures, 
    message: 'Receiving all pictures!'
})
} catch (error){
    console.log(error)
}
})

router.post('pictures/albums/:album_id', async (req, res)=>{
    let insertstuff = await db.none (`INSERT INTO albums (album_id, picture_url) VALUES $1 $2`)
    try{
        let picture = (insertstuff [req.body.albums_id, req.body.picture_url])
        res.json({
            payload: picture,
            message: "uploading picture"
        })
    } catch (error){
        console.log(error)
    }
})

module.exports = router; 