import LogInForm from "../../components/authentification/LogInForm.jsx";
import {Anchor} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import { jwtService } from "../../services/JWTService.jsx"
import '../../styles/authentification/LogInPage.css';

export default function LogInPage() {
    const navigate = useNavigate();

    if(jwtService.isLoggedIn())
        navigate("/profile");

    return(
        <div className="login-page-container">
            <div className="login-form-container">
                <span className="login-title">
                    Вхід в акаунт
                </span>

                <LogInForm />

                <p className="login-subtitle">
                    <span>
                        Немає акаунта?
                    </span>
                    <Anchor
                        component="button"
                        underline="hover"
                        onClick={() => navigate("/register")}
                    >Створити акаунт</Anchor>
                </p>
            </div>
        </div>
    );
}