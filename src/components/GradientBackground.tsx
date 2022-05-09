import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View,  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GrandientContext'
import { useFade } from '../hooks/useFade'

interface Props {
    children : JSX.Element | JSX.Element[] 
}

 export const GradientBackground = ({children} :Props) => {

    const {colors,prevcolors,SetPrevColors } = useContext(GradientContext )

    const { opacity,fadeIn,fadeOut } =  useFade()

 useEffect(() => {
  
    fadeIn( () =>{
        
      
        SetPrevColors(colors);
        fadeOut(0);
    } );
    
 }, [colors])



    return (
        <View style={{flex:1}} >
           <LinearGradient
             colors={[prevcolors.primary,prevcolors.secondary,'#FFF']}
              style={{...StyleSheet.absoluteFillObject}}
              start={{x:.1, y:.1}}
              end={{x:.5, y:.7}}
           />

           <Animated.View style={{...StyleSheet.absoluteFillObject, opacity }} 
           
           >

           <LinearGradient
             colors={[colors.primary,colors.secondary,'#FFF']}
              style={{...StyleSheet.absoluteFillObject}}
              start={{x:.1, y:.1}}
              end={{x:.5, y:.7}}
           />

               
           </Animated.View>
               {children }
        </View>
    )
}


