const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.json({result: "ok", data:[1,2,3,4,5]})
})

app.listen(8080, ()=>{
    console.log("Serer is running.")
})