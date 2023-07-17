import { useLocation } from 'react-router-dom';

function Results() {
  
  const { state } = useLocation();
  const { recipes } = state;

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} />
        </div>
      ))}
    </div>
  )
}

export default Results;