//React
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

//Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import BodyGrid from './components/BodyGrid';

//Theme
import theme from './components/Theme';

const styles =  makeStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: 0,
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

function App() {
  const classes = styles();

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Nav />
          <BodyGrid />
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
