const { query } = require('express');
const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/signup',(req,res) =>{
    let users = req.body;
    query = "select email,password,role,status from users where email = ?"
    connection.query(query,[users.email],(err,results)=>{
        if(!err){
            if(results.length <= 0){
                query = "insert into users(user_name,phoneNumber,email,password,status,role) values(?,?,?,?,'false','user')";
                connection.query(query,[users.user_name,users.phoneNumber,users.email,users.password],(err,results) =>{
                    if(!err){
                        return res.status(200).json({message: "Successfully Registered"});
                    }
                    else{
                        return res.status(500).json(err);
                    }
                })
            }
            else{
                return res.status(400).json({message: " Email Already Exist"})
            }
        }
    else {
        return res.status(500).json(err);
    }
    })
    
})

module.exports = router;