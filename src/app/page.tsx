import { SessionWrapper } from "../components/SessionWrapper";
import SignInPage from "../components/login/LoginComponent";
import SignOutPage from "../components/login/SignOutComponent";

export default async function Home (){
    return(
        <div>
            <SessionWrapper>
                <SignInPage />
                <SignOutPage />
            </SessionWrapper>
        </div>
    );
}