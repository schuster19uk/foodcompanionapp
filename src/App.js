// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import PantryItems from './PantryItems';
import MealPlanner from './MealPlanner';
import FavouriteRecipes from './FavouriteRecipes';
import ShoppingList from './ShoppingList';
import './i18n'; // Import i18n configuration

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/pantry-items" element={<PantryItems />} />
            <Route path="/meal-planner" element={<MealPlanner />} />
            <Route path="/favourite-recipes" element={<FavouriteRecipes />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </div>
      </DndProvider>
    </Router>
  );
}

export default App;