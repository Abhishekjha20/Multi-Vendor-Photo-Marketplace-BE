const express = require("express")
const router = express.Router();

// optimised
// const router = require("express").Router();

router.get("/hello",(req,res)=>{
 res.json({
    message:"Hello",
    name: "Abhishek@"
 })
})

module.exports = router;
