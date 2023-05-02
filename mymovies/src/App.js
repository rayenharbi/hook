import React, { useState } from 'react';
import'./App.css';

import { Routes, Route} from 'react-router-dom';
import Add from './component/Add';
import Search from './component/Search';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';
function App()  {
  const [keysearch,setKeysearch] = useState("")
  const [rating,setRating] = useState(1)
  const[movies,setMovies]= useState ([

  { id:1,
    title: "American Psycho",
      description: "wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      rate: 4.5,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 2,
      title: "Django Unchained",
      description: "The story follows an enslaved black man who trains under a German bounty hunter, with the ultimate goal of reuniting with his long-lost wife",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
      rate: 3.8,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 3,
      title: "The Great Gatsby",
      description: " it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
      rate: 4.8,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 4,
      title: "Catch Me If You Can",
      description: "The screenplay by Jeff Nathanson is based on the semi-autobiographical book of the same name of Frank Abagnale, who claims that before his 19th birthday, he successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg",
      rate: 4.2,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 5,
      title: "Fight Club",
      description: " it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      rate: 3.5,
    },
    {id: 6,
      title: "Blade Runner 2049",
      description: " It is based on the 1996 novel of the same name by Chuck Palahniuk",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
      rate: 5,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 7,
      title: "The Maze Runner",
      description: "a group of 50 amnesiac boys live in a clearing (called the Glade; they're called Gladers) that is in turn surrounded by an intricate maze.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
      rate: 3.6,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 8,
      title: "Deadpool",
      description: "Deadpool is a highly trained assassin and mercenary.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      rate: 5.6,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id:9 ,
      title: "The Fast and the Furious: Tokyo Drift",
      description: "The Fast and the Furious: Tokyo Drift is a 2006 action film directed by Justin Lin and written by Chris Morgan. It is the standalone sequel to The Fast and the Furious (2001) and 2 Fast 2 Furious (2003) and is the third main installment in the Fast & Furious franchise.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
      rate: 4.6,
    },
    {id: 10 ,
      title: "2 Fast 2 Furious",
      description: "2 Fast 2 Furious is a 2003 action film directed by John Singleton from a screenplay by Michael Brandt and Derek Haas, based on a story by Brandt, Haas, and Gary Scott Thompson. It is the sequel to The Fast and the Furious (2001).",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      rate:7.5,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
    {id: 11 ,
      title: "Fury",
      description: "The film portrays US tank crews fighting in Germany during the final weeks of the European theater of World War II.",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SX300.jpg",
      rate: 7.6,
      trailer:"https://www.youtube.com/watch?v=5YnGhW4UEhc",
    },
  
])

const getData=(text)=> {
  setKeysearch(text)
}
const dataRate =(rate)=> {
  setRating(rate)
}

const addMovie=(newMovie)=>{
  setMovies([...movies,newMovie])
}
console.log('addmovies:',  movies )
return (
  <div className="App">
    <Search getData={getData} dataRate={dataRate}  />
    <Add addMovie={addMovie} />

<Routes>
        <Route  path="/" element={<MovieList
        addMovie={addMovie}
        movies={movies.filter(
          (el)=>
          el.rate >= rating &&
          el.title.toLowerCase().includes(keysearch.toLowerCase())
        )}
        />} />
        <Route path="/movie/:id" element={<MovieDetails movie={movies}/>} />
      
      </Routes>
  </div>
);
}

export default App