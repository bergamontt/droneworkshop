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
import '../../styles/LogInForm.css';

export default function LogInForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            throw new Error('Invalid credentials');
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form-container">
            <span className="login-title">
                Welcome back!
            </span>

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

            <div className="login-form">
                <TextInput
                    label="Username"
                    placeholder="Your username"
                    value={username}
                    onChange={(event) => setUsername(event.currentTarget.value)}
                    required
                    radius="md" />
                <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    required
                    mt="md"
                    radius="md"/>

                {error && (
                    <Text c="red" size="sm" mt="md">
                        {error}
                    </Text>
                )}

                <Group justify="space-between" mt="lg">
                    <Anchor
                        component="button"
                        size="sm"
                        onClick={() => navigate('/restore-password')}>
                        Forgot password?
                    </Anchor>
                </Group>

                <Button
                    fullWidth
                    mt="xl"
                    radius="md"
                    onClick={handleSubmit}
                    loading={loading}
                    disabled={!username || !password}>
                    Sign in
                </Button>
            </div>
        </div>
    );
}