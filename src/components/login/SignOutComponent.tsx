 "use client"
 import { signOut} from "next-auth/react";

export default function signOutPage(){
    return(
        <div>
            <h1>Sign Out</h1>
            <button onClick={()=> signOut}>Sign Out</button>
        </div>
    )
}