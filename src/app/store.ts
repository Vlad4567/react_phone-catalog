import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuSlice from '../features/menuSlice';

export const store = configureStore({
  reducer: {
    menuSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
