import React from 'react';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {TableI} from '@reducers/tables/interface';

interface Props {
  table: TableI;
}

const TableItem = (props: Props) => {
  const {table} = props;
  return (
      <Box>
        <Actions />
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                {
                  table.headers.map((headerName) => (
                      <TableCell align="right">{headerName}</TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {table.rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.surName}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
  );
};


export default TableItem;













