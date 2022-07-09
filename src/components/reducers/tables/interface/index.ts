export interface TablesState {
  tables: Table[];
  isLoading: boolean;
}

export interface Table {
  id: number;
  videos: [];
}

interface RootState {
  tables: TablesState;
}

export default RootState;
