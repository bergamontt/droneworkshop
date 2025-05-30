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
import { updateUserInfo, getCurrentUser } from '../services/UserService.jsx';
import { useFetch } from '../hooks/useFetch.jsx';
import { useNavigate } from 'react-router-dom';

export default function ManageProfilePage() {
    const navigate = useNavigate();
    const { data: user } = useFetch(getCurrentUser);

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

    if (!user) return <></>;

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            user.email = email;
            user.bio = bio;
            await updateUserInfo(user);
            setMessage('Changes saved successfully!');
        } catch {
            setMessage('Error saving new information.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
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
                                Manage your profile information.
                            </Text>

                            <Stack spacing="sm">
                                <TextInput
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.currentTarget.value)}
                                    required
                                    radius="md"
                                    placeholder="your@email.com"
                                />

                                <TextInput
                                    label="Biography"
                                    value={bio}
                                    onChange={(e) => setBio(e.currentTarget.value)}
                                    radius="md"
                                    placeholder="Something about yourself"
                                />

                                <Group justify="flex-start" mt="xs">
                                    <Anchor
                                        component="button"
                                        size="sm"
                                        onClick={() => navigate("/change-password")}
                                    >
                                        Change Password
                                    </Anchor>
                                </Group>

                                {message && (
                                    <Text
                                        c={message.includes('successfully') ? 'teal' : 'red'}
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
                                    Save Changes
                                </Button>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}