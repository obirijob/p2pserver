/** @format */

const router = require('express').Router()

const rooms = []

router.get('/rooms', (req, res) => {
  return res.json(rooms)
})

router.post('/create', (req, res) => {
  const room = req.body
})

module.exports = router
