const getSingleTurf = (req,res) => {
    res.json({id:req.params.id})
}

module.exports = {
    getSingleTurf
}