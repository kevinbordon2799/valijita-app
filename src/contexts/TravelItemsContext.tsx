import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import { APP_NAME } from '../consts/app-consts';
import type { TravelItem } from '../types';
import { safeJsonParse } from '../helpers/json.helpers';

const ITEMS_KEY = `${APP_NAME}_items`;

interface TravelItemsContextType {
    items: TravelItem[];
    filteredItems: TravelItem[];

    addItem: (name: string, category: string) => void;
    editItem: (id: string, data: { name: string; category: string }) => void;
    deleteItem: (id: string) => void;

    togglePacked: (id: string) => void;
    unpackAll: () => void;

    setCategoryFilter: (category: string) => void;
    setOnlyPendingFilter: (value: boolean) => void;
}

const TravelItemsContext = createContext<TravelItemsContextType | undefined>(undefined);

export const TravelItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<TravelItem[]>(() => {
        const parsed = safeJsonParse(localStorage.getItem(ITEMS_KEY), []);

        return parsed;
    });

    const [filters, setFilters] = useState({
        category: 'all',
        onlyPending: false,
    });

    // Guardar items en localStorage
    useEffect(() => {
        localStorage.setItem(ITEMS_KEY, JSON.stringify(items));
    }, [items]);

    // Items filtrados automáticamente
    const filteredItems = items.filter((item) => {
        const matchesCategory = filters.category === 'all' || item.category === filters.category;
        const matchesPending = !filters.onlyPending || !item.packed;

        return matchesPending && matchesCategory;
    });

    const addItem = (name: string, category: string) => {
        if (!name.trim()) return;

        const newItem: TravelItem = {
            id: crypto.randomUUID(),
            name: name.trim(),
            category,
            packed: false,
        };

        setItems((prev) => [...prev, newItem]);
    };

    const togglePacked = (id: string) => {
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
        );
    };

    const unpackAll = () => {
        setItems((prev) => prev.map((item) => ({ ...item, packed: false })));
    };

    const editItem = (id: string, data: { name: string; category: string }) => {
        setItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...data } : item)));
    };

    const deleteItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const setCategoryFilter = (categoryName: string) => {
        setFilters({
            ...filters,
            category: categoryName,
        });
    };

    const setOnlyPendingFilter = (showOnlyPending: boolean) => {
        setFilters({ ...filters, onlyPending: showOnlyPending });
    };

    return (
        <TravelItemsContext.Provider
            value={{
                items,
                filteredItems,

                addItem,
                editItem,
                deleteItem,

                togglePacked,
                unpackAll,

                setCategoryFilter,
                setOnlyPendingFilter,
            }}
        >
            {children}
        </TravelItemsContext.Provider>
    );
};

// Hook para consumir
export const useTravelItems = () => {
    const ctx = useContext(TravelItemsContext);

    if (!ctx) throw new Error('useTravelItems debe usarse dentro de TravelItemsProvider');

    return ctx;
};
