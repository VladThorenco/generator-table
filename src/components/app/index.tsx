import React from 'react';
import {Box} from '@mui/material';
import './App.css';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {FormVerticalState} from 'components/forms/vertical/interface';
import TablesList from 'components/tables-list';
import Form from 'components/forms';
import {tablesSliceActions} from 'reducers/tables';
import {styles} from './styles';
import {v4} from 'uuid';
import {validationsSchema} from 'components/forms/validate';
import RootState from '@reducers/tables/interface';

const App = () => {
  const dispatch = useDispatch();
  const {listTable} = useSelector((state: RootState) => state.tables);
  const formik = useFormik({
    initialValues: {
      name: '',
      surName: '',
      age: '',
      city: '',
    } as FormVerticalState,
    validationSchema: validationsSchema,
    onSubmit: values => {
      if (!listTable.length) {
        const table = {
          id: 'root',
          headers: ['Name', 'Surname', 'Age', 'City'],
          rows: [{
            id: v4(),
            ...values
          }],
        };
        dispatch(tablesSliceActions.createTable({table}));
      } else {
        dispatch(tablesSliceActions.addValueToTable({
          id: v4(),
          ...values
        }));
      }
      formik.resetForm();
    }
  });

  return (
      <Box className="App">
        <Form mode="vertical" formik={formik}/>
        <TablesList/>
        <Box sx={styles.wrapForm}>
          <Form mode="horizontal" formik={formik}/>
        </Box>
      </Box>
  );
};

export default App;
