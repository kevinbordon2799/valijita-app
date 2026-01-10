import { useState } from 'react';
import { useCategories } from '../../contexts/CategoriesContext';
import { useTravelItems } from '../../contexts/TravelItemsContext';
import { Button } from '../Button';
import { FloatCardTitle } from '../FloatCardTitle';
import { SelectInput } from '../SelectInput';
import { TextInput } from '../TextInput';

export const AddItemCard: React.FC = () => {
    const { categories } = useCategories();
    const { addItem } = useTravelItems();

    const [itemDesc, setItemDesc] = useState('');
    const [category, setCategory] = useState(categories[0] || '');

    const resetForm = () => {
        setItemDesc('');
        setCategory(categories[0] || '');
    };

    const handleAdd = () => {
        addItem(itemDesc, category);

        resetForm();
    };

    return (
        <div className="flex flex-col gap-3 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FloatCardTitle>Agregar objeto</FloatCardTitle>

            <TextInput
                type="text"
                placeholder="¿Qué tenés que llevar?"
                value={itemDesc}
                onChange={(e) => setItemDesc(e.target.value)}
            />

            <SelectInput value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((categoryName) => (
                    <option key={categoryName} value={categoryName}>
                        {categoryName}
                    </option>
                ))}
            </SelectInput>

            <div className="flex justify-end pt-4 bg-red">
                <Button.Purpple onClick={handleAdd}>Agregar</Button.Purpple>
            </div>
        </div>
    );
};
