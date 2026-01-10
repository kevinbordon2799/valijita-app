import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

type ArrivalCelebrationProps = {
    isVisible: boolean;
    onFinish: () => void;
};

export const ArrivalCelebration: React.FC<ArrivalCelebrationProps> = ({ isVisible, onFinish }) => {
    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(onFinish, 3000);
        return () => clearTimeout(timer);
    }, [isVisible, onFinish]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden
                     bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Partículas */}
                    {[...Array(12)].map((_, i) => (
                        <motion.span
                            key={i}
                            className="absolute h-3 w-3 rounded-full bg-white/70"
                            initial={{
                                x: 0,
                                y: 0,
                                scale: 0,
                                opacity: 0,
                            }}
                            animate={{
                                x: Math.random() * 600 - 300,
                                y: Math.random() * 600 - 300,
                                scale: [0, 1, 0.5],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                delay: Math.random() * 0.3,
                                ease: 'easeOut',
                            }}
                        />
                    ))}

                    {/* Contenido principal */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center text-center text-white px-6"
                        initial={{ scale: 0.6, rotate: -5, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                    >
                        {/* Emoji animado */}
                        <motion.span
                            className="text-7xl mb-4"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.6,
                                ease: 'easeInOut',
                            }}
                        >
                            🎉
                        </motion.span>

                        <h1 className="text-3xl font-bold">¡Felicidades!</h1>

                        <p className="mt-2 text-lg text-white/90">
                            Llegaste a destino. Disfrutá el momento ✨
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
