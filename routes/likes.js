const express = require('express');
let router = express.Router;
const db= require('../db');

router.get('/posts/:post_id', async (req, res) => {
	let response;
	try{
		response = await db.any('SELECT liker_id FROM likes WHERE post_id = req.params.post_id  ');
		res.send(response);
	}
	catch(err){
		console.log('this broke :(');
	}
});

router.post('/posts/:post_id/:commenter_id', async (req, res) => {
	let response;
	try{
		response = await db.none('INSERT INTO likes(liker_id, post_id) VALUES($1, $2)', [req.body.post_id, req.body.commenter_id]);
	}
	catch(err){
		console.log(err);
	}

	let messageToUser = {addedLike: req.body};
   	res.send(messageToUser);
})

router.delete('/:post_id/:liker_id', async (req,, res) => {
	let response;
	try{
		response = await db.any('DELETE FROM likes WHERE liker_id = req.body.liker_id AND post_id = req.body.post_id');
	}
		catch(err){
		console.log(err);
	}

	let messageToUser = {deletedLike: req.body};
   	res.send(messageToUser);

})


















module.exports = router;