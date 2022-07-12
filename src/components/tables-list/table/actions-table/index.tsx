import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, IconButton, Typography} from '@mui/material';
import Close from 'shared/components/icons/close';
import {TableId} from 'constants/enum';
import {tablesSliceActions} from 'reducers/tables';
import RootState from '@reducers/tables/interface';
import {styles} from './styles';
import {v4} from 'uuid';

interface Props {
  idTable: string | number;
}

const Actions = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const {listTable} = useSelector((state: RootState) => state.tables);
  const {idTable} = props;

  const copyTable = useCallback(() => {
    listTable.forEach((table) => {
      if (table.id === idTable) {
        const newTable = {
          ...table,
          id: v4(),
        };
        dispatch(tablesSliceActions.copyTable({
          table: newTable,
          idTable
        }));
      }
    });
  }, [dispatch, idTable, listTable]);

  const deleteTable = useCallback(() => {
    listTable.forEach((table) => {
      if (table.id === idTable) {
        dispatch(tablesSliceActions.deleteTable({
          idTable
        }));
      }
    });
  }, [dispatch, idTable, listTable]);

  return (
      <Box sx={styles.actionsContainer}>
        <Box sx={styles.actionsCopy} onClick={copyTable}>
          <Button variant="contained" size="small">
            <Typography variant="caption" color="white">Copy table</Typography>
          </Button>
        </Box>
        {
            idTable !== TableId.ROOT && (
                <IconButton color="error" size="small" onClick={deleteTable}>
                  <Close/>
                </IconButton>
            )
        }
      </Box>
  );
};


export default Actions;













