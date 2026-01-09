import type { ButtonProps } from '../../types';

interface BlueButtonProps extends ButtonProps {}

export const BlueButton: React.FC<BlueButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="px-4 py-2 w-full bg-blue-100 text-blue-800 cursor-pointer text-sm rounded-md font-semibold hover:bg-blue-200"
        >
            {props.children}
        </button>
    );
};
