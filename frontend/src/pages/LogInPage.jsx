import LogInForm from "../components/authentification/LogInForm.jsx";
import {Anchor} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import '../styles/authentification/LogInPage.css';

export default function LogInPage() {
    const navigate = useNavigate();

    return(
        <div className="login-page-container">
            <div className="login-form-container">
                <span className="login-title">
                    Welcome back!
                </span>

                <LogInForm />

                <p className="login-subtitle">
                    <span>
                        Do not have an account yet?
                    </span>
                    <Anchor
                        component="button"
                        underline="hover"
                        onClick={() => navigate("/register")}
                    >Create account</Anchor>
                </p>
            </div>
        </div>
    );
}