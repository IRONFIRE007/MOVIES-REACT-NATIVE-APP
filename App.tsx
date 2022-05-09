import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screen/FadeScreen';
import { GradientProvider } from './src/context/GrandientContext';

const AppState = ({children} :any) =>{

return(

  <GradientProvider>
       {children}
  </GradientProvider>
)


}


const App = () => {
  return (
    <NavigationContainer>
        <AppState>
          {/* <FadeScreen/> */}
        <Navigation/>
        </AppState>
    </NavigationContainer>
  )
}

export default App
