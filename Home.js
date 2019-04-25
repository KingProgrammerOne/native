/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://oblador.github.io/react-native-vector-icons/
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, ImageBackground,View, TextInput} from 'react-native';
import { Container, Header,Title, Content, Footer, FooterTab,Card,CardItem, Button, Left, Right, Body, Icon, Col, Row, Label, Text, Form, Grid } from 'native-base';
import { Actions } from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
var bg=require('./src/img/1.jpg'); 
var myCard=require('./src/img/bg.jpg'); 
var icon=require('./src/img/icon/muv.png');


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    Text.defaultProps.uppercase = false;
  }
  goToAbout = () => {
           Actions.about()
        }
  render() {
    return (
      <Container>
        
          <Content>
            <ImageBackground source={bg} style={{width: '100%', height: 500}}>
              <View style={{marginLeft:50}}>
                <Image source={icon} style={{height: 80, width: 80}} />
              </View>
              <View style={styles.btnTextCol}>
                    <View>
                        <TextInput placeholder='Choose your first destination' style={styles.inputBox1} />
                    </View>
                     <View> 
                      <Button success style={styles.btn} title='Search'>
                        <Icon name='search' style={{fontSize:60}} />
                      </Button>
                     </View> 
              </View>

            </ImageBackground>          

              <Card>
                <CardItem style={{backgroundColor:'black'}}>
                <Left>
                  <Body>
                    <Text style={{fontSize:30, color:'white'}}>My Trips</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={myCard} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
          </Content>
        
        <Footer>            
            <FooterTab style={styles.footCss}>
            <Button vertical>
              <Icon  type='Entypo' name='dots-three-horizontal' style={styles.footerIcon}></Icon>
            </Button>
            <Button vertical onPress = {goToAbout}>
              <Icon type="MaterialIcons" name='hotel' style={styles.footerIcon}></Icon>
              <Text numberOfLines={1} style={styles.iconText}>
                        Hotel
              </Text>
            </Button>
            <Button vertical active>
              <Icon type="Entypo" name='aircraft' style={styles.footerIcon}></Icon>
                    <Text numberOfLines={1} style={styles.iconText}>
                        Flight
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='train' style={styles.footerIcon}></Icon>
                    <Text numberOfLines={1} style={styles.iconText}>
                        Train
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='bus' style={styles.footerIcon}></Icon>
                    <Text numberOfLines={1} style={styles.iconText}>
                        Bus
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='car-alt' style={styles.footerIcon}></Icon>
                    <Text numberOfLines={1} style={styles.iconText}>
                        car
                    </Text>
            </Button>
            <Button vertical>
                  <Icon type="FontAwesome5" name='reply-all' style={styles.footerIcon}></Icon>
                    <Text numberOfLines={1} style={styles.iconText}>
                        All
                    </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'

  },
  btnTextCol:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
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
  inputBox1:{
    height:40,
    backgroundColor:'white',
    margin: 20
  },
  btn:{
    width:100,
    height:100,
    margin:10,
    alignSelf: 'center',
    justifyContent:'center',    
  },
  footCss:{
    backgroundColor:'#1F3239'
    
  },
  footerIcon:{
    fontSize: 19,
    color:'white'
  },
  iconText: {
    fontSize: 12,
    color:'white',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop:5,
  },
});
// import React from 'react'
// import { TouchableOpacity, Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';

// const Home = () => {
//    const goToAbout = () => {
//       Actions.about()
//    }
//    return (
//       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
//          <Text>This is HOME!</Text>
//       </TouchableOpacity>
//    )
// }
// export default Home