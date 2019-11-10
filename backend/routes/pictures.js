const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/:album_id', async (req, res) =>{
try{
    let getPictures = await db.any(`SELECT * FROM pictures WHERE album_id = ${req.params.album_id}`)
res.json({
    payload: getPictures, 
    message: 'Receiving all pictures!'
})
} catch (error){
    console.log(error)
}
})

router.post('/register', async (req, res)=>{
    try{
        let insertstuff = await db.none(`INSERT INTO pictures(album_id, picture_url) VALUES($1, $2)`, [req.body.album_id, req.body.picture_url]);
        let picture = ([req.body.album_id, req.body.picture_url])
        res.json({
            payload: picture,
            message: "uploading picture"
        })
    } catch (error){
        res.json({err: error})
    }
})

router.get('/album/:pic_id', async (req, res)=>{
try {
    let getSinglePicture = await db.any(`SELECT * FROM pictures WHERE id = ${req.params.pic_id}`);
    res.json({
        payload: getSinglePicture,
        message: 'Here is your picture'
    });
} catch (error){
    res.json({err: error});
}
})


router.delete('/delete', async (req, res) =>{
    let stuffToDelete = [req.body.album_id, req.body.picture_url];
    let deleteStuff = await db.none(`DELETE FROM pictures WHERE album_id = $1 AND picture_url = $2`, stuffToDelete);
try {
    let deletePicture = ([req.body.picture_url])
    res.json({
        payload: deletePicture, 
        message: "picture selected deleted!"
    })
}catch (error) {
    console.log(error)
}
})

module.exports = router; 