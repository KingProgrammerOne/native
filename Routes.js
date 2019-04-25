import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Hom.js'
import About from './About.js'

export default class Routes extends Component {

   render() { 
      return ( 
         <Router>
            <Scene key = "root">
               <Scene key = "home" component = {Home} title = "Home" initial = {true} />
               <Scene key = "about" component = {About} title = "About" />
            </Scene>
         </Router>
       );
   }
}
