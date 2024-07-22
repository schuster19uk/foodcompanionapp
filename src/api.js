import axios from 'axios';
// import { FaBreadSlice, FaCube, FaEgg, FaGlassWhiskey } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_API_URL;

// User Authentication API
export const signup = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };
  
  export const login = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

// Recipes
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};

export const updateRecipe = async (id, recipeData) => {
  try {
    const response = await axios.put(`${API_URL}/recipes/${id}`, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    await axios.delete(`${API_URL}/recipes/${id}`);
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

// Ingredients
export const getIngredients = async () => {
  try {
    const response = await axios.get(`${API_URL}/ingredients`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    throw error;
  }
};


export const fetchIngredients = async () => {
  return [
    { name: 'flour', icon: 'FaBreadSlice' },
    { name: 'sugar', icon: 'FaCube' },
    { name: 'eggs', icon: 'FaEgg' },
    { name: 'milk', icon: 'FaGlassWhiskey' },
    { name: 'water', icon: 'FaGlassWhiskey' },
  ];
};

export const createIngredient = async (ingredientData) => {
  try {
    const response = await axios.post(`${API_URL}/ingredients`, ingredientData);
    return response.data;
  } catch (error) {
    console.error('Error creating ingredient:', error);
    throw error;
  }
};

export const getIngredientById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/ingredients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ingredient:', error);
    throw error;
  }
};

export const updateIngredient = async (id, ingredientData) => {
  try {
    const response = await axios.put(`${API_URL}/ingredients/${id}`, ingredientData);
    return response.data;
  } catch (error) {
    console.error('Error updating ingredient:', error);
    throw error;
  }
};

export const deleteIngredient = async (id) => {
  try {
    await axios.delete(`${API_URL}/ingredients/${id}`);
  } catch (error) {
    console.error('Error deleting ingredient:', error);
    throw error;
  }
};

// RecipeIngredients
export const getRecipeIngredients = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipe-ingredients`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe ingredients:', error);
    throw error;
  }
};

export const createRecipeIngredient = async (recipeIngredientData) => {
  try {
    const response = await axios.post(`${API_URL}/recipe-ingredients`, recipeIngredientData);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe ingredient:', error);
    throw error;
  }
};

export const getRecipeIngredientById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipe-ingredients/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe ingredient:', error);
    throw error;
  }
};

export const updateRecipeIngredient = async (id, recipeIngredientData) => {
  try {
    const response = await axios.put(`${API_URL}/recipe-ingredients/${id}`, recipeIngredientData);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe ingredient:', error);
    throw error;
  }
};

export const deleteRecipeIngredient = async (id) => {
  try {
    await axios.delete(`${API_URL}/recipe-ingredients/${id}`);
  } catch (error) {
    console.error('Error deleting recipe ingredient:', error);
    throw error;
  }
};