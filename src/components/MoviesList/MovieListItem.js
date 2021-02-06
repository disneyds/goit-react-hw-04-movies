import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesListItem = ({ movie, getType, type = null, location }) => {
  return (
    <Link
      to={{
        pathname: `/movies/${movie.id}`,
        state: {
          from: location,
        },
      }}
      onClick={() => {
        if (type) {
          getType(type);
        } else {
          getType(movie.media_type);
        }
      }}
    >
      <li className={s.item}>
        <div className={s.imageBox}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={
              movie.name ||
              movie.title ||
              movie.original_name ||
              movie.original_title
            }
          />
          <div className={s.overlay}>
            <i className={`material-icons ${s.materialIcons}`}>thumb_up</i>
            <span className={s.rating}>{movie.vote_average}</span>
            <i className={`material-icons ${s.materialIcons}`}>group</i>
            <span className={s.rating}>{movie.vote_count}</span>
          </div>
          {movie.media_type === 'movie' ? (
            <i className={`material-icons ${s.movieIcon}`}>movie</i>
          ) : null}
          {movie.media_type === 'tv' ? (
            <i className={`material-icons ${s.movieIcon}`}>subscriptions</i>
          ) : null}
        </div>

        <p className={s.name}>
          {movie.name ||
            movie.title ||
            movie.original_name ||
            movie.original_title}
        </p>
      </li>
    </Link>
  );
};

export default withRouter(MoviesListItem);
