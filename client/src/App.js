//React
import { React, Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
} from 'react-router-dom';

//Styles
import { ThemeProvider, withStyles } from '@material-ui/styles';

//Components
import BodyGrid from './components/BodyGrid';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routes from './components/Routes';

//Theme
import theme from './components/Theme';

const styles = () => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
      },
      '*::-webkit-scrollbar-track': {
         '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      },
      '*::-webkit-scrollbar-thumb': {
         backgroundColor: 'rgba(0,0,0,.1)',
         outline: '1px solid slategrey',
      },
   },
});

let comps = ['home', 'about', 'gallery', 'contact'];

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         home: true,
         about: false,
         gallery: false,
         contact: false,
      };
   }

   handleChange = (index) => {
      for (let i = 0; i < comps.length; i++) {
         if (this.state[comps[i]]) {
            this.setState({
               [comps[i]]: false,
            });
         }
      }

      this.setState({ [index]: true });
      console.log([index] + ' component is open');
   };

   render() {
      styles();

      return (
         <Router>
            <div className='App'>
               <ThemeProvider theme={theme}>
                  <Nav transition={this.handleChange} />
                  <BodyGrid>
                     <Switch>
                        <Route exact path='/'>
                           <Redirect to='/home' />
                        </Route>
                        <Route path='*'>
                           <Routes />
                        </Route>
                     </Switch>
                  </BodyGrid>
                  <Footer transition={this.handleChange} />
               </ThemeProvider>
            </div>
         </Router>
      );
   }
}

export default withStyles(styles)(App);
