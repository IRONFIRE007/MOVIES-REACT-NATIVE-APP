import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';
import { View,ActivityIndicator, Dimensions} from 'react-native'
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GrandientContext';

 const { width :windowWidth} =Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying,popular, topRated,upComing,isLoading} = useMovies();
    const {top}= useSafeAreaInsets();

    const { SetColors } = useContext(GradientContext)

    const navigator = useNavigation();


    const getImageColor = async(index:number) =>{
        const movie = nowPlaying[index];
        const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
       
        
        const colors = await ImageColors.getColors(uri, { })


      const [primary ='#fff',secondary='#fff'] = await getImageColors(uri);

          console.log({primary,secondary});
           SetColors({primary,secondary});
    }
        

  useEffect(() => {
      if(nowPlaying.length>0){

        getImageColor(0);
      }
      
  }, [nowPlaying])

 //  console.log( nowPlaying[0]?.id);


   if(isLoading){
   return(
  
  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}} > 

       <ActivityIndicator color="aqua" size={80} />
  </View>

   )

    
}
   
    return (

        <GradientBackground >
    

            <ScrollView>
    
    
        {/* Carrusel Principal */}
            <View style={{marginTop:top +20,}}  >
              
               <View style={{height:440}}>
               <Carousel
               data={nowPlaying}
               renderItem={({item}:any )=>  <MoviePoster
                movie={item}
                />  }
               sliderWidth={windowWidth}
               itemWidth={300}
               inactiveSlideOpacity={.9}
               onSnapToItem={ index => getImageColor(index) }
               />
               </View>
    
           {/* Peiculas Populares  */}
    
    
            <HorizontalSlider title="Popular" movies={popular}/>
    
            <HorizontalSlider title="Top" movies={topRated}/>
    
            <HorizontalSlider title="Proximas" movies={upComing}/>
            
    
            </View>
    
            </ScrollView>

     
   </GradientBackground>
    )
}

export default HomeScreen
