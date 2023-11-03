
const Photo = require('../models/PhotoModel');

// uplaod photo as an url
const UploadPhoto = async (req, res) => {
    const { url, user, journalEntry, createdAt } = req.body;
    const newPhoto = new Photo({
        url,
        user,
        journalEntry,
        createdAt
    })
    try {
        const photo = await newPhoto.save();
        res.status(201).json(photo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get all photos   
const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({});
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get photo by id
const getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        res.json(photo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// delete photo by id
const deletePhotoById = async (req, res) => {
    try {
        const photo = await Photo.findByIdAndDelete(req.params.id);
        res.json(photo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { UploadPhoto, getAllPhotos, getPhotoById, deletePhotoById }