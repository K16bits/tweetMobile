import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/login';
import Home from './src/screens/home';
import Message from './src/screens/Message';

import { FontAwesome,Ionicons, AntDesign} from '@expo/vector-icons';
import theme from './src/themes/theme';

const Tab = createBottomTabNavigator()

const color = theme.icon.color1

function MyTabs() {
    return (
      <Tab.Navigator 
      screenOptions={{
        "headerShown":false,
        "tabBarShowLabel": false,
      }}
      >
        <Tab.Screen name="Login" component={Login}
          options={{
            tabBarIcon:()=>(
              <FontAwesome name="home" color={color} size={26} />
            )
          }}/>

        <Tab.Screen name="Message" component={Message}
          options={{
            tabBarIcon:()=>(
              <AntDesign name="message1" color={color} size={26}/>
            )
          }}/>

        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon:()=>(
              <Ionicons name="people" color={color} size={26}/>
            )
          }}/>

      </Tab.Navigator>
    );
}
function Router(){
    return(
        <NavigationContainer >
            <MyTabs/>
        </NavigationContainer>
    );
}
export default Router;
