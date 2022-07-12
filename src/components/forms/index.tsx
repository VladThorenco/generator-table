import React from 'react';
import {Box} from '@mui/material';
import {ModeModal} from 'constants/enum';
import ModalVertical from 'components/forms/vertical';
import ModalHorizontal from 'components/forms/horizontal';

interface Props {
  mode: 'vertical' | 'horizontal';
}

const Form = (props: Props): JSX.Element => {
  const {mode} = props;

  const renderForm = () => {
    switch (mode) {
      case ModeModal.HORIZONTAL:
        return <ModalHorizontal/>;
      default:
        return <ModalVertical/>;
    }
  };

  return (
      <Box className="Modal">
        {renderForm()}
      </Box>
  );
};

export default Form;
