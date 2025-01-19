import Ingredient from "./Ingredient";


export default function BurgerStack({ stack, removeFromBurger }) {
    // This works but let's use a ternary
    // if (stack.length === 0) {
    //     return (
    //         <ul>
    //             <li>No Ingredients</li>
    //         </ul>
    //     );
    // }
    return (
        <ul>
            {stack.length === 0 ? (
                <li>No Ingredients</li>
            ) : (
             stack.map((ingredient, index) => (
                <Ingredient
                  key={`${ingredient.name}-${index}`}
                  ingredient={ingredient}
                  onClick={() => removeFromBurger(index)}
                  isAdd={false}
                  />
                // <li key={`${ingredient.name}-${index}`} style={{ backgroundColor: ingredient.color }}>
                //     <span>{ingredient.name}</span>
                //     <button onClick={() => removeFromBurger(index)}>-</button>
                // </li>
            ))
            )}
        </ul>
    );
}