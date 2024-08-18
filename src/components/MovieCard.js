import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <p>
          <Link to={`/movie/${movie.id}`}>Movie details</Link>
        </p>
    </article>
  );
};

export default MovieCard;