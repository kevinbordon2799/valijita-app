interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <input {...props} className="px-4 py-3 text-sm border-2 outline-none border-gray-100 focus:border-purple-700 rounded-xl" />
    )
}