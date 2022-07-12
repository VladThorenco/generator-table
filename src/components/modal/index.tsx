import React from 'react';
import {Box, Modal} from '@mui/material';
import {useFormik} from 'formik';
import {FormVerticalState} from '@components/forms/vertical/interface';
import {tablesSliceActions} from 'reducers/tables';
import {useDispatch, useSelector} from 'react-redux';
import FormVertical from 'components/forms/vertical';
import RootState, {RowTable} from '@reducers/tables/interface';
import {styles} from './styles';

interface Props {
  open: boolean;
  onHandleCloseModal: () => void;
  idTable: string;
  idRow: string;
}

const ModalForm = (props: Props): JSX.Element => {
  const {listTable} = useSelector((state: RootState) => state.tables);
  const dispatch = useDispatch();
  const {onHandleCloseModal, open, idRow, idTable} = props;

  const currentRow = listTable.reduce((acc, table) => {
    if (table.id === idTable) {
      table.rows.forEach((row: RowTable) => {
        if (row.id === idRow) {
          acc = {...row};
        }
      });
    }
    return acc;
  }, {} as RowTable);

  const formik = useFormik({
    initialValues: {
      id: currentRow?.id,
      name: currentRow?.name,
      surName: currentRow?.surName,
      age: currentRow?.age,
      city: currentRow?.city,
    } as FormVerticalState,
    enableReinitialize: true,
    onSubmit: values => {
      dispatch(tablesSliceActions.editValueToTable({
        editRow: values,
        idTable: idTable,
        rowId: idRow,
      }));
      onHandleCloseModal();
    }
  });

  return (
      <Modal open={open} onClose={onHandleCloseModal}>
        <Box sx={styles.containerModal}>
          <FormVertical formik={formik}/>
        </Box>
      </Modal>
  );
};

export default ModalForm;
