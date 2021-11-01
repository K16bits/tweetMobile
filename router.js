import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/screens/login';
import Home from './src/screens/home';
import Friends from './src/screens/Friends';

import {Ionicons, AntDesign} from '@expo/vector-icons';
import theme from './src/themes/theme';

const color = theme.icon.color1

const Tab = createBottomTabNavigator()
function MyTabs() {
    return (
      <Tab.Navigator 
      screenOptions={{
        "headerShown":false,
        "tabBarShowLabel": true,
        }}
        >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon:()=>(
              <AntDesign name="message1" color={color} size={26}/>
            )
          }}/>

        <Tab.Screen name="Friends" component={Friends}
          options={{
            tabBarIcon:()=>(
              <Ionicons name="people" color={color} size={26}/>
            )
          }}/>

      </Tab.Navigator>
    );
}

const control = false;

function Router(){
    return(
        <NavigationContainer >
            {control ? <MyTabs/> : <Login/>}
        </NavigationContainer>
    );
}
export default Router;
