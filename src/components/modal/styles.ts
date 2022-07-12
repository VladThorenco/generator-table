import colors from 'styles/variables';

export const styles = {
  modalFrom: {
    display: 'flex',
    flexDirection: 'column',
    background: colors.white,
    padding: '20px 16px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px',
    maxWidth: '280px'
  },
  containerModal: {
    width: '100%',
    maxWidth: '280px',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 'none',
    background: 'white',
    border: 'none',
    '&:focus-visible': {
      outline: 'none',
    }
  }
};
