//React
import React, { Component } from 'react'

//Styles
import { Container, Paper, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

//Dependencies
import { PropTypes } from 'prop-types'

export default function Card(props) {
   const useStyles = makeStyles({
      cardMargins: {
         marginTop: prop => prop.top
            ? '3rem'
            : '0',
      }
   })

   const classes = useStyles(props)


   return (
      <Container component='main' maxWidth={props.width}>
         <CssBaseline />
         <Paper elevation={6} className={classes.cardMargins}>{props.children}</Paper>
      </Container>
   )
}

Card.propTypes = {
   width: PropTypes.string,
   children: PropTypes.element,
}