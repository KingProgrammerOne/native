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
import { Container, Header,Title, Content, Footer, FooterTab,Card,CardItem,Item, Input, Button, Left, Right, Body, Icon, Col, Row, Label, Text, Form, Grid, List, ListItem } from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
var bg=require('./src/img/1.jpg'); 
var myCard=require('./src/img/bg.jpg'); 
var myCard1=require('./src/img/sea.jpg'); 
var myCard2=require('./src/img/epel.jpg'); 
var icon=require('./src/img/icon/muv.png');
const items = ['Daniel Michael Blake Day-Lewis', 'Kiefer William Frederick Dempsey George Rufus Sutherland', 'Isabella Fiorella Elettra Giovanna Rossellini', 'Charles Philip Arthur George Mountbatten-Windsor', 'Johannes Chrysostomus Wolfgangus Theophilus Mozart'];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    Text.defaultProps.uppercase = false;
  }
  render() {
    return (
      <Container>
          {/* <ImageBackground source={bg} style={{width: '100%', height: 60}}> */}
          <Header style={styles.container}>
              
          <Item style={{width:'100%',height:35, backgroundColor:'white', borderRadius:5}}>
            <Icon active name='search' style={{fontSize:25, color:'#989898', paddingLeft:10}}/>
            <Input placeholder='Search'/>
            <Icon type='FontAwesome' name='sliders' style={{fontSize:16, color:'#989898'}} />
            <Icon type='FontAwesome' name='map' style={{fontSize:16, color:'#989898'}}/>
          </Item>

          </Header>
          {/* </ImageBackground>  */}
          <Content style={{backgroundColor:'black'}}>
            <View style={{marginLeft:50}}>
                    <Text style={{color:'white'}}>Al Personalized for you</Text>
            </View>
            <List dataArray={items}
            horizontal
            renderRow={(item) =>
              <ListItem style={{borderBottomWidth:0, borderWidth:0}}>
                {/* <Card >
                  <CardItem cardBody style={{backgroundColor:'black'}}>
                    <Image source={myCard1} style={{ width: 200, height: 200 }} resizeMode="contain" />
                  </CardItem>
                  <CardItem style={{ width: 200 , backgroundColor:'black'}}>
                    <Text numberOfLines={1} style={{color:'white'}}>{item}</Text>
                  </CardItem>
                </Card> */}
                <ImageBackground source={bg} style={{width:200, height:200}}>
                  {/* <View style={{marginLeft:50}}>
                    <Text numberOfLines={1}>{item}</Text>
                  </View> */}
                </ImageBackground>
                {/* <ImageBackground source={bg} style={{width:200, height:200}}>
                  <View style={{marginLeft:50}}>
                    <Text numberOfLines={1}>{item}</Text>
                  </View>
                </ImageBackground> */}
             </ListItem>
            }>
          </List>
          </Content>
        <Footer>            
            <FooterTab style={styles.footCss}>
            <Button vertical>
              <Icon type='Entypo' name='dots-three-horizontal' style={styles.footerIcon }></Icon>
              {/* <Text style={styles.iconText}>                       
              </Text> */}
            </Button>
            <Button vertical>
              <Icon type="MaterialIcons" name='hotel' style={styles.footerIcon}></Icon>
              <Text  style={styles.iconText}>
                        Hotel
              </Text>
            </Button>
            <Button vertical active>
              <Icon type="Entypo" name='aircraft' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        Flight
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='train' style={styles.footerIcon}></Icon>
                    <Text style={styles.iconText}>
                        Train
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='bus' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        Bus
                    </Text>
            </Button>
            <Button vertical>
                <Icon type="FontAwesome5" name='car-alt' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        car
                    </Text>
            </Button>
            <Button vertical>
                  <Icon type="FontAwesome" name='refresh' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
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
    justifyContent: 'center',
    backgroundColor:'black',

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
    width:'100%',
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
