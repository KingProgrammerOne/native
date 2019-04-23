/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ImageBackground, View,Text, Image} from 'react-native';
//import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Explorer, Dream, Plan, Share Book,\n' +
    'All in one Place',
});
var bg=require('./src/img/bg.jpg');
var icon=require('./src/img/icon/muv.png');
// type Props = {};
export default class Splash extends Component {
  render() {
    return (
      // <Container>
         
      //   <Content>

      //       {/* <Image source={require('./src/img/icon/muv.png')} style={{height: 40, width: 40}}/> */}
      //     {/* <ImageBackground source={require('./src/img/bg.jpg')} style={{width: 100, height: 100}}/> */}

      //       {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
      //       <Text style={styles.instructions}>{instructions}</Text> */}
         
      //     {/* </ImageBackground> */}

      //   </Content>
            
      // </Container>
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Hello, world!</Text>
      //   <Image source={bg} style={{height: 40, width: 40}} />
      // </View>
       <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
          
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

           <Image source={icon} style={{height: 200, width: 180}} />

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
    color: '#333333',
    marginBottom: 5,
  },
});
