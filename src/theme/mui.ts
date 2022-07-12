import {createTheme} from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1193FF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1193FF',
      contrastText: '#fff',
    },
    error: {
      main: '#EB5E58',
      contrastText: '#EB5E58',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: '12px',
          height: 'inherit',
          color: '#000000',
          padding: '9.5px',
          '&::placeholder': {
            color: '#868A8D',
            opacity: 1,
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          borderRadius: '4px',
          width: '100%',
          maxWidth: '248px',
          height: '42px',
          fontWeight: '700',
          fontSize: '12px',
        },
        sizeMedium: {
          width: '100%',
          maxWidth: '160px',
          height: '42px',
        },
        sizeSmall: {
          width: '100%',
          maxWidth: '90px',
          height: '24px',
          borderRadius: '2px',
        },
        text: {
          width: '0',
          height: '0',
        },
        fullWidth: {
          width: '100%',
          height: '42px',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '0',
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '16px'
        }
      }
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    body1: {
      letterSpacing: 0,
    },
    h2: {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: '60px',
      marginTop: '16px',
      marginBottom: '40px',
    },
    body2: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: 'none',
      textAlign: 'left',
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 500,
      textTransform: 'none',
      lineHeight: 'inherit',
      marginBottom: '16px',
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 400,
      textTransform: 'none',
      lineHeight: 'inherit',
      marginBottom: '16px',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      color: '#868A8D',
      textTransform: 'capitalize',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1920,
    },
  },
});

