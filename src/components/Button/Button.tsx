import React from "react";

interface IButtonProps {
    name : string;
    onClick : () => void;
}   

const Button : React.FC<IButtonProps> = ({name, onClick}) => {
    return (
        <button data-testid="test-btn" onClick={onClick}>{name}</button>
    )
}

export default Button;