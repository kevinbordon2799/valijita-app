import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { APP_NAME } from '../consts/app-consts';
import { safeJsonParse } from '../helpers/json.helpers';
import type { Categories } from '../types';

const KEY = `${APP_NAME}_categories`;

const defaultCategories: Categories = {
    Ropa: '#ec4899',
    'Baño / Higiene': '#22c55e',
    Cocina: '#eab308',
};

const uncategorized: Categories = {
    'Sin categorizar': '#6e11b0',
};

interface CategoriesContextType {
    categories: string[];
    addCategory: (name: string, color: string) => void;
    saveCategories: (categories: Categories) => void;
    getColor: (categoryName: string) => string;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export const CategoriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [categoriesObj, setCategoriesObj] = useState(() => {
        const parsed = safeJsonParse(localStorage.getItem(KEY), defaultCategories);
        const base = parsed && typeof parsed === 'object' ? parsed : defaultCategories;

        return { ...uncategorized, ...base };
    });

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(categoriesObj));
    }, [categoriesObj])

    const saveCategories = (categs: Categories) => {
        const merged = { ...uncategorized, ...categs };

        setCategoriesObj(merged);
    };

    const addCategory = (name: string, color: string) => {
        if (name === 'Sin categorizar') return;

        const newCategories = { ...categoriesObj, [name]: color };
        saveCategories(newCategories);
    };

    const getColor = (categoryName: string) => {
        const color: string | undefined = categoriesObj[categoryName];

        return typeof color === "string" ? color : "#000000";
    }

    // Array ordenado para select
    const categories = Object.keys(categoriesObj).sort((categoryName1, categoryName2) => {
        if (categoryName1 === "Sin categorizar") return -1;
        if (categoryName2 === "Sin categorizar") return 1;

        return categoryName1.localeCompare(categoryName2);
    })

    return (
        <CategoriesContext.Provider value={{ categories, addCategory, saveCategories, getColor }}>
            {children}
        </CategoriesContext.Provider>
    );
};

// Hook para consumir el contexto
export const useCategories = () => {
    const ctx = useContext(CategoriesContext);
    if (!ctx) throw new Error('useCategories debe usarse dentro de CategoriesProvider');
    return ctx;
};
