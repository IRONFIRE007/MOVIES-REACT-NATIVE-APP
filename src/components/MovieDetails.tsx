import React from 'react'
import { View, Text, FlatList } from 'react-native'
import currencyFormator from 'currency-formatter'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import { CastItem } from './CastItem'

interface Props {
    movieFull : MovieFull;
    cast : Cast[]
}

export const MovieDetails = ({movieFull, cast}:Props) => {
    return (
        <>
           <View  >

           <View style={{flexDirection:'row',justifyContent: 'center'}} >

                <Icon style={{marginLeft:10,}}
                name="star-outline"
                color ="#FFFF00"
                size={18}
                />
                <Text style={{marginLeft:10,color:'#000',textAlign:'center'}}>{movieFull.vote_average}</Text>


                 <Text style={{marginLeft:10,textAlign:'center'}}>{movieFull.genres.map(g => g.name)}</Text>
            </View>

             {/* Historia de la pelicula */}
              
              <Text style={{ fontSize:24, marginTop:10, fontWeight:'bold',textAlign:'center' }}>
               Historia
              </Text>

                 <Text style={{marginTop:10,textAlign:'center',marginBottom:10,fontSize:16}}> 
                     { movieFull.overview }
                 </Text>
                    
                   <View>

                   <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}} >
                        Presupuesto USD
                    </Text>

                    <Text  style={{textAlign:'center',marginTop:10}}>
                    { currencyFormator.format(movieFull.budget,{code:'USD'}) }
                    </Text>
                   </View>
           </View>

               {/* Casting */}
                

               <View style={{marginBottom:50}} >
                 
               <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',marginTop:10,marginBottom:10}} >
                        Actores
                    </Text>

                <FlatList
                
                data ={cast}
                keyExtractor={ (item) => item.id.toString() }
                renderItem={({item})  =>  <CastItem actor={item} /> }
                horizontal={true}
                showsHorizontalScrollIndicator={false}

                style={{marginTop:10,height:70}}
                />
               </View>
        </>
    )
}


