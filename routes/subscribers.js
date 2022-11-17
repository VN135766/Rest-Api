const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//getting all subs
router.get('/', (req, res) => {
res.send('hello world')
})
// getting one sub
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
// creating one sub
router.post('/', (req, res) => {
  res.send(req.params.id)
})
// updating one sub
router.patch('/', (req, res) => {
  res.send(req.params.id)
})
// deleting one
router.delete('/:id', (req, res) => {
  req.params.id
})

module.exports = router