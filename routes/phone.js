const express = require('express')
const router = express.Router()

//Get All Phones
router.get('/', getAllPhone)

//Get Single Phone
router.get('/:id', getSinglePhone)


//Create New Phone
router.post('/', createPhone)


//Update Certain phone
router.patch('/:id', updatePhone)

//Delete Phone
router.delete('/:id', deletePhone)


module.exports = router;