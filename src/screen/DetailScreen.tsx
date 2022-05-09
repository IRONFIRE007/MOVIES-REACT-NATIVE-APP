import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image,StyleSheet, Dimensions,ScrollView, ActivityIndicator, TouchableOpacity  } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';
//import Icon from 'react-native-vector-icons/Ionicons'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'

 const screenHeight= Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

const DetailScreen = ({route, navigation}:Props) => {
  const movie = route.params ;
  const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

 

 const {isLoading,cast,movieFull } = useMovieDetails(movie.id);

 console.log({movieFull});

    return (
  

      <ScrollView>
          <View style={styles.imageBx} >

            {/* Bottom para cerrar */}

            <TouchableOpacity style={styles.arrow}
            onPress={() => navigation.pop()}
            >
            <Icon
            color='#fff'
            
        name='arrow-back-outline'
        size={50}
        />
            </TouchableOpacity>
       

      <Image
          source={{uri}}
         style={styles.image}
        />

      </View>
      
      <View style={styles.titleContainer}> 
      <Text style={styles.subTitle} > {movie.original_title} </Text>
       <Text style={styles.title} > {movie.title} </Text>
      </View>

   
      
        {

            isLoading ?  <ActivityIndicator
         size={35}
         color="grey"
         style={{marginTop:20}}
         
         />: <MovieDetails
         movieFull={movieFull!} cast={cast} />
        }
      
    


      </ScrollView>
         
    )
}

export default DetailScreen




const styles = StyleSheet.create({
    imageBx:{
        
        width: '100%',
        height: screenHeight * .7,
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.46,
    
    elevation: 10,
       
    
    },
    image: {
        flex: 1,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30
        
        
        
    },
    titleContainer: {
         marginHorizontal:20,
         marginTop:10,
    },
    subTitle:{
        fontSize:16,
        color: "#666",textAlign:'center'
    },
    title:{
      marginTop:5,
      marginBottom:5,
        fontSize:22,
        color:'#111',
        fontWeight:'bold',textAlign:'center'
    },
    arrow:{
      position:'absolute',
      zIndex:999,
      elevation:9,
      top:20,
      left:5,
      

    }
    
    
    })