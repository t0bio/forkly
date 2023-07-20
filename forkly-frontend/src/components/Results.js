//import Searchbar from './components/Searchbar.js';
import axios from 'axios';

//const searchTerm = document.getElementById('search').value;
const searchRecipes = async (searchTerm) => {
    const apiKey = '02dc9c177b404c14ab292cdf12bf3418';
    const response = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${searchTerm}&number=10`);
    const data = await response.json();
    return data.results;
}

