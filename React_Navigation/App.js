import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons } from '@expo/vector-icons'; 
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Univarsity from './screens/Univarsity';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome" screenOptions={{
    headerShown: false
  }}>
        <Drawer.Screen name="Home" component={MainTab} />
        <Drawer.Screen name="University" component={MainTab} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export  function MainTab({route}) {
  var initial_route;
  // initialze route name on when its come from drawer
  if(route.name== "University"){
    initial_route = "UnivarsityTab"
  }else{
    initial_route = "Home"
  }
  return (
      <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // set icon name for Active Tab and Inactive tab
          if (route.name === 'Welcome') {
            iconName = 'home';
          } else if (route.name === 'UnivarsityTab') {
            iconName = 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // decoration the bottom tab
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarActiveBackgroundColor:'#1c435c',
        tabBarInactiveBackgroundColor:'#1d73a8',
        tabBarLabel:route.name==='UnivarsityTab'?'University':'Home'
      })}
        initialRouteName={initial_route}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="UnivarsityTab" component={Univarsity}  />
      </Tab.Navigator>
  );
}