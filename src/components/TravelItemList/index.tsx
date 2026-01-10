import { useTravelItems } from '../../contexts/TravelItemsContext';
import { TravelItemCard } from '../ItemCard';

export const TravelItemList: React.FC = () => {
    const { filteredItems, togglePacked, editItem, deleteItem } = useTravelItems();

    if (filteredItems.length === 0) {
        return <div className="py-10 text-center text-gray-500">No hay objetos agregados todavía.</div>;
    }

    return (
        <div className="w-full mx-auto max-w-[800px] grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
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
    );
};
