/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * format
 * flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ImageBackground, View,Text, Image} from 'react-native';
//import Routes from './Routes.js'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Explorer, Dream, Plan, Share Book,\n' +
    'All in one Place ',
});
var bg=require('./src/img/bg.jpg'); 
var icon=require('./src/img/icon/muv.png');

//type Props = {};

export default class App extends Component{
  render() {
    return (

       <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>

          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

           <Image source={icon} style={{height: 150, width: 150}} />

            <Text style={styles.instructions}>{instructions}</Text>
        
          </View>
      </ImageBackground> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  },
});
