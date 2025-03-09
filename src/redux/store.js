import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice'; // Импорт редьюсера для темы
import productsReducer from './productsSlice'; // Импорт редьюсера для продуктов

const store = configureStore({
    reducer: {
        theme: themeReducer, // Редьюсер для управления темой
        products: productsReducer, // Редьюсер для управления продуктами
    },
});

export default store;