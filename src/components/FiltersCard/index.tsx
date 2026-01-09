import { useTravelItems } from '../../contexts/TravelItemsContext';
import { useCategories } from '../../contexts/CategoriesContext';
import { SelectInput } from '../SelectInput';

export const FiltersCard: React.FC = () => {
    const { setCategoryFilter, setOnlyPendingFilter } = useTravelItems();
    const { categories } = useCategories();

    return (
        <div className="pt-10">
            <div className="flex flex-col mx-auto p-6 max-w-[800px] sm:flex-row sm:items-center sm:justify-between gap-3 bg-float shadow-float">
                <p className="py-2 text-center text-md font-bold md:font-lg">Filtros:</p>

                <div className="flex flex-col gap-4 sm:flex-row">
                    <SelectInput onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="all">Todas las categorías</option>
                        {categories.map((categoryName) => (
                            <option key={categoryName} value={categoryName}>
                                {categoryName}
                            </option>
                        ))}
                    </SelectInput>

                    <label className="bg-gray-100 flex items-center gap-3 rounded-md px-4 py-3 cursor-pointer w-max sm:w-auto hover:bg-gray-200">
                        <input
                            type="checkbox"
                            onChange={(e) => setOnlyPendingFilter(e.target.checked)}
                            className="w-5 h-5 cursor-pointer"
                        />
                        <span className='text-sm'>
                            Ver solo <span className="font-bold">"falta empacar"</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};
