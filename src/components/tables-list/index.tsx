import React from 'react';
import {Box} from '@mui/material';
import {useSelector} from 'react-redux';
import RootState from '@reducers/tables/interface';
import TableItem from 'components/tables-list/table';
import {styles} from './styles';

const TablesList = (): JSX.Element => {
  const {listTable} = useSelector((state: RootState) => state.tables);

  return (
      <>
        {
          listTable.map((table) => (
              <Box sx={styles.containerTable} key={table.id}>
                <TableItem table={table}/>
              </Box>
          ))
        }
      </>
  );
};


export default TablesList;
