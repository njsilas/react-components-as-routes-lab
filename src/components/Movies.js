import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    
    <div>
       <h1>Movies Page</h1>
       <ul>
         {movies.map(movie =>(
           <div>
              <ul>
              <li>{movie.title}</li>
             <li>{movie.metascore}</li> 
              <li>{movie.time}</li>
              <li>{movie.genres}</li>
                </ul> 
           </div>
         ))}
       </ul>
       
    </div>
  );
};

export default Movies;
// <h1>{movie.title}</h1>
    //{movie.title}</br>
    //{movie.metascore}</br>
      //</br>
      //ul{}
