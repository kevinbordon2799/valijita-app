import { useTravelItems } from '../../contexts/TravelItemsContext';
import { FiltersCard } from '../FiltersCard';
import { TravelItemCard } from '../ItemCard';

export const TravelItemList: React.FC = () => {
    const { filteredItems, togglePacked, editItem, deleteItem } = useTravelItems();

    return (
        <div className="w-full mx-auto max-w-[900px] space-y-10 mt-6 py-15 mb-10 bg-white px-6">
            <div>
                <h2 className="text-3xl font-bold text-center">Lista de objetos agregados:</h2>
            </div>

            <FiltersCard />

            {filteredItems.length === 0 && (
                <div className="py-10 text-center text-gray-500">
                    No hay objetos agregados todavía.
                </div>
            )}

            {filteredItems.length > 0 && (
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.map((item) => (
                        <TravelItemCard
                            key={item.id}
                            item={item}
                            togglePacked={togglePacked}
                            editItem={editItem}
                            deleteItem={deleteItem}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
