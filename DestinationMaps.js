/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://oblador.github.io/react-native-vector-icons/
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Image, ImageBackground,View, TextInput} from 'react-native';
import { Container, Header,Title, Content, Footer, FooterTab,Card,CardItem,Item, Input,List,ListItem, Button, Left, Right, Body, Icon, Label, Text, Form } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
var bg=require('./src/img/ne.jpeg'); 
var myCard=require('./src/img/bg.jpg'); 
var myCard1=require('./src/img/sea.jpg'); 
var myCard2=require('./src/img/epel.jpg'); 
var icon=require('./src/img/icon/muv.png');
const items = [{ id:1,title:'ROME New YORK',    score: 2.2, geo: 'Roman, NY', btn:['MIDTOWN','SIGHT'], pic: require('./src/img/New_York_City_044.jpg')}, 
               { id:2,title:'Indonesia See of KaaNew YORK', score: 4.5, geo: 'New york,NY', btn:['MIDTOWN','LANDMARK'],pic:require('./src/img/bg.jpg')},
               { id:3,title:'LONDON',  score: 5, geo: 'London,NY', btn:['MIDTOWN','BUILDING'],pic:require('./src/img/sea.jpg')},
              
];


export default class DestinationMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 2.5
    };
    Text.defaultProps.uppercase = false;
    
  }
  componentWillMount(){
   
  }
  render() {
    return (
      <Container>
            <ImageBackground  source={items[0].pic} style={{ height: 90, width:"100%"}}> 
              <Header style={styles.container}>

                <Item style={{width:'100%',height:35, backgroundColor:'white', borderRadius:5, marginTop:10}}>

                  <Button transparent style={styles.switchBtn}>   
                    <Icon  name='search' style={{fontSize:25, color:'#989898', paddingLeft:0}}/>
                  </Button>
                  <Input placeholder='Search'/>

                  <Button transparent style={styles.switchBtn}>   
                    <Icon type='FontAwesome' name='sliders' style={{fontSize:16, color:'#989898'}} />
                  </Button>

                  <Button transparent style={styles.switchBtn}>
                    <Icon type='FontAwesome' name='map' style={{fontSize:16, color:'#989898'}}/>
                  </Button>

                </Item>

                <Item style={{borderBottomWidth:0, justifyContent:'center',alignSelf:'center',marginTop:0}}>

                  <Left style={{width:'20%'}}>
                    <Button transparent style={{marginBottom:0}}>
                      <Icon type='FontAwesome5' name='plus' style={{color:'#fff'}} />
                    </Button>
                  </Left>

                  <Body style={{width:"80%", alignSelf:'center', marginRight:30}}>
                    <Title style={{
                        width:'100%',
                        alignSelf:'center',
                        textAlign:'center',
                        color:'#fff', 
                        textShadowColor:'#000',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                        fontSize:25}}> New York City</Title>
                  </Body>

                  {/* <Right/> */}

                </Item>                
              </Header>
            </ImageBackground>
          <Content style={{backgroundColor:'#E3E4E5'}}>
            
          </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:90,
    alignItems: 'center',
    backgroundColor:'transparent',
     elevation: 0,             // Remove shadow on Android
     shadowOpacity: 0  ,       // Remove shadow on iOS
   //  flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    
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
    borderBottomWidth:0
  },
  headerIcon:{
    fontSize: 19,
    color:'#000'
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
