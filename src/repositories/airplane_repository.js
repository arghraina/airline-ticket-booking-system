const CrudRepository = require('./crud_repository');

const { Airplanes_Tickets } = require('../models')
class airplaneRepository extends CrudRepository {
    constructor(){
        super(Airplanes_Tickets);   // super calls the constructor of the parent class.
    }
}

module.exports = airplaneRepository;