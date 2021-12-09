import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home'
import Login from './screens/login'
import Register from './screens/register'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}
      options={{
        header: ()=> null
      }}/>
      <Stack.Screen name='Login' component={Login}
      options={{
        header: ()=> null
      }}/>
      <Stack.Screen name='Register' component={Register}
      options={{
        header: ()=> null
      }}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}