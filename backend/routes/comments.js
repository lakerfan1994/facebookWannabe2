const express = require('express');
const router = express.Router();

const db = require('../db')

router.get('/posts/:post_id', async (req, res) => {
let post_id = req.params.post_id
let comments = await db.any('SELECT * FROM comments WHERE post_id = $1')
    try {
        let getComments = (comments, [post_id])
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


// router.post('/posts/:post_id/:commenter_id', async (req, res)=>{
// let post_id = req.params.post_id
// let commenter_id = req.params.commenter_id

// let postQuery = await db.none(`SELECT * FROM comments WHERE post_id = $1 AND commenter_id = $2`)

// try {
//     let registerPost = (postQuery, [post_id, commenter_id])
//     res.json({
//         payload: registerPost,
//         message:"Success posting comment"
//     })
// } catch (error){
//     console.log(error)
// }

// })

// router.patch('/:post_id/:commenter_id', (req, res)=>{
// let post_id = req.params.post_id
// let commenter_id = req.params.commenter_id

// let patchQuery = await db.any(`SELECT * FROM comments WHERE post_id = $1 AND commenter_id =$2`)
// try{
//     let editPost = (patchQuery, [post_id, commenter_id])
//     res.json({
//         payload: editPost, 
//         message: "Edits to comment were made!"
//     })
// } catch (eroor){
//     console.log(error)
// }
// })

// router.delete('/:post_id/:commenter_id', (req, res)=>{
// let post_id = req.params.post_id
// let commenter_id = req.params.commenter_id

// let deleteQUERY = await db.any(`SELECT * FROM comments WHERE post_id =$1 AND Commenter_id=$2`)
// try{
//     let deletePost = (deleteQuery, [post_id, commenter_id])
//     res.json({
//         res.json({
//             payload: deletePost, 
//             message: "Comment was deleted!"
//         })
//     })
// }catch (error ){
//     message: "Was unable to Delete Comment!"
// }
// })