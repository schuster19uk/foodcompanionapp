import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const PantryPanel = ({ pantry, handleDrop, handleRemove, translations }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.INGREDIENT,
    drop: (item) => handleDrop(item.ingredient),
  }));

  return (
    <div ref={drop} className="pantry-panel">
      <h2>Your Pantry</h2>
      <div className="pantry-grid">
        {pantry.length === 0 && <p>No items in pantry</p>}
        {pantry.map((item, index) => (
          <div key={index} className="pantry-item">
            {translations.ingredients[item]}
            <button onClick={() => handleRemove(item)}>{translations.remove}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantryPanel;