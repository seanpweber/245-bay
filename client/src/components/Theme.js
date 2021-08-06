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
          mainOpacity: 'rgba(255, 255, 255, 0.75)',
      },
    },

    typography: {
        fontFamily: font,
        button: {
            textTransform: "none"
        }
    }

});

export default theme;