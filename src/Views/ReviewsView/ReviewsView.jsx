import { fetchMovieReviews } from '../../Services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function ReviewView() {
  const { movieID } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieID).then(setReview);
  }, [movieID]);

  const showReview = review && review.results.length !== 0;

  return (
    <div>
      {showReview ? (
        <ul>
          {review.results.map(result => (
            <li key={result.id}>
              <p>{result.author}</p>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no review</p>
      )}
    </div>
  );
}
