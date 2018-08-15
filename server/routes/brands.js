const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.allBrands()
    .then(sush => {
      res.json(sush)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBrand(id)
    .then(brand => {
      res.json(brand)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.post('/', (req, res) => {
  const brand = req.body
  db.newBrand(brand)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.put('/', (req, res) => {
  const brand = req.body
  db.editBrand(brand)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteBrand(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
