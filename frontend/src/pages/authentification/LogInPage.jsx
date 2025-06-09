import LogInForm from "../../components/authentification/LogInForm.jsx";
import {Anchor, Center} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import { useJWT } from "../../hooks/useJWT.jsx";
import '../../styles/authentification/LogInPage.css';

export default function LogInPage() {
    const { isLoggedIn } = useJWT();
    const navigate = useNavigate();

    if(isLoggedIn)
        navigate("/profile");

    return(
        <div className="login-page-container">
            <Center>
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
            </Center>
        </div>
    );
}