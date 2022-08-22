import { MoviesGrid } from "./components/MoviesGrid"
import styles from './App.module.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

const App = () => {
  return (
  <BrowserRouter>

  <div>
        <header>
            <Link to='/'>
              <h1 className={ styles.title }>Movies</h1>
            </Link>
            <br />
        </header>

        <main>
        <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/movies/:id" element={ <MovieDetails/> } />
        </Routes>
        </main>
        
    </div>
  </BrowserRouter>
  )
}

export default App