//React
import React, { Component } from 'react';

//Styles
import { withStyles } from '@material-ui/styles';
import {
   Container,
   Paper,
   Typography,
   TextField,
   CssBaseline,
} from '@material-ui/core';

import axios from 'axios';

const styles = (style) => ({
   root: {},
});

class ImageUpload extends Component {
   render() {
      return (
         <Container component='main' maxWidth='sm'>
            <CssBaseline />
            <Paper elevation={6}>
               <div className='row'>
                  <form
                     action='/images'
                     method='post'
                     encType='multipart/form-data'>
                     <h3>React File Upload</h3>
                     <div className='form-group'>
                        <input type='file' name='image' />
                        <input type='title' name='title' />
                     </div>
                     <div className='form-group'>
                        <button className='btn btn-primary' type='submit'>
                           Upload
                        </button>
                     </div>
                  </form>
               </div>
            </Paper>
         </Container>
      );
   }
}

export default withStyles(styles)(ImageUpload);
