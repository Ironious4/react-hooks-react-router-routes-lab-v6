import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Home() {
  const[movies, setMovies]= useState([]);

  useEffect(()=> {
    fetch('http://localhost:4000/movies')
    .then(r=>r.json())
    .then(data=>setMovies(data))
    .catch(error=>console.log(error));
  }, []);

 const movieList= movies.map(movie=> {
  return <MovieCard key={movie.id} movie={movie}/>
 });

  return (
    <>
      <header>
        <NavLink/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
