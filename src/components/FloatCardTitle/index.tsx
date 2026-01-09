interface FloatCardTitleProps {
    children: React.ReactNode;
}

export const FloatCardTitle: React.FC<FloatCardTitleProps> = (props) => {
    return <p className="py-2 text-md text-center text-md font-extrabold">{props.children}</p>
}