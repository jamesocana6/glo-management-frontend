import { createSlice } from '@reduxjs/toolkit';
import { getChapters } from '../../actions/chapterApi';

const initialState = {
  chaptersById: {},
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
      state.error = null;
      state.chaptersById = {};
      action.payload.forEach(chapter => {
        state.chaptersById[chapter.id] = chapter;
      });
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

export const selectChapters = (state) => state.chapters.chaptersById;
export const selectIsLoading = (state) => state.chapters.isLoading;
export const selectError = (state) => state.chapters.error;

export const chaptersReducer = chaptersSlice.reducer;
