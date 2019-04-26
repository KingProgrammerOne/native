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


export default class DestinationPage extends Component {
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
            <ImageBackground  source={items[0].pic} style={{ height: 140, width:"100%"}}> 
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

                <Item style={{borderBottomWidth:0, justifyContent:'center',alignSelf:'center',  marginTop:0}}>

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

                <Item style={styles.footCss}>

                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="MaterialIcons" name='hotel' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        stay
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="Entypo" name='camera' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        see
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="FontAwesome" name='glass' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        eat
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="Entypo" name='drink' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        drink
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="Entypo" name='shopping-cart' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        shop
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="MaterialCommunityIcons" name='run' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        play
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="FontAwesome5" name='spa' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        relax
                    </Text>
                </Button>
                <Button vertical style={{backgroundColor:'#F3F7FA'}}>
                    <Icon type="FontAwesome5" name='seedling' style={styles.headerIcon}></Icon>
                    <Text  style={styles.iconText}>
                        watch
                    </Text>
                </Button>

                </Item>

              </Header>
            </ImageBackground>
          <Content style={{backgroundColor:'#E3E4E5'}}>
            <List dataArray={items}
            vertical
            renderRow={(item) =>
              <ListItem style={{marginLeft:0, width:'100%',height:170, backgroundColor:'#fff', marginTop:5, paddingBottom:0, paddingTop:0}}>

                  <View style={{borderColor:'white', borderWidth:2, backgroundColor:'green', width:'40%', height:'100%'}}>
                    <Image source={item.pic} style={{width:'100%', height:'100%',}}/>
                    <Text style={{
                        position:'absolute',
                        left:20,
                        top:15,
                        fontSize:30,
                        color:'#fff',
                        textShadowColor:'#000',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10

                    }}                              
                    >{item.id}</Text>
                  </View>

                  {/* content */}
                  <View style={{ width:'60%', height:'100%', paddingLeft:10, paddingTop:5, paddingBottom:5,paddingRight:5, flexDirection:'column'}}>
                    <View style={{backgroundColor:'transparent', width:'100%',flexDirection:'row'}}>
                      <View style={{backgroundColor:'transparent', width:'85%',paddingLeft:10}}>
                        <Text style={{backgroundColor:'transparent'}}>{item.title}</Text>
                        <View style={{backgroundColor:'transparent', height:25, marginTop:10,}}>
                          <Grid >
                            <Col>
                              <Image source={require('./src/star/starGold.png')} style={{ width:100, height:20, left:0}} />
                              <View style={{
                                      //position: 'absolute',                                
                                      backgroundColor: '#fff',
                                      marginTop:-20,
                                      marginLeft:this.state.score*20,
                                      width: 100- this.state.score*20,
                                      height: 20,
                                    }}
                                    />
                              {/* <Image source={require('./src/star/starBlack.png')} style={{ width:100, height:20,marginTop:-30, paddingBottom:20,}} /> */}
                              <View style={{
                                      //position: 'absolute',                                  
                                      backgroundColor: 'transparent',
                                      marginTop:-10,
                                      width: this.state.score*20,
                                      height: 20,
                                    }}
                                    />
                            </Col>
                            <Col style={{width:'30%'}}>
                              <Text>({item.score})</Text>
                            </Col>
                          </Grid>
                        </View>
                      </View>

                      {/* ribbon */}
                      <View style={{ width:'15%',}}>
                        <Text style={{backgroundColor:'transparent', color:'black'}}><Icon name='heart'/></Text>
                      </View>
                    </View>

                    <View style={{paddingLeft:10,paddingTop:10, backgroundColor:'transparent'}}>                      
                      <Text><Icon type='FontAwesome' name='map-marker'/> {item.geo}</Text>
                    </View>
                    <View style={{paddingLeft:10, flexDirection:'row', marginTop:10}}>
                      <Text style={{backgroundColor:'#000', color:'#fff', marginRight:5}}>{item.btn[0]}</Text>
                      <Text style={{backgroundColor:'#E3E4E5', borderColor: '#000', borderWidth:1}}>{item.btn[1]}</Text>
                    </View>

                  </View>


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
    height:150,
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
