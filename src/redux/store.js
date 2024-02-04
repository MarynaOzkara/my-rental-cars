import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favorites/favoritesSlice';
import { advertsReducer } from './adverts/advertsSlice';
import { filtersReducer } from './filters/filtersSlice';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
};
const reduser = combineReducers({
  adverts: advertsReducer,
  filters: filtersReducer,
  favorites: persistReducer(favoritePersistConfig, favoriteReducer),
});
export const store = configureStore({
  reducer: reduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);