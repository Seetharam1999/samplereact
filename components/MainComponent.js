import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import About from './AboutComponent'
import Dishdetail from './DishDetailedComponent'
import{View, Platform} from 'react-native';
import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
const MenuNavigator=createStackNavigator({
  Menu:{screen:Menu,
    navigationOptions:({navigation})=>({
        headerLeft:
          <Icon name="menu" size={24}
              color="White"
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
              color="White"
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
              color="White"
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
              color="White"
              onPress={()=>navigation.toggleDrawer()}
          />
  })
});


const MainNavigator = createDrawerNavigator({
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
      
    }
}, {
drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {
  
render() {
 
    return (
        
        <View style={{flex:1,paddingTop:Platform.OS==='ios'?0:10}}>
            <MainNavigator />
        </View>
    );
  }
}
  
export default Main;