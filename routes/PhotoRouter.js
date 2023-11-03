
const express = require('express');

const router = express.Router();

const {UploadPhoto, getAllPhotos, getPhotoById, deletePhotoById} = require('../controllers/PhotoControllers');

router.route('/').get(getAllPhotos).post(UploadPhoto);
router.route('/:id').get(getPhotoById).delete(deletePhotoById);

module.exports = router;