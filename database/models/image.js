const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema(
   {
      id: mongoose.Schema.Types.ObjectId,
      image: {
         type: String,
      },
      title: {
         type: String,
      },
   },
   {
      collection: 'images',
   }
)

module.exports = mongoose.model('Image', imageSchema)
