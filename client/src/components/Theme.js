import { createTheme } from '@material-ui/core';

const font = "'Raleway', sans-serif";

const theme = createTheme({
    palette: {

      primary: {
          main: '#0277bd',
          mainGradient: 'linear-gradient(25deg, #339ba5 20%, #015384 80%)',
          mainGradientReverse: 'linear-gradient(25deg, #015384 20%, #339ba5 80%)',
      },
      secondary: {
          main: '#c62828',
          mainGradient: 'linear-gradient(25deg, #ff7043 20%, #c62828 80%)',
          mainGradientReverse: 'linear-gradient(25deg, #c62828 20%, #ff7043 80%)',
      },
      lucent: {
          main: '#ffffff',
          mainGradient: 'linear-gradient(25deg, #b6b6b6 20%, #f0f0f0 80%)',
          mainOpacity: 'rgba(230, 230, 230, 0.85)',
      },
    },

    typography: {
        fontFamily: font,
        button: {
            textTransform: "none"
        }
    },

    overrides: {
        MuiPaper: {
            rounded: {
                background: 'rgba(230, 230, 230, 0.85)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        },
        MuiButton: {
            root: {
                borderRadius: "2rem",
            }
        }
    }

});

export default theme;