import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    loading: false,
    hasErrors: false,
    films: [],
  }
  
  // a slice include with 3 reducers Loding, Success, Error
  const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
      getFilms: state => {
        state.loading = true
      },
      getFilmsSuccess: (state, { payload }) => {
        state.films = payload
        state.loading = false
        state.hasErrors = false
      },
      getFilmsFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })

// a slice with three actions  
  export const { getFilms, getFilmsSuccess, getFilmsFailure } = filmsSlice.actions

// The reducer
  export default filmsSlice.reducer

//a state selector
  export const filmsSelector = state => state.films
  

// Asynchronous thunk action
  export function fetchFilms() {
    return async dispatch => {
      dispatch(getFilms())
  
      try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await response.json()
  
        dispatch(getFilmsSuccess(data))
      } catch (error) {
        dispatch(getFilmsFailure())
      }
    }
  }
  