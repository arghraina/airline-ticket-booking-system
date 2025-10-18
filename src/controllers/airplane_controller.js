const {airplaneService} =  require('../services')

async function createAirplane(req, res) {
    try{
        const airplane = await airplaneService.createAirplane({
            model_number: req.body.modelNumber,

            capacity: req.body.capacity
        })
        return res.json({
            success: true,
            message: 'successfully created airplane',
            data: airplane,
            error: {}
        })
    } catch(error){
        res.json({
            success: false,
            message: 'something went wrong while creating airplane',
            data: {},
            error: error.message || error
        })
    }
}

module.exports = {
    createAirplane
}