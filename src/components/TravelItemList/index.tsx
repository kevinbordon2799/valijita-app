import { useTravelItems } from '../../contexts/TravelItemsContext';
import { FiltersCard } from '../FiltersCard';
import { TravelItemCard } from '../ItemCard';

export const TravelItemList: React.FC = () => {
    const { filteredItems, togglePacked, editItem, deleteItem } = useTravelItems();

    if (filteredItems.length === 0) {
        return (
            <div className="py-10 text-center text-gray-500">No hay objetos agregados todavía.</div>
        );
    }

    return (
        <div className="w-full mx-auto max-w-[900px] space-y-10 mt-10 py-15 mb-10 rounded-2xl border border-gray-200 bg-white shadow-sm rounded-2xl px-6">
            <div>
                <h2 className='text-3xl font-bold text-center'>Lista de objetos agregados:</h2>
            </div>

            <FiltersCard />

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
    );
};
