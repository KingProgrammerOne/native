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
import { Container, Header,Title, Content, Footer, FooterTab,Card,CardItem,Item, Input,List,ListItem, Button, Left, Right, Body, Icon, Col, Row, Label, Text, Form, Grid } from 'native-base';


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
const items = [{place:'ROME', day:"3 days", pic: require('./src/img/1.jpg')}, 
               { place:'New YORK', day:"21-25", pic:require('./src/img/bg.jpg')},
               { place:'LONDON', day:"25-29 Mar", pic:require('./src/img/sea.jpg')},
               { place:'PARIS', day:"5 days", pic:require('./src/img/epel.jpg')},
];


export default class DestinationList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    Text.defaultProps.uppercase = false;
  }
  render() {
    return (
      <Container>

            <Header style={styles.container}>
              
              <Item style={{width:'100%',height:35, backgroundColor:'white', borderRadius:5}}>
                <Icon active name='search' style={{fontSize:25, color:'#989898', paddingLeft:10}}/>
                <Input placeholder='Search'/>
                <Button transparent style={styles.switchBtn}>
                  <Icon type='FontAwesome' name='sliders' style={{fontSize:16, color:'#989898'}} />
                </Button>
                <Button transparent style={styles.switchBtn}>
                  <Icon type='FontAwesome' name='map' style={{fontSize:16, color:'#989898'}}/>
                </Button>
              </Item>
    
              </Header>
          <Content style={{backgroundColor:'black'}}>
            <List dataArray={items}
            vertical
            renderRow={(item) =>
              <ListItem style={{borderBottomWidth:0, borderWidth:0, paddingLeft:0, paddingRight:0,paddingTop:5, paddingBottom:5, marginLeft:0}}>

                <ImageBackground source={item.pic} style={{width:'100%', height:200}}>
                  <View style={{marginLeft:50}}>
                    <Text style={{backgroundColor:'white', color:'black'}}>{item.place}</Text>
                  </View>
                </ImageBackground>

             </ListItem>
            }>
          </List>
          </Content>
        <Footer>            
            <FooterTab style={styles.footCss}>
            <Button vertical>
              <Icon type="AntDesign" name='earth' style={styles.footerIcon}></Icon>
              <Text  style={styles.iconText}>
                        Explorer
              </Text>
            </Button>

            <Button vertical active>
              <Icon type="Entypo" name='camera' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        My Trips
                    </Text>
            </Button>

            <Button vertical>
                <Icon type="FontAwesome" name='heart-o' style={styles.footerIcon}></Icon>
                    <Text style={styles.iconText}>
                        My bucket List
                    </Text>
            </Button>

            <Button vertical>
                <Icon type="Entypo" name='user' style={styles.footerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        Profile
                    </Text>
            </Button>
            
            <Button vertical>
              <Icon type='Entypo' name='dots-three-horizontal' style={styles.footerIcon }></Icon>
              {/* <Text style={styles.iconText}>                       
              </Text> */}
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
    backgroundColor:'#D7E0E7',
    
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
    backgroundColor:'#fff',
   
  },
  footerIcon:{
    fontSize: 19,
    color:'#000'
  },

  iconText: {
    fontSize: 12,
    color:'#000',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop:5,
  },
  switchBtn:{
    paddingTop:0,
    paddingBottom:10, 
    borderWidth:0,
    shadowOpacity:0, 
    elevation:0,
  }

});
