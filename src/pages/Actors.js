import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Actors() {
  const[actor, setActor]= useState({});
  const params=useParams();
  const actorId= params.id;

  useEffect(()=> {
    fetch(`https://localhost:4000/actors/${actorId}`)
    .then(r=>r.json())
    .then(data=>setActor(data))
    .catch(error=>console.log(error));
  }, [actorId]);

  if(!actor.name) {
    return <h1>Loading...</h1>
  }



  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Actors Page</h1>
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

export default Actors;
