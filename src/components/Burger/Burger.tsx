import { useState, type JSX } from "react";
import style from "./styles.module.css";

interface Ingredients {
crispyChicken: number;
cheese: number;
pickles: number;
lettuce: number;
sauce: number;

}

interface IngredientConfig {
key: keyof Ingredients;
label: string;
emoji: string;
}


const INGREDIENTS_CONFIG: IngredientConfig[] = [
  { key: "crispyChicken", label: "Chicken", emoji: "🍗" },
  { key: "cheese", label: "Cheese", emoji: "🧀"},
  { key: "pickles", label: "Pickles", emoji: "🥒" },
  { key: "lettuce", label: "Lettuce", emoji: "🥬" },
  { key: "sauce", label: "Sauce", emoji: "🥫" },
];

const initialIngredients: Ingredients = {
  crispyChicken: 0,
  cheese: 0,
  pickles: 0,
  lettuce: 0,
  sauce: 0,
};


export default function Burger(): JSX.Element {
    const [ingredients, setIngredients] = useState<Ingredients>(initialIngredients);

    function handleAddIngredient(key: keyof Ingredients): void {
        setIngredients((prev) => ({
            ...prev,
        [key]: prev[key] +1,

        }));
    }

    function handleEatAll(): void {
        setIngredients(initialIngredients);
    }

    return (
        <div>
            <h1 className={style.title}>Crispy Chicken Burger</h1>

            <img
            className={style.burgerImg}
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&h=675&q=80"
            alt="Crispy Chicken Burger"
            />
        <div className={style.ingredientsList}>
        <p> Булочка — основа</p>
        {INGREDIENTS_CONFIG.map(({ key, label, emoji }) => (
        <p key={key}>
            {emoji} {label}: {ingredients[key]}
        </p>
        ))}
    </div>

<div className={style.btnContainer}>
        {INGREDIENTS_CONFIG.map(({ key, label, emoji }) => (
        <button
            key={key}
            type="button"
            className={style.btn}
            onClick={() => handleAddIngredient(key)}
        >
            Add {label} {emoji}
        </button>
        ))}

        <button type="button" className={style.btn} style={{ backgroundColor: "#ff4d4f", color: "white" }} onClick={handleEatAll}>
        Всё съесть 🍽️
        </button>
    </div>
    </div>
);
}