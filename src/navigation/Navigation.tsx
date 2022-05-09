import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import { Movies } from '../interfaces/movieInterface';

export type RootStackParams ={
  HomeScreen:undefined;
  DetailScreen: Movies;
}

const Stack = createStackNavigator<RootStackParams>();


export const  Navigation =() =>{
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
      cardStyle:{
        //backgroundColor:'#fff'
      }
    }}
    
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      
    </Stack.Navigator>
  );
}