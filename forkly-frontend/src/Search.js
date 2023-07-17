import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchRecipes } from './api';

function Search() { // Search component

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const recipes = await searchRecipes(query);
    navigate('/results', { state: { recipes } });
  }

  return (
    <form onSubmit={handleSearch}>
       <input 
         value={query}
         onChange={e => setQuery(e.target.value)}
       />
       <button type="submit">Search</button>
    </form>
  )
}

export default Search;