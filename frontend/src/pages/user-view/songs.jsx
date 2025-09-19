import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../app/adminSongsSlice";

const UserSongsList = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-y-auto px-8 py-6">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-6">Songs</h2>

      {/* Loading & Error */}
      {loading && <p className="text-gray-300">Loading songs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Empty State */}
      {!loading && !error && Array.isArray(songs) && songs.length === 0 && (
        <p className="text-gray-400">No songs available right now.</p>
      )}

      {/* Song Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.isArray(songs) &&
          songs.map(({ _id, title, artist, album, imageUrl, audioUrl }) => (
            <div
              key={_id}
              className="bg-gray-800 rounded-xl p-4 shadow-md flex flex-col hover:scale-105 hover:shadow-lg transition-transform duration-200 h-[360px]"
            >
              <img
                src={
                  imageUrl ||
                  "https://via.placeholder.com/300x200.png?text=No+Image"
                }
                alt={title}
                className="mb-3 rounded-lg h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold truncate">{title}</h3>
              <p className="text-gray-400 text-sm mb-3 truncate">
                {artist} {album && `- ${album}`}
              </p>
              <audio
                controls
                src={audioUrl}
                className="mt-auto w-full rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSongsList;
