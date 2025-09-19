const Song = require('../models/songModel');

// Get all songs
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new song
exports.addSong = async (req, res) => {
  try {
    const song = new Song(req.body);
    const savedSong = await song.save();
    res.status(201).json(savedSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a song by id
exports.deleteSong = async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
