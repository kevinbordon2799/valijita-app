import type { ButtonProps } from '../../types';

interface PurppleButtonProps extends ButtonProps {}

export const PurppleButton: React.FC<PurppleButtonProps> = (props) => {
    const className = props.className || "";

    return (
        <button
            {...props}
            className={`w-full bg-purple-200 text-purple-800 cursor-pointer text-sm rounded-md ml-auto mr-0 hover:bg-purple-300 px-4 py-3 font-semibold sm:col-span-2 ${className}`}
        >
            {props.children}
        </button>
    );
};
