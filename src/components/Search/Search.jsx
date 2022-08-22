import styles from './Search.module.css';

import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../../hooks';

export const Search = () => {

    const query = useQuery();
    const search = query.get('search');

    const handleSubmit = e => {
        e.preventDefault();
    }
    
    const navigate = useNavigate();

  return (
    <form 
    className={ styles.searchContainer }
    onSubmit={ handleSubmit }
    >
        <div className={ styles.searchBox }>
            <input 
            type="text" 
            className={ styles.searchInput } 
            autoFocus
            placeholder='Title'
            aria-label='Search Movies'
            value={ search ?? '' }
            onChange={ ( e ) => {
                const value = e.target.value;
                navigate(`?search=${ value }`)
            }}  
            />
            <FaSearch size={ 50 } />
        </div>

    </form>
  )
}
