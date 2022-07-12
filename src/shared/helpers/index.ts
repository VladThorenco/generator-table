import {TableI} from '@reducers/tables/interface';

export const deleteItem = (state: any, action: string) => {
  const foundDelete = state.listTable.findIndex((table: TableI) => table.id === action);
  if (foundDelete !== -1) {
    return state.listTable.splice(foundDelete, 1);
  }
};
