const express = require("express");
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require("../controllers/controllers");
const router = express.Router();


// without id
router.route("/")
.get(getBootcamps)
.post(createBootcamp);

//with id
router.route("/:id")
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);


module.exports = router;