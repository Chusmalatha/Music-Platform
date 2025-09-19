import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong, updateSong } from "../../app/adminSongsSlice";

const AdminSongForm = ({ existingSong, onSuccess }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(existingSong?.title || "");
  const [artist, setArtist] = useState(existingSong?.artist || "");
  const [album, setAlbum] = useState(existingSong?.album || "");
  const [genre, setGenre] = useState(existingSong?.genre || "");
  const [releaseDate, setReleaseDate] = useState(
    existingSong?.releaseDate ? existingSong.releaseDate.split("T")[0] : ""
  );
  const [duration, setDuration] = useState(existingSong?.duration || "");
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("genre", genre);
    formData.append("releaseDate", releaseDate);
    formData.append("duration", duration);
    if (imageFile) formData.append("image", imageFile);
    if (audioFile) formData.append("audio", audioFile);

    if (existingSong) {
      dispatch(updateSong({ id: existingSong._id, formData }))
        .unwrap()
        .then(() => onSuccess())
        .catch((err) => setErrorMessage(err.message || "Failed to update song"));
    } else {
      dispatch(addSong(formData))
        .unwrap()
        .then(() => onSuccess())
        .catch((err) => setErrorMessage(err.message || "Failed to add song"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-lg"
      encType="multipart/form-data"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1 text-sm font-semibold text-white">
          Song Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="artist" className="block mb-1 text-sm font-semibold text-white">
          Artist
        </label>
        <input
          id="artist"
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="album" className="block mb-1 text-sm font-semibold text-white">
          Album
        </label>
        <input
          id="album"
          type="text"
          placeholder="Album"
          value={album}
          onChange={(e) => setAlbum(e.target.value)}
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="genre" className="block mb-1 text-sm font-semibold text-white">
          Genre
        </label>
        <input
          id="genre"
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="releaseDate" className="block mb-1 text-sm font-semibold text-white">
          Release Date
        </label>
        <input
          id="releaseDate"
          type="date"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block mb-1 text-sm font-semibold text-white">
          Duration (seconds)
        </label>
        <input
          id="duration"
          type="number"
          placeholder="Duration (seconds)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full rounded border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-1 text-sm font-semibold text-white">
          Upload Song Image
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="w-full text-white"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="audio" className="block mb-1 text-sm font-semibold text-white">
          Upload Audio File
        </label>
        <input
          id="audio"
          type="file"
          accept="audio/*"
          onChange={(e) => setAudioFile(e.target.files[0])}
          className="w-full text-white"
        />
      </div>

      {errorMessage && (
        <p className="mb-4 text-red-500 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        className="w-full md:w-auto bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
      >
        {existingSong ? "Update Song" : "Add Song"}
      </button>
    </form>
  );
};

export default AdminSongForm;
