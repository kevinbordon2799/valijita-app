import type { ButtonProps } from '../../types';

interface RedButtonProps extends ButtonProps {}

export const RedButton: React.FC<RedButtonProps> = (props) => {
    const className = props.className || "";

    return (
        <button
            {...props}
            className={`px-4 py-2 w-full bg-red-100 text-red-700 cursor-pointer text-sm rounded-md font-semibold hover:bg-red-200 ${className}`}
        >
            {props.children}
        </button>
    );
};
