import React, {useEffect,useState} from 'react'
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movies } from '../interfaces/movieInterface';

interface MoviesState{
  nowPlaying: Movies[];
  popular: Movies[];
  topRated: Movies[];
  upComing : Movies[];

}


export const useMovies = () =>{

    const [isLoading, setIsLoading] = useState(true)
    const [moviesStates, setMoviesStates] = useState<MoviesState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upComing:[],
    })
   

    const getMovies = async () => {

   const nowPlayingPromise= movieDB.get<MovieDBMoviesResponse>('/now_playing');
   const popularPromise= movieDB.get<MovieDBMoviesResponse>('/popular');
   const topRatedPromise= movieDB.get<MovieDBMoviesResponse>('/top_rated');
   const upComingPromise= movieDB.get<MovieDBMoviesResponse>('/upcoming');


 const resps = await Promise.all([
     nowPlayingPromise,
    popularPromise,
    topRatedPromise,
    upComingPromise])

    setMoviesStates({
        nowPlaying:resps[0].data.results,
        popular:resps[1].data.results,
        topRated:resps[2].data.results,
        upComing:resps[3].data.results
    })

 
        
   setIsLoading(false);
    }

    useEffect(() => {
        // Now_Movies
        getMovies();
    
        }, [])




        return{ 
           ...moviesStates,
            isLoading
        }

      
        
         
}

