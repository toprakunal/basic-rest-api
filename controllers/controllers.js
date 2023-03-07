
const Data= require("../models/dataModel");


// @desc Get All Data
// @route GET /api/v1/data
// @access public
exports.getBootcamps = async (req,res) =>{
    const data = await Data.find();

    res.json({success: true, data: data});
}
// @desc Get Single Data
// @route GET /api/v1/data/:id
// @access public
exports.getBootcamp = async (req,res) =>{
    const data = await Data.findById(req.params.id);

    res.json({success: true, data: data});

}
// @desc Create Data
// @route POST /api/v1/data
// @access private
exports.createBootcamp = async (req,res) =>{
    const data = await Data.create(req.body);
    res.json({success: true, data: data});
}
// @desc Update Data
// @route PUT /api/v1/data/:id
// @access private
exports.updateBootcamp = async (req,res) =>{

    const data = await Data.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    });


    res.json({success: "True", msg: data});
}
// @desc Get All Data
// @route GET /api/v1/data/:id
// @access private
exports.deleteBootcamp = async (req,res) =>{
    const data = await Data.findByIdAndDelete(req.params.id);

    res.json({success: "True", msg: data});
}
