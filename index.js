// 4 step procedure to make server-->
// Express ko bulana hoga es file me: 
const express = require("express");
// Express ko call karna padega ek variable me:
const app = express();
const dotenv = require("dotenv");
const {readdirSync} = require("fs");


// import the route here
const authRoute = require("./routes/authRoutes");


// binding this env
dotenv.config();

// Port define karna hoga - Port hota hai darwaja:
const port = process.env.PORT || 5000;

// Making Routes:
app.get("/", (req,res)=>{
    res.send("Server runing.....")
})
// How to use routes
// app.use("/api", authRoute)

// importing and using routes dynamically____>>
readdirSync("./routes").map((route)=>{
 app.use("/api", require(`./routes/${route}`))
})
// console.log(readdirSync("./routes"))


// Server ko listen karna hoga:
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
