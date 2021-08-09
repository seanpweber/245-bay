import axios from 'axios'
require('dotenv').config()

let apiURI

if (process.env.NODE_ENV === 'JAWSDB_URL') {
   apiURI = process.env.JAWSDB_URL
} else {
   apiURI = 'localhost:3000/api/images'
}

class ImageService {
   getImages() {
      return axios.get(apiURI)
   }

   createImage(image) {
      return axios.post(apiURI, image)
   }

   getImageById(imageId) {
      return axios.get(apiURI + '/' + imageId)
   }

   updateImage(image, imageId) {
      return axios.put(apiURI + '/' + imageId, image)
   }

   deleteImageById(imageId) {
      return axios.delete(apiURI + '/' + imageId)
   }

   deleteImages() {
      return axios.delete(apiURI)
   }
}

export default new ImageService()
