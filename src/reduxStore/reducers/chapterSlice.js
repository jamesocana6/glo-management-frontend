import { createSlice } from '@reduxjs/toolkit';
import { getChapters } from '../../api/chapterApi';

const initialState = {
  chapters: {},
  isLoading: false,
  error: null,
};

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState,
  reducers: {
    fetchChaptersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchChaptersSuccess(state, action) {
        state.isLoading = false;
        const newChapters = {};
        action.payload.forEach(chapter => {
          newChapters[chapter.id] = chapter;
        });
        state.chapters = newChapters;
      },
      
      
    fetchChaptersError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchChaptersStart,
  fetchChaptersSuccess,
  fetchChaptersError,
} = chaptersSlice.actions;

export const fetchChaptersAsync = () => (dispatch) => {
    dispatch(fetchChaptersStart());
    return getChapters()
        .then((data) => {
            dispatch(fetchChaptersSuccess(data));
        })
        .catch((error) => {
            dispatch(fetchChaptersError(error.message));
        });
};

export const selectChapters = (state) => state.chapters.chapters;
export const selectIsLoading = (state) => state.chapters.isLoading;
export const selectError = (state) => state.chapters.error;

export const chaptersReducer = chaptersSlice.reducer;
