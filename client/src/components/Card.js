//React
import React, { Component } from 'react'

//Styles
import { Container, Paper, CssBaseline } from '@material-ui/core'

//Dependencies
import { PropTypes } from 'prop-types'

class Card extends Component {
   render() {
      return (
         <Container component='main' maxWidth={this.props.width}>
            <CssBaseline />
            <Paper elevation={6}>{this.props.children}</Paper>
         </Container>
      )
   }
}

Card.propTypes = {
   width: PropTypes.string,
   children: PropTypes.element,
}

export default Card
