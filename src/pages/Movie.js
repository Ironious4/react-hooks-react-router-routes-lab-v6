import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const[movie, setMovie]= useState({});
  const params=useParams();
  const movieId= params.id;

  useEffect(()=> {
    fetch(`https://localhost:4000/movies/${movieId}`)
    .then(r=>r.json())
    .then(data=>setMovie(data))
    .catch(error=>console.log(error));
  }, [movieId]);

  if(!movie.name) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Title</h1>
        <p>Time</p>
        <span>Genres</span>
      </main>
    </>
  );
};

export default Movie;
