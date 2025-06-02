import {
    Anchor,
    Button,
    Container, Group,
    Paper,
    PasswordInput,
    Text,
    Title,
} from '@mantine/core';
import {useState} from 'react';
import {useFetch} from "../../hooks/useFetch.jsx";
import {getCurrentUser, updateUserPassword} from "../../services/UserService.jsx";
import {useNavigate} from "react-router-dom";
import {jwtService} from "../../services/JWTService.jsx";

export default function ChangePasswordPage() {
    const navigate = useNavigate();
    const { data: user } = useFetch(getCurrentUser);

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    if (!jwtService.isLoggedIn())
        navigate('/log-in');

    const handleChangePassword = async () => {
        setMessage('');
        setLoading(true);

        try {
            if (newPassword !== confirmPassword) {
                setMessage('Паролі не співпадають');
            } else {
                await updateUserPassword(user.username, newPassword);
                setMessage('Пароль успішно змінено!');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch {
            setMessage('Не вдалося оновити пароль');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '20px' ,
            minHeight: '100vh'}}>
            <Container size={520} my={40}>
                <Title ta="center" style={{
                    fontFamily: "'WDXL Lubrifont TC', Arial, sans-serif",
                    fontWeight: "500",
                    fontSize: "72px",
                }}>Зміна паролю</Title>

                <Paper withBorder shadow="sm" p={30} mt={30} radius="md">
                    <PasswordInput
                        label="Пароль"
                        placeholder="Новий пароль"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.currentTarget.value)}
                        required
                        mt="md"
                        radius="md"
                    />
                    <PasswordInput
                        label="Підтвердження паролю"
                        placeholder="Підтвердження нового паролю"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                        required
                        mt="md"
                        radius="md"
                    />

                    {message && (
                        <Text mt="md" c={message.includes('successfully') ? 'green' : 'red'}>
                            {message}
                        </Text>
                    )}

                    <Button
                        mt="xl"
                        fullWidth
                        onClick={handleChangePassword}
                        loading={loading}
                        disabled={!newPassword || !confirmPassword}
                    >
                        Змінити пароль
                    </Button>

                    <Group justify="flex-start" mt="xs">
                        <Anchor
                            component="button"
                            size="sm"
                            onClick={() => navigate("/profile")}
                        >
                            До сторінки профілю
                        </Anchor>
                    </Group>
                </Paper>
            </Container>
        </div>
    );
}
