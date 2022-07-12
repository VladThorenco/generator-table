import colors from 'styles/variables';
import {theme} from 'theme/mui';

export const styles = {
  formHorizontal: {
    display: 'flex',
    flexDirection: 'column',
    background: colors.white,
    padding: '20px 16px',
    margin: '40px 0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
    '& .MuiFormControl-root': {
      '& .MuiFormHelperText-root': {
        marginLeft: '5px',
      }
    },
    '& input': {
      '&:focus::-webkit-input-placeholder': {color: 'transparent'},
      '&:focus:-moz-placeholder': {color: 'transparent'},
      '&:focus::-moz-placeholder': {color: 'transparent'},
      '&:focus:-ms-input-placeholder': {color: 'transparent'},
    }
  },
  wrapperForm: {
    width: '100%',
    height: '100%'
  },
  wrapperFields: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 0,
    },
  },
  field: {
    width: '100%',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  }
};
