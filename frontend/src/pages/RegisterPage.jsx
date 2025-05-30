import RegisterForm from "../components/authentification/RegisterForm.jsx";
import {Anchor} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import '../styles/authentification/RegisterPage.css';

export default function RegisterPage() {
    const navigate = useNavigate();

    return(
        <section className="register-page-container">
            <div className="register-form-container">
                <span className="register-title">
                    Create an account
                </span>

                <RegisterForm />

                <p className="login-subtitle">
                <span>
                    Already have an account?
                </span>
                    <Anchor
                        component="button"
                        underline="hover"
                        onClick={() => navigate("/log-in")}
                    >Log in</Anchor>
                </p>
            </div>
        </section>
    );
}