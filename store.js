import { configureStore } from '@reduxjs/toolkit';

import basketReducer from './features/basketSlice';
import resturantReducer from './features/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: resturantReducer,
  },
});
