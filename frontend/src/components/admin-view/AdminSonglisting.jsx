import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, addSong, deleteSong } from '../../app/adminSongsSlice';

const AdminSongsList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.admin);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleAddSong = (e) => {
    e.preventDefault();
    const newSong = { title, artist, album, imageUrl, audioUrl };
    dispatch(addSong(newSong));
    setTitle('');
    setArtist('');
    setAlbum('');
    setImageUrl('');
    setAudioUrl('');
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      dispatch(deleteSong(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full px-8 py-8">
      {/* Button fixed top right */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="fixed top-20 right-6 bg-blue-800 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded shadow z-50"
      >
        {showForm ? 'Close Form' : 'Add New Song'}
      </button>

      <h2 className="text-3xl font-bold mb-6">Manage Songs</h2>

      {/* Modal form overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
          <form
            onSubmit={handleAddSong}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative"
          >
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 bg-gray-700 text-white text-xl font-bold rounded px-1 py-1"
            >
              x
            </button>
            <input
              className="w-full p-2 rounded bg-gray-700 mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-3"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Artist"
              required
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-3"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              placeholder="Album"
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-3"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
            />
            <input
              className="w-full p-2 rounded bg-gray-700 mb-3"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="Audio URL"
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded w-full"
            >
              Add Song
            </button>
          </form>
        </div>
      )}

      {loading && <p className="mt-6">Loading...</p>}
      {error && <p className="mt-6 text-blue-800">{error}</p>}

      {/* Song Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {Array.isArray(songs) &&
          songs.map(({ _id, title, artist, album, imageUrl, audioUrl }) => (
            <div
              key={_id}
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
              <audio controls src={audioUrl} className="mt-auto w-full" />
              <button
                onClick={() => handleDelete(_id)}
                className="bg-blue-800 hover:bg-blue-700 mt-3 rounded py-1"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminSongsList;
