const router = require('express').Router()
const Image = require('../models/image')

// GET one image
router.get('/:id', async (req, res) => {
   try {
      const imageData = await Image.findByPk(req.params.id)
      if (!imageData) {
         res.status(404).json({
            message: 'No image with this id!',
         })
         return
      }
      res.status(200).json(imageData)
   } catch (err) {
      res.status(500).json(err)
   }
})

// Get all images
router.get('/', async (req, res) => {
   const imageData = await Image.findAll().catch((err) => {
      res.json(err)
   })
   res.json(imageData)
})

// POST create a new image
router.post('/', async (req, res) => {
   try {
      const imageData = await Image.create(req.body)
      res.status(200).json(imageData)
   } catch (err) {
      res.status(400).json(err)
   }
})

// PUT update a image
router.put('/:id', async (req, res) => {
   try {
      const imageData = await Image.update(req.body, {
         where: {
            id: req.params.id,
         },
      })
      if (!imageData[0]) {
         res.status(404).json({
            message: 'No image with this id!',
         })
         return
      }
      res.status(200).json(imageData)
   } catch (err) {
      res.status(500).json(err)
   }
})

// DELETE a image
router.delete('/:id', async (req, res) => {
   try {
      const imageData = await Image.destroy({
         where: {
            id: req.params.id,
         },
      })
      if (!imageData) {
         res.status(404).json({
            message: 'No image with this id!',
         })
         return
      }
      res.status(200).json(imageData)
   } catch (err) {
      res.status(500).json(err)
   }
})

// RESET table !!NOTE: All entries will be deleted. Be careful with this one.
router.delete('/', async (req, res) => {
   const imageData = await Image.destroy({
      where: {},
      truncate: true,
   }).catch((err) => {
      res.json(err)
   })
   res.json(imageData)
})

module.exports = router
