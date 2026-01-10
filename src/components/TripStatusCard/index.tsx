import { useState } from 'react';
import { useConfirmModal } from '../../contexts/ConfirmModalContext';
import { useTravelItems } from '../../contexts/TravelItemsContext';
import { Button } from '../Button';
import { ArrivalCelebration } from '../ArrivalCelebration';

export const TripStatusCard: React.FC = () => {
    const { openConfirm } = useConfirmModal();
    const { unpackAll } = useTravelItems();

    const [showArrivalCelebration, setShowArrivalCelebration] = useState(false);

    const handleArrivedAtDestination = () => {
        openConfirm(
            <div className="flex flex-col gap-2">
                <span className="text-base leading-5">
                    ¿Deseas confirmar que llegaste a tu destino?
                </span>
                <span className="text-red-500 text-xs">{`ATENCIÓN! se van a desempacar TODOS los objetos.`}</span>
            </div>,
            () => {
                unpackAll();
                setShowArrivalCelebration(true);
            }
        );
    };

    const handleFinishArrivalCelebration = () => {
        setShowArrivalCelebration(false);
    }

    return (
        <div className="w-full max-w-[800px] mx-auto mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Título */}
            <h3 className="text-lg font-semibold text-gray-900">Estado del viaje</h3>

            <p className="mt-1 text-sm text-gray-500">
                Usá esta opción cuando ya llegaste a destino.
            </p>

            {/* Separador */}
            <div className="my-4 h-px w-full bg-gray-100" />

            {/* Botón principal */}
            <Button.Blue type="button" onClick={handleArrivedAtDestination}>
                Ya llegué al destino 🧳
            </Button.Blue>

            {/* Nota visual */}
            <p className="mt-3 text-xs text-gray-400 text-center">
                {`Esto va a marcar todos los ítems como `}
                <span className="font-bold">no empacados.</span>
            </p>

            <ArrivalCelebration 
                isVisible={showArrivalCelebration}
                onFinish={handleFinishArrivalCelebration}
            />
        </div>
    );
};
