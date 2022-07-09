import {combineReducers} from '@reduxjs/toolkit';
import tables from '../reducers/tables/index';

const rootReducer = combineReducers({
  tables,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
