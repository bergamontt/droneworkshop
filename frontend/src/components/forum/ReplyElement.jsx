import {Paper, Text, Group, Avatar, Stack, CloseButton} from "@mantine/core";
import { format } from 'date-fns';
import {useJWT} from "../../hooks/useJWT.jsx";
import {deleteReply} from "../../services/ReplyService.jsx";
import {notifications} from "@mantine/notifications";

export default function ReplyElement({ reply }) {
    const { currentUsername } = useJWT();

    const handleDelete = async () => {
        try{
            await deleteReply(reply.replyId);
            notifications.show({
                color: 'green',
                title: 'Коментар видалено',
                message: 'Комендар успішно видалено! Перезавантажте сторінку',
            })
        } catch {
            notifications.show({
                color: 'red',
                title: 'Виникла помилка',
                message: 'Не вдалося видалити коментар',
            })
        }
    }

    if (!reply) return <></>;

    return (
        <Paper
            withBorder
            shadow="xs"
            p="md"
            radius="md"
            bg="white"
            style={{ position: 'relative' }}
        >
            {reply.user?.username === currentUsername && (
                <CloseButton
                    size="sm"
                    style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 10,
                    }}
                    variant="subtle"
                    color="gray"
                    onClick={handleDelete}
                />
            )}

            <Group spacing="xs" align="flex-start">
                <Stack spacing="sm" justify="flex-start" gap="xs">
                    <Avatar radius="xl" color="blue" size="md">
                        {reply.user?.username?.charAt(0)?.toUpperCase() ?? null}
                    </Avatar>
                    <Text fw={500} size="sm">{reply.user?.username ?? "Deleted user"}</Text>
                </Stack>
                <Stack style={{ flex: 1 }}>
                    <Group p="xs" spacing="sm" justify="flex-start" style={{wordBreak: 'break-word'}}>
                        <Text size="sm">{reply.description}</Text>
                    </Group>
                    <Group spacing="sm" justify="flex-end">
                        <Text size="xs" c="dimmed">{format(reply.createdAt, 'dd.MM.yyyy, HH:mm')}</Text>
                    </Group>
                </Stack>
            </Group>
        </Paper>
    );
}
