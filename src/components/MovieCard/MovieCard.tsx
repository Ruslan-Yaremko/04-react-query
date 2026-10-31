import type { Movie } from "../../types/movie";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

export default function MovieCard({ movie, onSelect }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://placehold.co/500x750?text=No+Image";

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.posterButton}
        onClick={() => onSelect(movie)}
        aria-label={`Show details for ${movie.title}`}
      >
        <img className={styles.poster} src={posterUrl} alt={movie.title} />
      </button>

      <h2 className={styles.title}>{movie.title}</h2>

      <p className={styles.rating}>Rating: {movie.vote_average.toFixed(1)}</p>

      <p className={styles.overview}>{movie.overview}</p>
    </article>
  );
}
