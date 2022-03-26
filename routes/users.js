const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("ini adalah user route")
})


module.exports = router
