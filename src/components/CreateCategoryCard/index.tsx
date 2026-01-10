import { useState, useEffect } from 'react';
import { Button } from '../Button';
import { FloatCardTitle } from '../FloatCardTitle';
import { TextInput } from '../TextInput';
import { useCategories } from '../../contexts/CategoriesContext';
import { BiSolidCategory } from 'react-icons/bi';

export const CreateCategoryCard: React.FC = () => {
    const { categories, addCategory } = useCategories();

    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');
    const [error, setError] = useState('');

    // Limpiar error automáticamente al escribir
    useEffect(() => {
        if (error) setError('');
    }, [name, color]);

    const handleCreate = () => {
        const trimmedName = name.trim();

        // Validaciones
        if (!trimmedName) {
            setError('El nombre no puede estar vacío');
            return;
        }

        // No permitir reemplazar "Sin categorizar"
        if (trimmedName.toLowerCase() === 'sin categorizar'.toLowerCase()) {
            setError('No se puede usar el nombre "Sin categorizar"');
            return;
        }

        // Evitar duplicados
        if (categories.some(([catName]) => catName.toLowerCase() === trimmedName.toLowerCase())) {
            setError('Ya existe una categoría con ese nombre');
            return;
        }

        // Crear categoría
        addCategory(trimmedName, color);

        // Limpiar inputs
        setName('');
        setColor('#000000');
        setError('');
    };

    return (
        <div className="flex flex-col gap-3 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <FloatCardTitle>Nueva categoría</FloatCardTitle>

            <TextInput
                type="text"
                placeholder="Nombre de la categoría"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <div className="flex items-center justify-between">
                <label htmlFor="newCategoryColor" className='text-sm'>Color de categoría:</label>
                <input
                    id="newCategoryColor"
                    type="color"
                    className="h-12 w-12 p-0 border-none"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex pt-4">
                <Button.Purpple className='flex items-center justify-center gap-1'>
                    <span className='relative'>Crear categoría</span>
                    <BiSolidCategory className='text-lg' />
                </Button.Purpple>
            </div>
        </div>
    );
};
