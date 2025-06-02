import RegisterForm from "../../components/authentification/RegisterForm.jsx";
import {Anchor} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import '../../styles/authentification/RegisterPage.css';

export default function RegisterPage() {
    const navigate = useNavigate();

    return(
        <section className="register-page-container">
            <div className="register-form-container">
                <span className="register-title">
                    Створити акаунт
                </span>

                <RegisterForm />

                <p className="login-subtitle">
                <span>
                    Вже є акаунт?
                </span>
                    <Anchor
                        component="button"
                        underline="hover"
                        onClick={() => navigate("/log-in")}
                    >Увійти</Anchor>
                </p>
            </div>
        </section>
    );
}