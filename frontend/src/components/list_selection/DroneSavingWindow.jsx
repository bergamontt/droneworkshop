import React, { useState } from 'react';
import {Button, Group, Modal, Textarea, Text, Stack} from '@mantine/core';
import { addDrone } from "../../services/DroneService.jsx";

export default function DroneSavingWindow({opened, close, idsList, finishSelecting}) {
    const [name, setName] = useState('');
    const nameTooLong = name.length > 24;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const drone = idsList;

    const handleSubmission = async () => {
        setMessage('');
        setLoading(true);

        try {
            drone['droneName'] = name;
            await addDrone(drone);
            setName('');
            setMessage('');
            finishSelecting();
            close();
        } catch {
            setMessage('Не вдалося зберегти дрон');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            opened={opened}
            onClose={() => close()}
            centered size="md"
            title={
                <Text order={4} mb={6}>
                    Зберегти дрон
                </Text>
            }
            zIndex={1000}
        >
            <Stack spacing="xl">
                <Textarea
                    minRows={2}
                    autosize
                    label="Назва"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    error={nameTooLong ? 'Довжина кназви не має перевищувати 24 символи' : null}
                    radius="md"
                    placeholder="Назва дрона"
                    withAsterisk
                />

                {message && (
                    <Text c='red'>
                        {message}
                    </Text>
                )}

                <Group justify="flex-end">
                    <Button
                        onClick={handleSubmission}
                        radius="md"
                        disabled={!name || nameTooLong}
                        color="blue"
                        loading={loading}
                    >
                        Зберегти
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
