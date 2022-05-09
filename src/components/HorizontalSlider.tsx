import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Movies } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string;
    movies : Movies[];
}

const HorizontalSlider = ({title, movies}:Props) => {
    return (
        <View style={{height:(title) ? 250 :220  }}>

       { title &&  <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>{title}</Text>  }
          <FlatList
            data={movies}
            renderItem={({item}:any )=>  (<MoviePoster
                movie={item}
                width={140}
                height={200}
                /> ) }

            keyExtractor={(item) =>
              item.id.toString()
            }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          />




        </View >
    )
}

export default HorizontalSlider
