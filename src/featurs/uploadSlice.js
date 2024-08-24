import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

export const uploadPhotoSlice = createSlice({
  name: "uploadPhoto",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
    removePhoto: (state, action) => {
      state.photos = state.photos.filter(
        (photo) => photo.id !== action.payload
      );
    },
  },
});

export const { addPhoto, removePhoto } = uploadPhotoSlice.actions;
export default uploadPhotoSlice.reducer;
