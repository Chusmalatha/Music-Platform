import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong, updateSong } from "../../app/adminSongsSlice";
import Form from "../common/form";

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

  // Include file inputs as part of fields passed to Form
  const fields = [
    { name: "title", type: "text", placeholder: "Song Title", value: title, onChange: e => setTitle(e.target.value) },
    { name: "artist", type: "text", placeholder: "Artist", value: artist, onChange: e => setArtist(e.target.value) },
    { name: "album", type: "text", placeholder: "Album", value: album, onChange: e => setAlbum(e.target.value) },
    { name: "genre", type: "text", placeholder: "Genre", value: genre, onChange: e => setGenre(e.target.value) },
    { name: "releaseDate", type: "date", placeholder: "Release Date", value: releaseDate, onChange: e => setReleaseDate(e.target.value) },
    { name: "duration", type: "number", placeholder: "Duration (seconds)", value: duration, onChange: e => setDuration(e.target.value) },
    { name: "image", type: "file", placeholder: "Upload Song Image", onChange: e => setImageFile(e.target.files[0]) },
    { name: "audio", type: "file", placeholder: "Upload Audio File", onChange: e => setAudioFile(e.target.files[0]) },
  ];

  return (
    <Form 
      fields={fields} 
      onSubmit={handleSubmit} 
      buttonText={existingSong ? "Update Song" : "Add Song"} 
      errorMessage={errorMessage} 
    />
  );
};

export default AdminSongForm;
