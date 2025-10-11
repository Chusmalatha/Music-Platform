import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, addSong, deleteSong } from "../../app/adminSongsSlice";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 15,
        damping: 15,
       
      },
    },
  };
  


const AdminSongsList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.admin);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleAddSong = (e) => {
    e.preventDefault();
    const newSong = { title, artist, album, imageUrl, audioUrl };
    dispatch(addSong(newSong));
    setTitle("");
    setArtist("");
    setAlbum("");
    setImageUrl("");
    setAudioUrl("");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this song?")) {
      dispatch(deleteSong(id));
    }
  };

  return (
    <div className="bg-white-900 text-white min-h-screen flex flex-col">
      {/* Content container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
          Manage Songs
        </h2>

        {loading && <p className="mt-6 text-center">Loading...</p>}
        {error && <p className="mt-6 text-center text-red-500">{error}</p>}

        {/* Song Grid */}
        {/* <AnimatePresence mode="wait"> */}
        <motion.div
          key={Math.random()}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
        >
          {Array.isArray(songs) &&
            songs.map(({ _id, title, artist, album, imageUrl, audioUrl }) => (
              <motion.div
                key={_id}
                variants={cardVariants}
                className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="mb-3 rounded-lg h-48 w-full object-cover"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {artist} {album && `- ${album}`}
                </p>
                <audio
                  controls
                  src={audioUrl}
                  className="mt-auto w-full rounded"
                />
                <button
                  onClick={() => handleDelete(_id)}
                  className="bg-red-600 hover:bg-red-500 mt-3 rounded py-2 font-semibold"
                >
                  Delete
                </button>
              </motion.div>
            ))}
        </motion.div>
        {/* </AnimatePresence> */}
      </div>

      {/* Floating Add Button */}
      
      <button
  onClick={() => setShowForm(!showForm)}
  className="fixed bottom-6 right-6 bg-blue-800 hover:bg-blue-700 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 transition"
>
  {showForm ? "×" : "+"}
</button>


      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <form
            onSubmit={handleAddSong}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 bg-gray-700 text-white text-xl font-bold rounded px-2 py-1"
            >
              ×
            </button>
            <input
              className="w-full p-2 rounded bg-gray-700 mb-4 placeholder-gray-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-4 placeholder-gray-300"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Artist"
              required
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-4 placeholder-gray-300"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              placeholder="Album"
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-4 placeholder-gray-300"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-4 placeholder-gray-300"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="Audio URL (mp3 link)"
              required
            />
            {audioUrl && (
              <audio
                controls
                src={audioUrl}
                className="w-full mb-4 rounded"
              />
            )}
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded w-full font-semibold"
            >
              Add Song
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminSongsList;
