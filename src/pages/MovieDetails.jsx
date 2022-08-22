import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, getMovieImg } from '../utils';

import styles from './MovieDetails.module.css';

export const MovieDetails = () => {

  const { id } = useParams();
  const [ isLoading, setIsLoading ] = useState( true );
  const [ movie, setMovie ] = useState( null );
  
  useEffect(() => {
    setIsLoading( true );
    get(`/movie/${ id }`).then( ( data ) => {
      setMovie( data );
      setIsLoading( false );
    });
  }, [ id ])
  
  if ( isLoading ) {
    return <h2>CARGANDO...</h2>;
  }
  
  const imagenUrl = getMovieImg( movie.poster_path, 500 );

  return (
    <div className={ styles.detailsContainer }>
        <img
        className={`${ styles.col } ${ styles.movieImage }`}
        src={ imagenUrl } alt={ movie.title } />
        <div
        className={ styles.col }
        >
            <p><strong>Title</strong>: { movie.title }</p>
            <p><strong>Description</strong> : { movie.overview }</p>
            <p>
                {
                    movie.genres.map( genre => genre.name ).join(', ')
                }
            </p>
        </div>
    </div>
  )
}
