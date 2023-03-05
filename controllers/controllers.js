

// @desc Get All Data
// @route GET /api/v1/data
// @access public
exports.getBootcamps = async (req,res) =>{
    res.json({success: "True", msg: "Get all Data"});
}
// @desc Get Single Data
// @route GET /api/v1/data/:id
// @access public
exports.getBootcamp = async (req,res) =>{
    res.json({success: "True", msg: "Get Single Data"});
}
// @desc Create Data
// @route POST /api/v1/data
// @access private
exports.createBootcamp = async (req,res) =>{
    res.json({success: "True", msg: "Create Data"});
}
// @desc Update Data
// @route PUT /api/v1/data/:id
// @access private
exports.updateBootcamp = async (req,res) =>{
    res.json({success: "True", msg: "Update data"});
}
// @desc Get All Data
// @route GET /api/v1/data/:id
// @access private
exports.deleteBootcamp = async (req,res) =>{
    res.json({success: "True", msg: "Delete Data"});
}
