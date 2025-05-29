import LogInForm from "../components/authentification/LogInForm.jsx";
import '../styles/LogInPage.css';

export default function LogInPage() {

    return(
        <section className="login-page-container">
            <LogInForm></LogInForm>
        </section>
    );
}