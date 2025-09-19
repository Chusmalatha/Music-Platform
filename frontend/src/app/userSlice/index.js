import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  playlists: [],
  favoriteSongs: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setPlaylists(state, action) {
      state.playlists = action.payload;
    },
    setFavoriteSongs(state, action) {
      state.favoriteSongs = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
});

export const { setProfile, setPlaylists, setFavoriteSongs, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
