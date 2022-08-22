import styles from './MovieCard.module.css';

import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {

  const imagenUrl = `https://image.tmdb.org/t/p/w300${ movie.poster_path }`;

  return (
    <li className={ styles.movieCard }>
      <Link to={`/movies/${ movie.id }`}>
        <img 
        width={ 230 }
        height={ 345 }
        className={ styles.movieImage }
        src={ imagenUrl } alt={ movie.title } />

        <div>
            { movie.title }
        </div>
      </Link>
    </li>
  )
}
