import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material';
import {TableI} from '@reducers/tables/interface';
import Actions from 'components/tables-list/table/actions-table';
import {styles} from './styles';
import ModalForm from 'components/modal';
import {tablesSliceActions} from 'reducers/tables';

interface Props {
  table: TableI;
}

const TableItem = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const idRow = useRef<string>('');
  const {table} = props;

  const handleClose = () => setOpen(false);

  const editRowCurrentTable = (rowId: string) => {
    idRow.current = rowId;
    debugger;
    setOpen(true);
  };

  const removeRowCurrentTable = (rowId: string) => {
    idRow.current = rowId;
    dispatch(tablesSliceActions.removeValueToTable({
      idTable: table.id,
      rowId: idRow.current,
    }));
  };

  return (
      <>
        <Actions idTable={table.id}/>
        <TableContainer component={Paper} sx={styles.containerTable}>
          <Table>
            <TableHead sx={styles.tableHead}>
              <TableRow>
                {
                  table.headers.map((headerName, index) => (
                      <TableCell sx={styles.tableCell} key={`${headerName}${index}`}>
                        <Typography variant="caption" sx={styles.tableCellText}>
                          {headerName}
                        </Typography>
                      </TableCell>
                  ))
                }
                <TableCell sx={styles.tableCell}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table.rows.map((row) => (
                  <TableRow key={row.id} sx={styles.clearLastBorder}>
                    <TableCell sx={styles.tableCellBody}>
                      <Typography variant="caption">{row.name}</Typography>
                    </TableCell>
                    <TableCell sx={styles.tableCellBody}>
                      <Typography variant="caption">{row.surName}</Typography>
                    </TableCell>
                    <TableCell sx={styles.tableCellBody}>
                      <Typography variant="caption">{row.age}</Typography>
                    </TableCell>
                    <TableCell sx={styles.tableCellBody}>
                      <Typography variant="caption">{row.city}</Typography>
                    </TableCell>
                    <TableCell sx={styles.tableCellBody}>
                      <Box sx={styles.wrapperTableActions}>
                        <Typography variant="caption" sx={styles.actionsEdit} onClick={() => {
                          console.log('-- table.rows --', table.rows);
                          editRowCurrentTable(row.id);
                        }}>
                          Edit
                        </Typography>
                        <Typography variant="caption" sx={styles.actionsDelete} onClick={() => removeRowCurrentTable(row.id)}>
                          Delete
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ModalForm open={open} onHandleCloseModal={handleClose} idTable={table.id} idRow={idRow.current}/>
      </>
  );
};


export default TableItem;













