import React, { Dispatch, SetStateAction } from "react";

interface IInputProps {
    value ?: string;
    setValue : Dispatch<SetStateAction<string>>;
    placeHolder? : string;
    blocker : (el : string) => boolean;
}

const Input : React.FC<IInputProps> = ({value, setValue, blocker, placeHolder}) => {
    return (
        <input 
            value={value} 
            onChange={(e) => {
                const val = e.target.value;
                if (blocker(val)) return;
                setValue(val);
            }} 
            placeholder={placeHolder || "Input text"}
        />
    )
}

export default Input;