interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const SelectInput: React.FC<SelectInputProps> = (props) => {
    return (
        <select {...props} className="px-4 py-3 border-2 outline-none border-gray-100 focus:border-purple-700 rounded-xl">{props.children}</select>
    )
}