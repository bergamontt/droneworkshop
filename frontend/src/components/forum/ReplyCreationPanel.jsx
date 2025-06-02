import React, { useState } from 'react';
import {Paper, Container, Button, Group, TextInput} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { addReply } from "../../services/ReplyService.jsx";

export default function ReplyCreationPanel({post}) {
    const [description, setDescription] = useState('');
    const descriptionTooLong = description.length > 5_000;
    const [loading, setLoading] = useState(false);

    const handleReplySubmission = async () => {
        setDescription('');
        setLoading(true);

        try {
            await addReply({post, description, createdAt: new Date()});
            setDescription('');
        } catch {
            console.log('Error adding reply submission');
            notifications.show({
                title: 'Сталася помилка',
                message: 'Не вдалося залишити коментар',
                color: 'red'
            })
        } finally {
            setLoading(false);
        }
    };

    return (
        <Paper
            shadow="md"
            p="sm"
            withBorder
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                zIndex: 1000,
            }}
        >
            <Container size="md">
                <Group justify="space-between" wrap="nowrap">
                    <TextInput
                        placeholder="Написати коментар..."
                        value={description}
                        onChange={(event) => setDescription(event.currentTarget.value)}
                        error={descriptionTooLong ? 'Довжина тексту не має перевищувати 5 000 символів' : null}
                        style={{ flex: 1 }}
                        styles={{
                            input: {
                                fontSize: '1rem',
                            },
                        }}
                    />
                    <Button
                        onClick={handleReplySubmission}
                        radius="md"
                        disabled={!description || descriptionTooLong}
                        color="blue"
                        loading={loading}
                        ml="sm"
                    >
                        Надіслати
                    </Button>
                </Group>
            </Container>

        </Paper>
    );
}
