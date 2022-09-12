const express = require('express')
const router = express.Router()

const {getPeople, createPerson, updatePerson, deletePerson} = require('../controllers/people.js')

/*router.get('/', getPeople)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)*/

//Alternative approach
router.route('/').get(getPeople).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router