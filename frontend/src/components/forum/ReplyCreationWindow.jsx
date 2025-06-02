import React, { useState } from 'react';
import {Button, Group, Modal, Textarea, Text, Stack, Title} from '@mantine/core';
import { addReply } from "../../services/ReplyService.jsx";

export default function ReplyCreationWindow({opened, post, close}) {
    const [description, setDescription] = useState('');
    const descriptionTooLong = description.length > 5_000;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleReplySubmission = async () => {
        setMessage('');
        setLoading(true);

        try {
            await addReply({post, description, createdAt: new Date()});
            setDescription('');
            setMessage('');
            close();
        } catch {
            setMessage('Не вдалося відповісти на пост');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            opened={opened}
            onClose={close}
            centered size="xl"
            title={
                <Title order={4} mb={6}>
                    Відповісти
                </Title>
            }
        >
            <Stack spacing="xl">
                <Textarea
                    minRows={2}
                    autosize
                    label="Коментар"
                    value={description}
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    error={descriptionTooLong ? 'Довжина коментаря не має перевищувати 5 000 символів' : null}
                    radius="md"
                    placeholder="Напишіть коментар..."
                    withAsterisk
                />

                {message && (
                    <Text c='red'>
                        {message}
                    </Text>
                )}

                <Group justify="flex-end">
                    <Button
                        onClick={handleReplySubmission}
                        radius="md"
                        disabled={!description || descriptionTooLong}
                        color="blue"
                        loading={loading}
                    >
                        Надіслати
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
