import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';

const IngredientItem = ({ ingredient, name, iconName, isDraggable, isInPantry, isInIngredientsGrid }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (iconName) {
      import(`react-icons/fa`).then((icons) => {
        setIcon(React.createElement(icons[iconName]));
      }).catch(error => {
        console.error(`Error importing icon: ${iconName}`, error);
      });
    }
  }, [iconName]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'INGREDIENT',
    item: { name: ingredient },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [ingredient]);

  return (
    <div
      ref={isDraggable ? drag : null}
      className={`ingredient-item ${isInPantry ? 'in-pantry' : ''} ${isInIngredientsGrid ? 'ingredient-grid' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default IngredientItem;