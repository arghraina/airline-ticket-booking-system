const { airplaneRepository } = require('../repositories');

const airplane_repository = new airplaneRepository();

async function createAirplane(data) {
    try{
        const airplane = await airplane_repository.create(data);
        return airplane;
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    createAirplane
}