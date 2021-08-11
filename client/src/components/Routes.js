//React
import React from 'react'
import { Route, useLocation, Switch } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import styled, { keyframes } from 'styled-components'
import { zoomInLeft } from 'react-animations'

//Styles
import { withStyles } from '@material-ui/styles'

//Components
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import SignIn from './SignIn'
import ImageUpload from './ImageUpload'

const styles = () => ({
   fill: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
   },
})

const ZoomLeft = styled.div`
   animation: 2s ${keyframes`${zoomInLeft}`};
`

function AnimatedRoutes() {
   const classes = styles()
   let location = useLocation()

   return (
      <div>
         <SwitchTransition>
            <CSSTransition key={location.key} classNames='fade' timeout={300}>
               <Switch location={location}>
                  <Route path='/home' component={Home} />
                  <Route path='/aboutus' component={About} />
                  <Route path='/gallery' component={Gallery} />
                  <Route path='/contactus' component={Contact} />
                  <Route path='/admin/signin' component={SignIn} />
                  <Route path='/admin/upload' component={ImageUpload} />
               </Switch>
            </CSSTransition>
         </SwitchTransition>
      </div>
   )
}

export default withStyles(styles)(AnimatedRoutes)
