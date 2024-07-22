import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import IngredientItem from './IngredientItem';
import { FaTrashAlt } from 'react-icons/fa';
import { fetchIngredients } from './api';
import './PantryItems.css';

const translations = {
  en: {
    title: "Pantry Items",
    ingredients: {
      flour: "Flour",
      sugar: "Sugar",
      eggs: "Eggs",
      milk: "Milk",
      water: "Water",
    },
    remove: "Remove",
    searchPlaceholder: "Search Ingredients...",
  },
  es: {
    title: "Artículos de la despensa",
    ingredients: {
      flour: "Harina",
      sugar: "Azúcar",
      eggs: "Huevos",
      milk: "Leche",
      water: "Agua",
    },
    remove: "Eliminar",
    searchPlaceholder: "Buscar Ingredientes...",
  },
};

const PantryItems = () => {
  const [language, setLanguage] = useState('en');
  const [pantry, setPantry] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchIngredientsData = async () => {
      try {
        const data = await fetchIngredients();
        setIngredients(data);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchIngredientsData();
  }, []);

  const handleDrop = (item) => {
    if (!pantry.includes(item.name)) {
      setPantry((prevPantry) => [...prevPantry, item.name]);
    }
  };

  const handleRemove = (ingredient) => {
    setPantry(pantry.filter(item => item !== ingredient));
  };

  const t = translations[language];

  const filteredIngredients = ingredients.filter((ingredient) =>
    t.ingredients[ingredient.name]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [pantry]);

  return (
    <div className="pantry-items">
      <h1>{t.title}</h1>
      <input
        type="text"
        placeholder={t.searchPlaceholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="ingredients-grid">
        {filteredIngredients.map((ingredient) => (
          <IngredientItem
            key={ingredient.name}
            ingredient={ingredient.name}
            name={t.ingredients[ingredient.name]}
            iconName={ingredient.icon}
            isDraggable={!pantry.includes(ingredient.name)}
            isInPantry={false}
            isInIngredientsGrid={pantry.includes(ingredient.name)}
          />
        ))}
      </div>
      <div className="pantry-panel" ref={drop} style={{ backgroundColor: isOver ? '#e8f5e9' : '#fff' }}>
        <h2>Your Pantry</h2>
        {pantry.length === 0 && <p>No items in pantry</p>}
        <div className="pantry-grid">
          {pantry.map((item, index) => {
            const ingredientData = ingredients.find(ing => ing.name === item);
            return (
              <div
                key={index}
                className={`pantry-item in-pantry-item`}
              >
                <IngredientItem
                  ingredient={item}
                  name={t.ingredients[item]}
                  iconName={ingredientData ? ingredientData.icon : null}
                  isDraggable={false}
                  isInPantry={true}
                />
                <FaTrashAlt
                  className="delete-icon"
                  onClick={() => handleRemove(item)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="language-switcher">
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('es')}>Español</button>
      </div>
    </div>
  );
};

export default PantryItems;