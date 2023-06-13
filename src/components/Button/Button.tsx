import React from "react";

interface IButtonProps {
    name : string;
}

const Button : React.FC<IButtonProps> = ({name}) => {
    return (
        <button>
            {name}
        </button>
    )
}

export default Button;