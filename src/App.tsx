import './App.css';
import { AddItemCard } from './components/AddItemCard';
import { CreateCategoryCard } from './components/CreateCategoryCard';
import { Header } from './components/Header';
import { TravelItemList } from './components/TravelItemList';
import { TripStatusCard } from './components/TripStatusCard';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { ConfirmModalProvider } from './contexts/ConfirmModalContext';
import { TravelItemsProvider } from './contexts/TravelItemsContext';

// TAREAS
// leer "safeJsonParse"

function App() {
    return (
        <ConfirmModalProvider>
            <CategoriesProvider>
                <TravelItemsProvider>
                    <Header />

                    <div className="bg-gray-100 px-4 pt-0 pb-10 sm:px-6">
                        <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] mx-auto pt-10">
                            <AddItemCard />

                            <CreateCategoryCard />
                        </div>

                        <TripStatusCard />
                    </div>

                    <TravelItemList />
                </TravelItemsProvider>
            </CategoriesProvider>
        </ConfirmModalProvider>
    );
}

export default App;
