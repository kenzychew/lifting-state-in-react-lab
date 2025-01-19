import Ingredient from './Ingredient';

export default function IngredientList({ ingredients, onClick }) {
    return (
    <ul>
        {ingredients.map((ingredient, index) => (
            <Ingredient 
              key={`${ingredient.name}-${index}`}
              ingredient={ingredient}
              onClick={onClick}
              isAdd={true}
              />
            // <li key={`${ingredient.name}-${index}`} style={{ backgroundColor: ingredient.color }}>
            //     <span>{ingredient.name}</span>
            //     <button onClick={() => onClick(ingredient)}>+</button>
            // </li>
        ))}
    </ul>
    );
}