const express = require("express");
const router = express.Router();


router.route("/").get((req,res)=>{
    res.json({success: "True", msg: "Get all data"});
});
router.route("/:id").get((req,res)=>{
    res.json({success: "True", msg: "Get single data"});
});
router.route("/").post((req,res)=>{
    res.json({success: "True", msg: "Create single data"});
});
router.route("/:id").put((req,res)=>{
    res.json({success: "True", msg: "Update single data"});
});
router.route("/:id").delete((req,res)=>{
    res.json({success: "True", msg: "Delete single data"});
});


module.exports = router;