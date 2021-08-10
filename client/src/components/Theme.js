import { createTheme } from '@material-ui/core';

const font = "'Raleway', sans-serif";

const theme = createTheme({
   palette: {
      primary: {
         main: '#49141E',
         mainGradient: 'linear-gradient(25deg, #5C1C2F 20%, #350C0C 80%)',
         mainGradientReverse:
            'linear-gradient(25deg, #350C0C 20%, #5C1C2F 80%)',
      },
      secondary: {
         main: '#15163B',
         mainGradient: 'linear-gradient(25deg, #122A3E 20%, #0B0C27 80%)',
         mainGradientReverse:
            'linear-gradient(25deg, #0B0C27 20%, #122A3E 80%)',
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
         textTransform: 'none',
      },
   },

   overrides: {
      MuiPaper: {
         rounded: {
            background: 'rgba(230, 230, 230, 0.85)',
            marginTop: '3rem',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         },
      },
      MuiButton: {
         root: {
            borderRadius: '1.05rem',
         },
      },
      MuiDivider: {
         root: {
            marginTop: '0.5rem',
            marginBottom: '0.7rem',
         },
      },
      MuiAvatar: {
         root: {
            background: '#c62828',
         }
      }
   },
});

export default theme;
