import {
    Button,
    PasswordInput,
    Text,
    TextInput,
} from '@mantine/core';
import { useState } from 'react';
import {registerUser} from "../../services/UserService.jsx";
import {useNavigate} from "react-router-dom";
import '../../styles/authentification/RegisterForm.css';

export default function RegisterForm() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        setLoading(true);

        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
            } else {
                await registerUser({username, password, email});
                navigate("/log-in");
            }
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-form">
            <TextInput
                label="Username"
                placeholder="Your username"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
                required
                radius="md"
            />
            <TextInput
                label="Email"
                placeholder="you@your.mail"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
                radius="md"
            />
            <PasswordInput
                label="Password"
                placeholder="Your password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
                mt="md"
                radius="md"
            />
            <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.currentTarget.value)}
                required
                mt="md"
                radius="md"
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
                disabled={!username || !password || !confirmPassword}
            >
                Sign up
            </Button>
        </div>
    );
}
