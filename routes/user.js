const express = require('express')
const router = express.Router()
const user = require('../controller/user')

router.get("/:id",user.getSingleUser)
router.get('/',user.getAllUser)
router.post('/',user.addUser)
router.put('/:id',user.editUser)
router.delete('/:id',user.deleteUser)


module.exports = router