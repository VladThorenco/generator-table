import {createSlice} from '@reduxjs/toolkit';
import {TablesState} from './interface';

const initialState: TablesState = {
  isLoading: false,
  tables: [],
};

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {},
});

export const tablesSliceActions = tablesSlice.actions;
export default tablesSlice.reducer;
