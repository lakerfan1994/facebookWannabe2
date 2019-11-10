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

router.post('/pictures/albums/:album_id', async (req, res)=>{
    let insertstuff = await db.none (`INSERT INTO albums (album_id, picture_url) VALUES $1 $2`)
    try{
        let picture = (insertstuff, [req.body.albums_id, req.body.picture_url])
        res.json({
            payload: picture,
            message: "uploading picture"
        })
    } catch (error){
        console.log(error)
    }
})

router.get('/pictures/:pic_id', async (req, res)=>{
try {
    let getSinglePicture = await db.any(`SELECT * FROM pictures WHERE id = req.body.pic_id`)
    res.json({
    })
} catch (error){
    console.log(error)
}
})


router.delete('/pictures/:pic_id', async (req, res) =>{
    let deleteStuff = await db.any(`DELETE FROM albums WHERE id = $1`)
try {
    let deletePicture = (deleteStuff, [req.body.id])
    res.json({
        payload: deletePicture, 
        message: "picture selected deleted!"
    })
}catch (error) {
    console.log(error)
}
})

module.exports = router; 