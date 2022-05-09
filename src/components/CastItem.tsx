import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Cast } from '../interfaces/creditsInterface'


interface Props {

  actor: Cast  
}


export const CastItem = ({actor}:Props) => {

    const uri= `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
       <View style={ style.actorBx }>
          
          {

              actor.profile_path && (
                <Image
                source={{uri}}
                style={style.image}
                />
              )
          }

         <View  style={ style.actor}>

             
            <Text style={ style.name
             } > {actor.name} </Text>

    <Text style={style.papel} > {actor.character} </Text>
        </View>

       </View>
    )
}




const style = StyleSheet.create({

actorBx:{
    flexDirection:'row',
    marginLeft:10,
    borderRadius:10,
    height:60,
    backgroundColor:'#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7.46,
    
    elevation: 3,
       marginRight:10,
       paddingRight:5
},

image : {
        width:60,
        height:60,
        borderRadius:10
    },


    name:{
        fontSize:16,fontWeight:'bold'
    },

    papel:{
          fontSize:14,
          opacity:.7
    },

    actor:{

        marginLeft:10 
    }

 


})