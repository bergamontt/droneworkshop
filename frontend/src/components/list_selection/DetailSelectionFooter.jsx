import {Button, Group, Paper, Text, TextInput} from "@mantine/core";
import {useState} from "react";

export default function DetailSelectionFooter({ isSelecting, startSelecting, finishSelecting }) {
    const [droneName, setDroneName] = useState("");
    const nameTooLong = droneName.length > 24;

    return (
        <Paper
            shadow="md"
            px="md"
            py={6}
            radius={0}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100vw',
                height: '70px',
                backgroundColor: 'rgba(109, 128, 125, 1)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Group justify="space-between" align="center" style={{ width: '100%' }} gap="sm" wrap="nowrap">
                <Button
                    w={240}
                    size="sm"
                    radius="md"
                    color={isSelecting ? 'red' : 'blue'}
                    onClick={isSelecting ? finishSelecting : startSelecting}
                >
                    {isSelecting ? 'Припинити збірку' : 'Зібрати дрон'}
                </Button>

                <TextInput
                    value={droneName}
                    onChange={(e) => setDroneName(e.currentTarget.value)}
                    error={nameTooLong ? 'Довжина назви не має перевищувати 24 символи' : null}
                    radius="md"
                    placeholder="Назва дрона"
                    size="sm"
                    style={{ minWidth: 200, maxWidth: 250 }}
                    disabled={!isSelecting}
                    maxLength={24}
                />

                <Group gap="xs" wrap="nowrap">
                    <Text size="sm">Маса:</Text>
                    <Text size="sm" w={60} ta="center">
                        <b>{isSelecting ? "250 г" : "-"}</b>
                    </Text>

                    <Text size="sm">Розмір:</Text>
                    <Text size="sm" w={40} ta="center">
                        <b>{isSelecting ? '5"' : "-"}</b>
                    </Text>

                    <Text size="sm">Ціна:</Text>
                    <Text size="sm" w={80} ta="center">
                        <b>{isSelecting ? "7687 грн" : "-"}</b>
                    </Text>
                </Group>

                <Button
                    w={140}
                    size="sm"
                    radius="md"
                    color="blue"
                    disabled={!droneName}
                >
                    Зберегти дрон
                </Button>
            </Group>
        </Paper>
    );
}