import {
    Avatar,
    Button,
    Paper,
    Text,
    TextInput,
    Title,
    Stack,
    Container,
    Group,
    Anchor,
    Grid,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import {getUserByUsername, updateUserInfo} from '../../services/UserService.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import { useJWT } from "../../hooks/useJWT.jsx";
import {useNavigate} from 'react-router-dom';
import {notifications} from "@mantine/notifications";

export default function ManageProfilePage() {
    const navigate = useNavigate();
    const {currentUsername, isLoggedIn} = useJWT();
    const { data: user } = useFetch(getUserByUsername, currentUsername);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setUsername(user.username ?? '');
            setEmail(user.email ?? '');
            setBio(user.bio ?? '');
        }
    }, [user]);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/log-in');
        }
    }, [isLoggedIn, navigate]);

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            user.email = email;
            user.bio = bio;
            await updateUserInfo(user);
            setMessage('');
            notifications.show({
                color: 'green',
                title: 'Інформація оновлена',
                message: 'Профіль успішно оновлено!',
            })
        } catch {
            setMessage('Не вдалося оновити інформацію');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div style={{
            minHeight: 'calc(100vh - 120px)',
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '2rem' }}
        >
            <Container size="sm" my="xl">
                <Paper withBorder shadow="md" p="xl" radius="lg">
                    <Grid gutter="lg" align="flex-start">
                        <Grid.Col span={{ base: 12, sm: 4 }}>
                            <Group position="center">
                                <Avatar
                                    size={120}
                                    radius="xl"
                                    alt={username}
                                />
                            </Group>
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, sm: 8 }}>
                            <Title order={3} mb="xs">
                                {username}
                            </Title>
                            <Text size="sm" c="dimmed" mb="md">
                                Керуйте своїм профілем
                            </Text>

                            <Stack spacing="sm">
                                <TextInput
                                    label="Електронна пошта"
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    required
                                    radius="md"
                                    placeholder="Ваша електронна пошта"
                                />

                                <TextInput
                                    label="Опис"
                                    value={bio}
                                    onChange={(e) => setBio(e.currentTarget.value)}
                                    radius="md"
                                    placeholder="Напишіть щось про себе"
                                />

                                <Group justify="flex-start" mt="xs">
                                    <Anchor
                                        component="button"
                                        size="sm"
                                        onClick={() => navigate("/change-password")}
                                    >
                                        Змінити пароль
                                    </Anchor>
                                </Group>

                                {message && (
                                    <Text
                                        c={message.includes('успішно') ? 'teal' : 'red'}
                                        size="sm"
                                    >
                                        {message}
                                    </Text>
                                )}

                                <Button
                                    fullWidth
                                    onClick={handleSave}
                                    loading={saving}
                                    radius="md"
                                    color="blue"
                                >
                                    Зберегти зміни
                                </Button>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}