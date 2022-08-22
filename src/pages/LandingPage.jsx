import { Search, MoviesGrid } from "../components"
import { useQuery, useDebounce } from "../hooks"

export const LandingPage = () => {
  const query = useQuery();
  const search = query.get('search');

  const debouncedSearch = useDebounce( search, 300);

  return (
    <div>
        <Search />
        <MoviesGrid key={ debouncedSearch } search={ debouncedSearch }/>
    </div>
  )
}
