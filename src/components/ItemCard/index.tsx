import React, { useState } from 'react';
import { useCategories } from '../../contexts/CategoriesContext';
import { useConfirmModal } from '../../contexts/ConfirmModalContext';
import type { TravelItem } from '../../types';
import { SelectInput } from '../SelectInput';
import { TextInput } from '../TextInput';
import { FaCheckCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface TravelItemCardProps {
    item: TravelItem;
    togglePacked: (id: string) => void;
    deleteItem: (id: string) => void;
    editItem: (id: string, data: { name: string; category: string }) => void; // función para editar
}

export const TravelItemCard: React.FC<TravelItemCardProps> = ({
    item,
    togglePacked,
    deleteItem,
    editItem,
}) => {
    const { categories, getColor } = useCategories();
    const { openConfirm } = useConfirmModal();

    const categoryColor = getColor(item.category);

    // estados locales para edición
    const [editName, setEditName] = useState(item.name);
    const [editCategory, setEditCategory] = useState(item.category);
    const [editing, setEditing] = useState(false);

    const handleDeleteClick = () => {
        openConfirm(`¿Estás seguro que querés eliminar "${item.name}"?`, () => deleteItem(item.id));
    };

    const handleSave = () => {
        if (!editName.trim()) return;

        editItem(item.id, { name: editName.trim(), category: editCategory });
        setEditing(false);
    };

    const handleCancel = () => {
        setEditName(item.name);
        setEditCategory(item.category);
        setEditing(false);
    };

    return (
        <div className="border-2 border-gray-200 bg-white shadow-md px-6 py-8 rounded-xl flex flex-col gap-4 relative">
            {/* Vista normal */}
            {!editing && (
                <div className="flex flex-col">
                    <div
                        className="h-[10px] w-full relative top-[-0%] opacity-100"
                        style={{ backgroundColor: categoryColor }}
                    ></div>

                    <div className="flex flex-row pt-4 justify-between items-center">
                        <div>
                            <h3 className="text-md sm:text-xl font-bold">{item.name}</h3>
                            <span className="relative top-[-0.3rem] text-sm text-zinc-400">
                                {item.category}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between pt-2 items-center">
                        <button
                            onClick={() => togglePacked(item.id)}
                            className={`w-max flex rounded-md text-xs sm:text-sm font-bold items-center gap-1 cursor-pointer ${
                                item.packed
                                    ? 'text-green-600 hover:underline hover:text-shadow-green-600 hover:text-shadow-xs focus:underline focus:text-shadow-green-600 focus:text-shadow-xs'
                                    : 'text-red-600 hover:underline hover:text-shadow-red-600 hover:text-shadow-xs focus:underline focus:text-shadow-red-600 focus:text-shadow-xs'
                            }`}
                        >
                            {item.packed 
                                ? (<><FaCheckCircle size={16} /> <span>Empacado</span></>)
                                : (<><FaWindowClose size={16}/> <span>Falta empacar</span></>)
                            }
                        </button>

                        <div className="flex justify-between gap-2">
                            <button
                                onClick={() => setEditing(true)}
                                className="px-3 py-2 bg-blue-100 text-blue-800 cursor-pointer text-sm rounded-md font-semibold hover:bg-blue-200"
                            >
                                <FaEdit size={16} />
                            </button>

                            <button
                                onClick={handleDeleteClick}
                                className="flex items-center gap-1 px-4 py-2 bg-red-200 text-xs text-red-700 cursor-pointer sm:text-sm rounded-md font-semibold hover:bg-red-300"
                            >
                                <span className='relative top-[10%] sm:top-[2%]'>Eliminar</span>
                                <MdDelete size={16}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Vista edición */}
            {editing && (
                <div className="flex flex-col gap-3">
                    <TextInput
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="px-4 py-3 sm:col-span-2 rounded border border-gray-300"
                        placeholder="Nombre del item"
                    />

                    <SelectInput
                        value={editCategory}
                        onChange={(e) => setEditCategory(e.target.value)}
                        className="px-4 py-3 rounded border border-gray-300"
                    >
                        {categories.map((categoryName) => (
                            <option key={categoryName} value={categoryName}>
                                {categoryName}
                            </option>
                        ))}
                    </SelectInput>

                    <div className="flex gap-2 justify-end pt-4">
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue-100 text-blue-800 cursor-pointer text-sm rounded-md font-semibold hover:bg-blue-200"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 bg-gray-100 text-gray-800 cursor-pointer text-sm rounded-md font-semibold hover:bg-gray-200"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
