import {
    Anchor,
    Button,
    Group,
    PasswordInput,
    Text,
    TextInput,
} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import {useJWT} from "../../hooks/useJWT.jsx";
import {login} from "../../services/UserService.jsx";
import '../../styles/authentification/LogInForm.css';

export default function LogInForm() {
    const navigate = useNavigate();
    const {setToken} = useJWT();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            const token = await login(username, password);
            setToken(token);
            navigate("/profile")
        } catch {
            setError('Не вдалося ввійти в акаунт');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form">
            <TextInput
                label="Логін"
                placeholder="Ваш логін"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
                required
                radius="md"
            />
            <PasswordInput
                label="Пароль"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
                mt="md"
                radius="md"
            />

            {error && (
                <Text c="red" size="sm" mt="md">
                    {error}
                </Text>
            )}

            <Group justify="space-between" mt="lg">
                <Anchor
                    component="button"
                    size="sm"
                    onClick={() => navigate('/restore-password')}
                >
                    Забули пароль?
                </Anchor>
            </Group>

            <Button
                fullWidth
                mt="xl"
                radius="md"
                onClick={handleSubmit}
                loading={loading}
                disabled={!username || !password}
            >
                Ввійти
            </Button>
        </div>
    );
}