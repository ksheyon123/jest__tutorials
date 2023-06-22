import React, { useState, useReducer } from "react";
import { Input } from "@/components";

const reducer = (state : any, action : any) => {
    switch (action.type) {
      case 'USERID':
        return {
            ...state,
            userId : action.payload
        }
      case 'USERPW':
        return {
            ...state,
            userPw :action.payload
        }
      default:
        return state;
    }
}

const initialState = {
    userId : "",
    userPw : ""
}

const LoginForm : React.FC = () => {
    const [inputData, dispatch] = useReducer(reducer, initialState);
    const { userId, userPw } = inputData;
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleOnInput = (key : string, e : any) => {
        const val = e.target.value;
        setErrorMsg("");
        dispatch({type : key, payload : val })
    }

    const validate = (id : string, pw : string) => {
        if(!id || !pw) {
            setErrorMsg("No User Input");
            return true;
        }

        return false;
    }

    const handleOnSubmit = () => {
        try {
            if(validate(userId, userPw)) return;


        } catch (e) {
            throw e;
        }
    }

    // const btnDisabled = !userId || !userPw;
    return (
        <div>
            <div className="user-id">
                <span>USER : </span>
                <Input value={userId} setValue={(e) => handleOnInput("USERID", e)}/>
            </div>
            <div className="user-pw">
                <span>PASSWORD : </span>
                <Input value={userPw} setValue={(e) => handleOnInput("USERPW", e)}/>
            </div>
            <button className="btn" disabled={false} onClick={handleOnSubmit}>
                Submit
            </button>
            {!!errorMsg && (
            <div data-testid="error-msg">
                {errorMsg}
            </div>
            )}
           
        </div>
    )
}

export { LoginForm } ;