import type { Movie } from "../../types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <article>
      {posterUrl && <img src={posterUrl} alt={movie.title} />}

      <h2>{movie.title}</h2>

      <p>Rating: {movie.vote_average.toFixed(1)}</p>

      <p>{movie.overview}</p>
    </article>
  );
}
