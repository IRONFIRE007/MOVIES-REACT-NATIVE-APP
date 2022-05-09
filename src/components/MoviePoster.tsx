import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movies } from '../interfaces/movieInterface'

interface Props {

    movie : Movies;
    height?:number;
    width?:number;
}


const MoviePoster = ({movie,height=420,width=300}:Props) => {

    const uri= `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<StackNavigationProp<any, any>>();

    return (
        <TouchableOpacity
        activeOpacity={.8}
    style={{width, height, marginHorizontal :2,paddingBottom:20,paddingHorizontal:5}} 
              onPress={()=> navigation.navigate('DetailScreen',movie)
            }
              >

            <View style={styles.imageBx} >

            <Image
              source={{uri}}
             style={styles.image}
            />
            </View>
            
        </TouchableOpacity>
    )
}

export default MoviePoster

const styles = StyleSheet.create({

image: {
    flex: 1,
    borderRadius:20,
    
},
imageBx:{
    flex: 1,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.46,
    
    elevation: 10,

}


})