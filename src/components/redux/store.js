import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { createAction, createReducer } from '@reduxjs/toolkit';

const myReducer = createReducer(10, {});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});

const enhancer = devToolsEnhancer();
console.log('enhancer:', enhancer);
