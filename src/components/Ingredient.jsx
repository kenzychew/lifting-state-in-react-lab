export default function Ingredient({ ingredient, onClick, isAdd }) {
    return (
        <li style={{ backgroundColor: ingredient.color }}>
            <span>{ingredient.name}</span>
            {/* Conditional rendering */}
            <button onClick={() => onClick(ingredient)}>{isAdd ? "+" : "-"}</button>
        </li>
    );
}