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
import {useFetch} from "../hooks/useFetch.jsx";
import {getCurrentUser, updateUserPassword} from "../services/UserService.jsx";
import {useNavigate} from "react-router-dom";
import {jwtService} from "../services/JWTService.jsx";

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
                setMessage('New passwords do not match.');
            } else {
                await updateUserPassword(user.username, newPassword);
                setMessage('Password changed successfully.');
                setNewPassword('');
                setConfirmPassword('');
            }
        } catch (err) {
            setMessage(err.message || 'Failed to change password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundColor: 'rgba(109, 128, 125, 0.5)', padding: '20px' , height: '100%'}}>
            <Container size={520} my={40}>
                <Title ta="center" style={{
                    fontFamily: "'WDXL Lubrifont TC', Arial, sans-serif",
                    fontWeight: "500",
                    fontSize: "72px",
                }}>Change Password</Title>

                <Paper withBorder shadow="sm" p={30} mt={30} radius="md">
                    <PasswordInput
                        label="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.currentTarget.value)}
                        required
                        mt="md"
                        radius="md"
                    />
                    <PasswordInput
                        label="Confirm New Password"
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
                        Change Password
                    </Button>

                    <Group justify="flex-start" mt="xs">
                        <Anchor
                            component="button"
                            size="sm"
                            onClick={() => navigate("/profile")}
                        >
                            To profile page
                        </Anchor>
                    </Group>
                </Paper>
            </Container>
        </div>
    );
}
