const express = require('express')
const bodyParser = require('body-parser')

const db = require('../db/db')

const router = express.Router()

router.use(bodyParser.json())

module.exports = router

router.get('/', (req, res) => {
  db.getAll()
    .then(shoes => {
      res.json({shoes})
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getOne(id)
    .then(shoes => {
      res.json({shoes})
    })
})

router.put('/:id', (req, res) => {
  const {id, brand, size} = req.body
  const post = {id, brand, size}
  db.updateOne(post)
    .then(shoes => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const shoes = req.body
  console.log(shoes)
  db.addNew(shoes)
    .then(shoes => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteOne(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
