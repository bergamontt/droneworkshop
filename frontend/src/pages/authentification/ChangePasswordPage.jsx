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
import {useJWT} from "../../hooks/useJWT.jsx";
import {updateUserPassword} from "../../services/UserService.jsx";
import {useNavigate} from "react-router-dom";
import {notifications} from "@mantine/notifications";

export default function ChangePasswordPage() {
    const {currentUsername, isLoggedIn} = useJWT();
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isLoggedIn)
        navigate('/log-in');

    const handleChangePassword = async () => {
        setMessage('');
        setLoading(true);

        try {
            if (newPassword !== confirmPassword) {
                setMessage('Паролі не співпадають');
            } else {
                await updateUserPassword(currentUsername, newPassword);
                setMessage('');
                setNewPassword('');
                setConfirmPassword('');
                notifications.show({
                    color: 'green',
                    title: 'Успіх',
                    message: 'Пароль успішно змінено!',
                })
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
                }}>Зміна пароля</Title>

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
                        label="Підтвердження пароля"
                        placeholder="Підтвердження нового пароля"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                        required
                        mt="md"
                        radius="md"
                    />

                    {message && (
                        <Text mt="md" c={message.includes('успішно') ? 'green' : 'red'}>
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
