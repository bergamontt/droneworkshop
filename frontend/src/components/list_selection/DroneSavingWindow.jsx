import React, { useState } from 'react';
import { Button, Group, Modal, Textarea, Text, Stack, FileInput } from '@mantine/core';
import { addDrone } from "../../services/DroneService.jsx";
import { IconFileCv } from '@tabler/icons-react';

export default function DroneSavingWindow({ opened, close, idsList, finishSelecting }) {
    const [name, setName] = useState('');
    const nameTooLong = name.length > 24;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [file, setFile] = useState();
    const drone = idsList;

    const fileIcon = <IconFileCv size={18} stroke={1.5} />;

    const handleFileChange = (newFile) => {
        if (!newFile) {
            setFile(null);
            setMessage('');
            return;
        }

        const img = new Image();
        img.src = URL.createObjectURL(newFile);
        img.onload = () => {
            if (img.width > 500 || img.height > 500) {
                setFile(null);
                setMessage('Фото повинно бути не більше 500x500 пікселів');
            } else {
                setFile(newFile);
                setMessage('');
            }
        };
    };

    const handleSubmission = async () => {
        setMessage('');
        setLoading(true);
        try {
            drone['droneName'] = name;
            if(file){
                drone['photo'] = file;
            }
            await addDrone(drone);
            setName('');
            setMessage('');
            setFile(null);
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
            onClose={() => {
                close();
                setName('');
                setFile(null);
                setMessage('');
            }}
            centered
            size="md"
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
                    onChange={(e) => setName(e.target.value)}
                    error={nameTooLong ? 'Довжина назви не має перевищувати 24 символи' : null}
                    radius="md"
                    placeholder="Назва дрона"
                    withAsterisk
                />

                <FileInput
                    accept="image/png,image/jpeg,image/webp"
                    label="Фотографія дрона"
                    placeholder="Додати фото"
                    clearable
                    onChange={handleFileChange}
                    leftSection={fileIcon}
                />
                {file &&
                    <img
                        src={URL.createObjectURL(file)}
                         alt="Огляд" style={{ maxHeight: 500, maxWidth: 500 }}
                    />
                }

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
