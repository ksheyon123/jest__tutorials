import React, {useState} from "react";
import { Input } from "@/components";

const LoginForm : React.FC = () => {
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    return (
        <div>
            <div>
                <span>USER : </span>
                <Input value={userId} setValue={setUserId}/>
            </div>
            <div>
                <span>PASSWORD : </span>
                <Input value={userPw} setValue={setUserPw}/>
            </div>
            
        </div>
    )
}

export { LoginForm } ;