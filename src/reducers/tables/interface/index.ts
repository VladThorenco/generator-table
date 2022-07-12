export interface TablesState {
  listTable: TableI[];
  isLoading: boolean;
}

export interface TableI {
  id: string;
  rows: RowTable[];
  headers: string[];
}

export interface RowTable {
  id: string;
  name: string;
  surName: string;
  age: number | string;
  city: string;
}

export type PayloadCopyTable = {
  table: TableI;
  idTable: string;
}

export type PayloadDeleteTable = {
  idTable: string;
}

export type PayloadEditTable = {
  rowId: string;
  idTable: string;
  editRow: RowTable;
}

export type PayloadRemoveRowTable = {
  rowId: string;
  idTable: string;
}

export type PayloadCreateTable = {
  table: TableI;
}

interface RootState {
  tables: TablesState;
}

export default RootState;
