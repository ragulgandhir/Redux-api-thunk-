import { configureStore } from '@reduxjs/toolkit';

import filmsReducer from "./films"


export default configureStore({
	reducer: {
		films: filmsReducer,
	},
});