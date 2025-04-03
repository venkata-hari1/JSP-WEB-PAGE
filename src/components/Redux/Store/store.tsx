'use client';
import { configureStore } from '@reduxjs/toolkit';
import Language from '../Reducers/Language';

export const store=configureStore({
    reducer:{
        Language     
    }
})
export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
