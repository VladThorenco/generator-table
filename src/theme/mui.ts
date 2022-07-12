import {withStyles} from '@material-ui/styles';
import {Tooltip} from '@material-ui/core';
import {Header3, Header4} from '@shared/hooks/typography';
import {createTheme} from '@mui/material';
import colors from '@styles/variables';

export const LightTooltip = withStyles({
  tooltip: {
    backgroundColor: colors.placeholderColor,
    color: colors.onSurfaceColor,
    boxShadow: '0px 1px 5px 0px #9DA5B933, 0px 3px 4px 0px #9DA5B91F, 0px 2px 4px 0px #9DA5B924',
    fontSize: '16px',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: '24px',
    padding: '13px 24px',
    fontWeight: 400,
    maxWidth: '600px',
  },
})(Tooltip);


export const theme = createTheme({
  palette: {
    primary: {
      main: '#00cea9',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d7f9f3',
      contrastText: '#00cea9',
    },
    error: {
      main: '#FF275B',
      contrastText: '#FF275B',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: colors.surfaceColor,
          },
          '& .MuiTypography-root': {
            marginBottom: '0',
          },
        },
        contained: {
          minWidth: '48px',
          borderRadius: '40px',
          padding: '12px 32px',
          textTransform: 'none',
          fontWeight: 500,
          whiteSpace: 'nowrap',
        },
        outlined: {
          borderRadius: '40px',
          padding: '12px 32px',
          textTransform: 'none',
          fontWeight: 500,
        },
        text: {
          borderRadius: '40px',
          textTransform: 'none',
          fontWeight: 500,
        },
        sizeLarge: {
          width: '280px',
          height: '48px',
        },
        sizeMedium: {
          width: '160px',
          height: '48px',
        },
        fullWidth: {
          width: '100%',
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: colors.blue,
        },
        icon: {
          color: colors.blue,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          minWidth: '48px',
          border: 'none',
          borderRadius: '40px!important',
          padding: '12px 32px',
          marginRight: '16px',
          textTransform: 'none',
          fontWeight: 500,
          color: '#00cea9',
          backgroundColor: '#d7f9f3',
          '&.Mui-selected': {
            backgroundColor: '#00cea9',
            color: '#fff',
            '&:hover': {
              backgroundColor: 'rgb(0, 144, 118)',
            },
          },
          '&:hover': {
            backgroundColor: 'rgb(150, 174, 170)',
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          width: '280px',
          height: '48px',
        },
        sizeMedium: {
          width: '160px',
          height: '48px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&.white': {
            width: '48px',
            height: '48px',
            background: colors.surfaceColor,
            borderRadius: '50%',
            marginRight: '16px',
          },
          '&.lightGreen': {
            width: '48px',
            height: '48px',
            background: colors.primaryColor,
            borderRadius: '50%',
            marginRight: '16px',
            '.icon': {
              color: '#fff',
            },
          },
          '&.disabled': {
            width: '48px',
            height: '48px',
            background: 'rgba(0, 0, 0, 0.12)',
            borderRadius: '50%',
            marginRight: '16px',
            '.icon': {
              color: '#fff',
            },
          },
          '&.bigLightRed': {
            width: '48px',
            height: '48px',
            background: '#fff',
            border: '1px solid #ff275b',
            borderRadius: '50%',
            '.icon': {
              color: '#fff',
            },
            '& .icon-ic_close': {
              color: '#ff275b',
            },
            '&:hover': {
              background: '#ff275b',
              '& .icon-ic_close': {
                color: '#fff',
              },
            },
          },
          '&.lightLargeRed': {
            width: '48px',
            height: '48px',
            background: '#ff275b',
            borderRadius: '50%',
            '.icon': {
              color: '#fff',
            },
          },
          '&.lightRed': {
            width: '32px',
            height: '32px',
            background: '#ff275b',
            borderRadius: '50%',
            '& .icon': {
              color: '#fff',
            },
          },
          '&.bigLightGreen': {
            width: '50px',
            height: '50px',
            background: '#fff',
            border: '1px solid #00cea9',
            borderRadius: '50%',
            '&:hover': {
              background: '#00cea9',
              '.icon': {
                color: '#fff',
              },
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&.MuiSelect-select': {
            padding: '16px 24px',
          },
        },
        icon: {
          marginRight: '18px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& > input.MuiOutlinedInput-input': {
            padding: '16.5px 24px',
          },
          '& > textarea.MuiOutlinedInput-input': {
            padding: '0 10px;',
          },

          borderRadius: '40px',
          '& legend span': {
            color: colors.onSurfaceColor,
            top: '-20px',
            display: 'block',
            position: 'absolute',
            opacity: 0,
          },
        },

      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
            padding: '7.5px 14px',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& > button': {
            marginRight: '-2px',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.MuiFormControl-root': {
            margin: '32px 0 20px 0',
          },
          '& .MuiInputLabel-root': {
            left: '10px',
          },
          width: '100%',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.onSurfaceColor,
          '&.MuiInputLabel-shrink': {
            top: '-8px',
            left: '10px',
            color: colors.onSurfaceColor,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          color: colors.onSurfaceColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
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
    h3: Header3,
    h4: Header4,
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
      fontSize: 14,
      fontWeight: 400,
      textTransform: 'none',
      lineHeight: 'inherit',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

