import React from 'react';
import {Box, Button, TextField} from '@mui/material';
import {styles} from './styles';
import FormSelect from 'shared/components/select';
import {selectData} from 'shared/components/select/selectData';

interface Props {
  formik: any;
}

const FormVertical = (props: Props): JSX.Element => {
  const {formik} = props;

  return (
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formVertical}>
          <TextField name="name"
                     placeholder="Name"
                     variant="outlined"
                     size="medium"
                     error={formik.touched.name && !!formik.errors.name}
                     helperText={formik.touched.name && formik.errors.name}
                     value={formik.values.name}
                     onChange={formik.handleChange}
          />
          <TextField name="surName"
                     placeholder="Surname"
                     variant="outlined"
                     size="medium"
                     error={formik.touched.surName && !!formik.errors.surName}
                     helperText={formik.touched.surName && formik.errors.surName}
                     value={formik.values.surName}
                     onChange={formik.handleChange}
          />
          <TextField name="age"
                     placeholder="Age"
                     variant="outlined"
                     size="medium"
                     error={formik.touched.age && !!formik.errors.age}
                     helperText={formik.touched.age && formik.errors.age}
                     value={formik.values.age}
                     onChange={formik.handleChange}
          />
          <FormSelect items={selectData}
                      error={formik.touched.city && !!formik.errors.city}
                      name="city"
                      onHandleChange={formik.handleChange}
                      value={formik.values.city}/>
          <Button type="submit" variant="contained" size="large">ADD</Button>
        </Box>
      </form>
  );
};

export default FormVertical;
