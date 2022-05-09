import axios from 'axios';


const movieDB = axios.create({

  baseURL:'https://api.themoviedb.org/3/movie',
  params:{
      api_key:'41d2a47b8ed3d8b2390d34b9205bdf03',
      language : 'es-ES',
  }

});


export default movieDB;