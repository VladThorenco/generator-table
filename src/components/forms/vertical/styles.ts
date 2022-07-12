import colors from 'styles/variables';

export const styles = {
  formVertical: {
    display: 'flex',
    flexDirection: 'column',
    background: colors.white,
    padding: '20px 16px',
    marginBottom: '40px 0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
    maxWidth: '280px',
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
  }
};
