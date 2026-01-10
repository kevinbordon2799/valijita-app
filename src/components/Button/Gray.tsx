import type { ButtonProps } from '../../types';

interface GrayButtonProps extends ButtonProps {}

export const GrayButton: React.FC<GrayButtonProps> = (props) => {
    const className = props.className || "";

    return (
        <button
            {...props}
            className={`w-full px-4 py-2 bg-gray-100 text-gray-800 cursor-pointer text-sm rounded-md font-semibold hover:bg-gray-200 ${className}`}
        >
            {props.children}
        </button>
    );
};
