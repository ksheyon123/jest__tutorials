import React, { Dispatch, SetStateAction } from "react";

interface IInputProps {
    value ?: string;
    setValue : (e : any) => void;
    placeHolder? : string;
    blocker ?: (el : string) => boolean;
}

const Input : React.FC<IInputProps> = ({value, setValue, placeHolder}) => {
    return (
        <input 
            data-testid="input"
            value={value || ""} 
            onChange={setValue} 
            placeholder={placeHolder || "Input text"}
        />
    )
}

export default Input;