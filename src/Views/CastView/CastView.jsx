import { fetchMovieCredits } from '../../Services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import image from '../../images/no-image.png';

export default function CastView() {
  const { movieID } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieID).then(setCast);
  }, [movieID]);

  return (
    <>
      {cast && (
        <ul>
          {cast.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = image;
                }}
                width={200}
                height={250}
                alt={actor.name}
                loading="lazy"
              />
              <p>{actor.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
