import { useState } from 'react';
import {Container, Stack, Button, Title, Paper, Group, Textarea, Text} from '@mantine/core';
import {useJWT} from "../../hooks/useJWT.jsx";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../services/PostService.jsx";

export default function WritePostPage() {
    const {isLoggedIn} = useJWT();
    const navigate = useNavigate();

    const [topic, setTopic] = useState('');
    const topicTooLong = topic.length > 300;
    const [description, setDescription] = useState('');
    const descriptionTooLong = description.length > 5_000;
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    if (isLoggedIn)
        navigate('/log-in');

    const handlePostSubmission = async () => {
        setMessage('');
        setLoading(true);

        try {
            const postId = await addPost({topic, description, createdAt: new Date()});
            navigate(`/forum/${postId}`);
        } catch {
            setMessage('Не вдалося створити пост');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '2rem',
            justifyContent: 'center',}}
        >
            <Container size="lg">
                <Paper p="lg" shadow="sm" radius="lg" withBorder>
                    <Stack spacing="xl">
                        <Group>
                            <Button
                                onClick={() => navigate("/forum")}
                                radius="md"
                                variant="light"
                                color="gray"
                            >
                                ← До форуму
                            </Button>
                        </Group>

                        <Title order={4} mb={6}>
                            Написати пост
                        </Title>

                        <Textarea
                            minRows={2}
                            autosize
                            label="Заголовок"
                            value={topic}
                            onChange={(e) => setTopic(e.currentTarget.value)}
                            error={topicTooLong ? 'Довжина заголовку не має перевищувати 300 символів' : null}
                            radius="md"
                            placeholder="Короткий зміст поста"
                            withAsterisk
                        />

                        <Textarea
                            minRows={2}
                            autosize
                            label="Опис"
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            error={descriptionTooLong ? 'Довжина опису не має перевищувати 5 000 символів' : null}
                            radius="md"
                            placeholder="Опис питання"
                            withAsterisk
                        />

                        {message && (
                            <Text c='green'>
                                {message}
                            </Text>
                        )}

                        <Group justify="flex-end">
                            <Button
                                onClick={handlePostSubmission}
                                radius="md"
                                disabled={!topic || !description || descriptionTooLong || topicTooLong}
                                color="blue"
                                loading={loading}
                            >
                                Опублікувати
                            </Button>
                        </Group>
                    </Stack>
                </Paper>
            </Container>
        </div>
    );
}
