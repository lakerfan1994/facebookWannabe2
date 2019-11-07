const express = require('express');
const router = express.Router();




router.get('/', async (req, res) => {
    try {
        let users = await db.any('SELECT * FROM users')
        res.json({
            payload: users,
            message: "Succcess, Retrieved all the users"
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            message: 'error something went wrong.'
        })
    }
})

router.get('/:user_id', async (req, res)=>{
    let userId = req.params.user_id
    
try {
    let userQuery = `SELECT * FROM users WHERE id = $1;
    `

   let user = await db.any(userQuery, [userId])
    res.json({
        payload: user,
        message: "One USER received"
    })
} catch (error){
    console.log("This user doesn't exist")
}
}) 



router.post('/register', async  (req, res) => {
    
    try {
 let insertstuff = 
        `INSERT INTO users (firstname,lastname,age)
         VALUES ($1, $2, $3)`

        await db.none(insertstuff, [req.body.firstname, req.body.lastname, req.body.age])
       
        res.json({
            payload: req.body,
            message: "POST request arrived"
        })
    } catch (error) {
        res.json({
            message: "there was an eorrr registering"
        })
    }
})



router.delete('/user_id', async (req, res)=>{
let userId = req.params.user_id 

try{
    let deleteUser =   `DELETE FROM users where id = $1`
    await db.any(deleteUser, [userId])
    res.json({
        message: "Deleted User"
    })
} catch (error) {
    res.json({
        message: " There was an error deleting user"
    })
}
})









module.exports = router;