import {
    Button, Checkbox,
    PasswordInput,
    Text,
    TextInput,
} from '@mantine/core';
import { useState } from 'react';
import {login, registerUser} from "../../services/UserService.jsx";
import {useNavigate} from "react-router-dom";
import '../../styles/authentification/RegisterForm.css';
import {notifications} from "@mantine/notifications";
import {useJWT} from "../../hooks/useJWT.jsx";

export default function RegisterForm() {
    const navigate = useNavigate();
    const {setToken} = useJWT();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            if (password !== confirmPassword) {
                setError('Паролі не співпадають');
            } else {
                await registerUser({username, password, email});
                const token = await login(username, password);
                setToken(token);
                navigate("/profile")
                notifications.show({
                    color: 'green',
                    title: 'Успіх',
                    message: 'Профіль створено!',
                })
            }
        } catch {
            setError('Не вдалося зареєструватися');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-form">
            <TextInput
                label="Логін"
                placeholder="Ваш логін"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
                required
                radius="md"
            />
            <TextInput
                label="Електронна пошта"
                placeholder="Ваша електронна пошта"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
                radius="md"
            />
            <PasswordInput
                label="Пароль"
                placeholder="Ваш пароль"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
                mt="md"
                radius="md"
            />
            <PasswordInput
                label="Підтвердження пароля"
                placeholder="Підтвердження пароля"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.currentTarget.value)}
                required
                mt="md"
                radius="md"
            />

            <Checkbox
                mt="md"
                onChange={() => setAgreed(!agreed)}
                label="Я погоджуюся продати свою душу компанії"
            />

            {error && (
                <Text c="red" size="sm" mt="md">
                    {error}
                </Text>
            )}

            <Button
                fullWidth
                mt="xl"
                radius="md"
                onClick={handleSubmit}
                loading={loading}
                disabled={!username || !password || !confirmPassword || !agreed}
            >
                Зареєструватися
            </Button>
        </div>
    );
}
