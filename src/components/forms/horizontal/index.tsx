import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {styles} from './styles';
import FormSelect from 'shared/components/select';
import {selectData} from 'shared/components/select/selectData';

interface Props {
  formik: any;
}

const FormHorizontal = (props: Props): JSX.Element => {
  const {formik} = props;

  return (
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formHorizontal}>
          <Box sx={styles.wrapperFields}>
            <Box sx={styles.field}>
              <TextField name="name"
                         placeholder="Name"
                         variant="outlined"
                         size="medium"
                         fullWidth
                         value={formik.values.name}
                         error={formik.touched.name && !!formik.errors.name}
                         helperText={formik.touched.name && formik.errors.name}
                         onChange={formik.handleChange}
              />
              <TextField name="surName"
                         placeholder="Surname"
                         variant="outlined"
                         size="medium"
                         fullWidth
                         value={formik.values.surName}
                         error={formik.touched.surName && !!formik.errors.surName}
                         helperText={formik.touched.surName && formik.errors.surName}
                         onChange={formik.handleChange}
              />
            </Box>
            <Box sx={styles.field}>
              <TextField name="age"
                         placeholder="Age"
                         variant="outlined"
                         size="medium"
                         fullWidth
                         value={formik.values.age}
                         error={formik.touched.age && !!formik.errors.age}
                         helperText={formik.touched.age && formik.errors.age}
                         onChange={formik.handleChange}
              />
              <FormSelect items={selectData}
                          error={formik.touched.city && !!formik.errors.city}
                          name="city"
                          onHandleChange={formik.handleChange}
                          value={formik.values.city}/>
            </Box>
          </Box>
          <Button type="submit" fullWidth variant="contained">ADD</Button>
        </Box>
      </form>
  );
};

export default FormHorizontal;
