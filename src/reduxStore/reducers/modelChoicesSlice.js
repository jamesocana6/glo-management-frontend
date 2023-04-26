import { createSlice } from '@reduxjs/toolkit';
import { getModelChoices } from '../../api/modelChoicesApi';

const initialState = {
    choices: null,
    isLoading: false,
    error: null,
};

const modelChoicesSlice = createSlice({
    name: "modelChoices",
    initialState,
    reducers: {
      fetchModelChoicesStart: (state) => {
        state.isLoading = true;
        state.error = null;
      },
      fetchModelChoicesSuccess: (state, action) => {
        const { payload } = action;
        const choices = {};
      
        for (const key in payload) {
          if (Object.hasOwnProperty.call(payload, key)) {
            choices[key] = {};
      
            for (const valKey in payload[key]) {
              if (Object.hasOwnProperty.call(payload[key], valKey)) {
                choices[key][valKey] = payload[key][valKey];
              }
            }
          }
        }
      
        state.choices = choices;
        state.isLoading = false;
        // console.log("modelChoices updated:", state.choices);
      },
      fetchModelChoicesFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
  

export const {
    fetchModelChoicesStart,
    fetchModelChoicesSuccess,
    fetchModelChoicesFailure,
} = modelChoicesSlice.actions;

export const fetchModelChoicesAsync = () => (dispatch) => {
    // console.log('fetchModelChoicesAsync started');
    dispatch(fetchModelChoicesStart());
    return getModelChoices()
        .then((data) => {
            // console.log('fetchModelChoicesAsync data:', data);
            dispatch(fetchModelChoicesSuccess(data));
            // console.log('fetchModelChoicesSuccess dispatched:', data);
        })
        .catch((error) => {
            // console.log('fetchModelChoicesAsync error:', error);
            dispatch(fetchModelChoicesFailure(error.message));
        });
};

export const selectModelChoices = (state) => state.modelChoices.choices;
export const selectIsLoading = (state) => state.modelChoices.isLoading;
export const selectError = (state) => state.modelChoices.error;

export const modelChoicesReducer = modelChoicesSlice.reducer;
