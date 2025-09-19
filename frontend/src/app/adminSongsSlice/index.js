import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch all songs
export const fetchSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await axios.get('http://localhost:5000/api/songs');
  // Assuming response.data might have songs inside a 'songs' property; adjust as needed
  return Array.isArray(response.data) ? response.data : response.data.songs || [];
});

// Async thunk to add a new song
export const addSong = createAsyncThunk('songs/addSong', async (songData) => {
  const response = await axios.post('http://localhost:5000/api/songs', songData);
  return response.data;
});

// Async thunk to delete a song by ID
export const deleteSong = createAsyncThunk('songs/deleteSong', async (songId) => {
  await axios.delete(`http://localhost:5000/api/songs/${songId}`);
  return songId;
});

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        // Defensive check: ensure songs is an array
        state.songs = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch songs';
      })

      .addCase(addSong.fulfilled, (state, action) => {
        // Add the newly created song to the list
        state.songs.push(action.payload);
      })

      .addCase(deleteSong.fulfilled, (state, action) => {
        // Remove the deleted song from the list
        state.songs = state.songs.filter((song) => song._id !== action.payload);
      });
  },
});

export default songsSlice.reducer;
