import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import Dishdetail from './DishDetailedComponent'
import Reservation from './ReservationComponent';
import Favorites from './FavoritesComponent';
import sampleCard from './sampleCard';
import Login from './LoginComponent';
import{View, Platform,Image,StyleSheet, ScrollView,Text,NetInfo,ToastAndroid} from 'react-native';
import {createStackNavigator,createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
import {Icon} from 'react-native-elements';

import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreator';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})
const MenuNavigator=createStackNavigator({
  Menu:{screen:Menu,
    navigationOptions:({navigation})=>({
        headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
        
    })
},
  Dishdetail:{screen:Dishdetail}  
},{
  initialRouteName:'Menu',
  navigationOptions:{
    headerStyle:{
      backgroundColor:"#512DA8"
    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      color:"#fff"
    }
  }
});
const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});

const ContactNavigator = createStackNavigator({
  Contact: { screen:Contact }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});
const AboutNavigator = createStackNavigator({
  About: { screen:About }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff",
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});
const ReservationNavigator = createStackNavigator({
  Home: { screen: Reservation }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});

const sampleNavigator = createStackNavigator({
  Home: { screen: sampleCard }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});
const FavoritesNavigator = createStackNavigator({
  Home: { screen: Favorites }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});
const LoginNavigator = createStackNavigator({
  Home: { screen: Login }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#512DA8"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff" ,
    headerLeft:
          <Icon name="menu" size={24}
              color="white"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});
const ContentDrawerCustemNavigator=(props)=>(
  <ScrollView>
    <SafeAreaView style={styles.Container} 
    forceInset={{top:'always',horizontal:'never'}}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
            <Image source={require('./images/logo.png')} style={styles.drawerImage}/>

          </View>
          <View style={{flex:2}}><Text style={styles.Headertext}>
            Ristorante Con Fusion
            </Text></View>
        </View>
        <DrawerItems {...props}/>
      </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Login: 
    { screen: LoginNavigator,
      navigationOptions: {
        title: 'Login',
        drawerLabel: 'Login',
        drawerIcon:({tintColor})=>(
          <Icon 
            name='sign-in'
            type="font-awesome"
            size={24}
            color={tintColor}
            />
        )
      }
    },
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon:({tintColor})=>(
          <Icon 
            name='home'
            type="font-awesome"
            size={24}
            color={tintColor}
            />
        )
      }
    },
    About:{
      screen:AboutNavigator,
      navigationOptions:{
        title:"About Us",
        drawerLabel:'About Us'
        ,
        drawerIcon:({tintColor})=>(
          <Icon 
            name='info-circle'
            type="font-awesome"
            size={24}
            color={tintColor}
            />
        )
      }
    
  },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon:({tintColor})=>(
          <Icon 
            name='list'
            type="font-awesome"
            size={22}
            color={tintColor}
            />
        )
      }, },
  Contact:{
        screen:ContactNavigator,
        navigationOptions:{
          title:"Contact us",
          drawerLabel:'Conatct us',
          drawerIcon:({tintColor})=>(
            <Icon 
              name='address-card'
              type="font-awesome"
              size={22}
              color={tintColor}
              />
          )
        }
      
    },
    Favorites:{
      screen:FavoritesNavigator,
      navigationOptions:{
        title:'MY Favorites ',
        drawerLabel:'MY Favorites',
        drawerIcon:({tintColor})=>(
          <Icon 
            name="heart"
            type="font-awesome"
            size={24}
            iconStyle={{color:tintColor}}
            />
        )
      }
    },
    Reservation:{
      screen:ReservationNavigator,
      navigationOptions:{
        title:'Reservation Table',
        drawerLabel:'Reservation Table',
        drawerIcon:({tintColor})=>(
          <Icon 
            name="cutlery"
            type="font-awesome"
            size={24}
            iconStyle={{color:tintColor}}
            />
        )
      }
    },
    sampleCard:{
      screen:sampleNavigator,
      navigationOptions:{
        title:'sample Card',
        drawerLabel:'sample Card',
        drawerIcon:({tintColor})=>(
          <Icon 
            name="cutlery"
            type="font-awesome"
            size={24}
            iconStyle={{color:tintColor}}
            />
        )
      }
    }
}, {
  initialRouteName:'Home',
drawerBackgroundColor: '#D1C4E9',
contentComponent:ContentDrawerCustemNavigator
});

class Main extends Component {


  
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    
    NetInfo.getConnectioninfo()
      .then((connectionInfo)=>
      {
        ToastAndroid.show('Initial Network Connectivity Type:'
        +connectionInfo.type+'effectiveType:'+connectionInfo.effctiveType,
        ToastAndroid.LONG )
      });
      NetInfo.addEventListener('connectionChange',this.handleConnectivityChange);
  }
  componentWillUnmount(){
    NetInfo.removeEventListener('connectionChange',this.handleConnectivityChange);
  }
  handleConnectivityChange=(connectionInfo)=>{
    switch (connectionInfo.type){
        case 'none':
          ToastAndroid.show('you are now offline',ToastAndroid.LONG);
          break;
        case 'wifi':
          ToastAndroid.show('you are now connected to wifi',ToastAndroid.LONG);
          break;
        case 'cellular':
          ToastAndroid.show('you are now connected to cellular',ToastAndroid.LONG);
          break;
        case 'unknown':
          ToastAndroid.show('you now have an unknown  connection!',ToastAndroid.LONG);
          break;
        default:
          break;


    }
  }
render() {
 
    return (
        
        <View style={{flex:1, paddingTop:Platform.OS==='ios'?0:10}}>
            <MainNavigator />
        </View>
    );
  }
}

const styles=StyleSheet.create({
  Container:{
    flex:1
  },
  drawerHeader:{
    backgroundColor:'#512DA8',
    height:140,
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    flexDirection:'row'
  },
  Headertext:{
    color:'white',
    fontSize:24,
    fontWeight:'bold'
  },
  drawerImage:{
    margin:10,
    width:80,
    height:60
  }


});
  
export default connect(mapStateToProps, mapDispatchToProps)(Main);