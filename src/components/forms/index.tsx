import React from 'react';
import {Box} from '@mui/material';
import {ModeModal} from 'constants/enum';
import FormVertical from 'components/forms/vertical';
import FormHorizontal from 'components/forms/horizontal';

interface Props {
  mode: 'vertical' | 'horizontal';
  formik: any;
}

const Form = (props: Props): JSX.Element => {
  const {mode, formik} = props;

  const renderForm = () => {
    switch (mode) {
      case ModeModal.HORIZONTAL:
        return <FormHorizontal formik={formik}/>;
      case ModeModal.VERTICAL:
        return <FormVertical formik={formik}/>;
    }
  };

  return (
      <Box className="Form">
        {renderForm()}
      </Box>
  );
};

export default Form;
