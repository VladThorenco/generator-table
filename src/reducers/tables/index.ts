import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  PayloadCopyTable,
  PayloadCreateTable,
  PayloadDeleteTable,
  PayloadEditTable,
  PayloadRemoveRowTable,
  RowTable,
  TableI,
  TablesState
} from './interface';
import {TableId} from 'constants/enum';
import {deleteItem} from '../../shared/helpers';

const initialState: TablesState = {
  isLoading: false,
  listTable: [],
};

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    addValueToTable(state, action: PayloadAction<RowTable>) {
      state.listTable = state.listTable.map((table: TableI) => {
        if (table.id === TableId.ROOT) {
          return {
            ...table,
            rows: [...table.rows, action.payload]
          };
        }
        return {
          ...table,
        };
      });
    },
    createTable(state, action: PayloadAction<PayloadCreateTable>) {
      state.listTable = [...state.listTable, action.payload.table];
    },
    editValueToTable(state, action: PayloadAction<PayloadEditTable>) {
      state.listTable = state.listTable.map((table: TableI) => {
        if (table.id === action.payload.idTable) {
          return {
            ...table,
            rows: table.rows.map((row) => {
              if (row.id === action.payload.rowId) {
                return {
                  ...row,
                  ...action.payload.editRow
                };
              }
              return {
                ...row,
              };
            })
          };
        }
        return {
          ...table,
        };
      });
    },
    removeValueToTable(state, action: PayloadAction<PayloadRemoveRowTable>) {
      state.listTable = state.listTable.reduce((accum: TableI[] | [], table: TableI, index) => {
        if (table.id === action.payload.idTable) {
          if (table.rows.length === 1 && table.id !== TableId.ROOT) {
            accum = state.listTable.filter((table: TableI) => table.id !== action.payload.idTable);
          } else {
            accum[index] = {
              ...table,
              rows: table.rows.filter((row: RowTable) => row.id !== action.payload.rowId),
            };
          }
        } else {
          accum[index] = table;
        }
        return accum;
      }, []);
    },
    copyTable(state, action: PayloadAction<PayloadCopyTable>) {
      const foundIdCopy = state.listTable.findIndex(table => table.id === action.payload.idTable);
      if (foundIdCopy !== -1) {
        state.listTable.splice(foundIdCopy + 1, 0, action.payload.table);
      }
    },
    deleteTable(state, action: PayloadAction<PayloadDeleteTable>) {
      deleteItem(state, action.payload.idTable);
    },
    clear() {
      return initialState;
    }
  },
});

export const tablesSliceActions = tablesSlice.actions;
export default tablesSlice.reducer;
