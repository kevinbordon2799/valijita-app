interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
    return (
        <select {...props} className="cursor-pointer px-4 py-3 border-2 text-sm outline-none border-gray-100 focus:bg-gray-100 focus:border-gray-300 hover:bg-gray-100 rounded-xl">{props.children}</select>
    )
}