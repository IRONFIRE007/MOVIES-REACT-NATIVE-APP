import React, { useRef } from 'react'
import { View,Animated, Button } from 'react-native'
import { useFade } from '../hooks/useFade'



export const FadeScreen = () => {

  const {opacity,fadeIn,fadeOut} = useFade();

    return (
        <View style={{flex:1, backgroundColor:'#c1c1c1',justifyContent:'center',alignItems: 'center'}} >
           <Animated.View
           style={{backgroundColor:'#884F6A',width:150,
           height:150,
           borderColor:'#fff',
           borderWidth:5,
           marginBottom:10,
           opacity:opacity
        }}
           />

  <Button
  title='FadeIn'
  onPress={()=>fadeIn()}
 
  />
   
   <Button
  title='FadeOut'
  onPress={()=>fadeOut()}
  />

        </View>
    )
}


