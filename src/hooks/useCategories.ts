// import { useState } from 'react';
// import { APP_NAME } from '../consts/app-consts';
// import { safeJsonParse } from '../helpers/json.helpers';
// import type { Categories } from '../types';

// const KEY = `${APP_NAME}_categories`;

// const defaultCategories: Categories = {
//     Ropa: '#ec4899',
//     'Baño / Higiene': '#22c55e',
//     Cocina: '#eab308',
// };

// const uncategorized: Categories = {
//     'Sin categorizar': '#6e11b0',
// };

// function isValidCategories(value: unknown): value is Categories {
//     return (
//         typeof value === 'object' &&
//         value !== null &&
//         !Array.isArray(value) &&
//         Object.values(value).every((v) => typeof v === 'string')
//     );
// }

// export function useCategories() {
//     const [categoriesObj, setCategoriesObj] = useState(() => {
//         const parsed = safeJsonParse(localStorage.getItem(KEY), defaultCategories);
//         const base = isValidCategories(parsed) ? parsed : defaultCategories;
//         return { ...uncategorized, ...base };
//     });

//     const saveCategories = (cats: Categories) => {
//         const merged = { ...uncategorized, ...cats };
//         setCategoriesObj(merged);
//         localStorage.setItem(KEY, JSON.stringify(merged));
//     };

//     const addCategory = (name: string, color: string) => {
//         if (name === 'Sin categorizar') return;
//         const newCategories = { ...categoriesObj, [name]: color };
//         saveCategories(newCategories);
//     };

//     // Devuelve un array ordenado de categorías listo para select
//     const categories = Object.entries(categoriesObj).sort(([nameA], [nameB]) => {
//         if (nameA === 'Sin categorizar') return -1;
//         if (nameB === 'Sin categorizar') return 1;
//         return nameA.localeCompare(nameB);
//     });

//     return { categories, saveCategories, addCategory };
// }
