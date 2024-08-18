import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Directors() {
  const[director, setDirector]= useState({});
  const params=useParams();
  const directorId= params.id;

  useEffect(()=> {
    fetch(`https://localhost:4000/directors/${directorId}`)
    .then(r=>r.json())
    .then(data=>setDirector(data))
    .catch(error=>console.log(error));
  }, [directorIdId]);

  if(!director.name) {
    return <h1>Loading...</h1>
  }




  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        <article>
          <h2>

          </h2>
          <ul>

          </ul>
        </article>
      </main>
    </>
  );
};

export default Directors;
