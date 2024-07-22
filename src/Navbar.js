// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher component

import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="Navbar">
        <ul>
          <li>
            <Link to="/pantry-items">{t('pantry-items')}</Link>
          </li>
          <li>
            <Link to="/meal-planner">{t('meal_planner')}</Link>
          </li>
          <li>
            <Link to="/favourite-recipes">{t('favourite_recipes')}</Link>
          </li>
          <li>
            <Link to="/shopping-list">{t('shopping_list')}</Link>
          </li>
        </ul>
        <LanguageSwitcher /> {/* Add the LanguageSwitcher here */}
    </nav>
  );
}

export default Navbar;