import { Paper, Text, Group, Avatar, Stack } from "@mantine/core";
import { format } from 'date-fns';

export default function ReplyElement({ reply }) {
    if (!reply) return <></>;

    return (
        <Paper withBorder shadow="xs" p="md" radius="md" bg="white">
            <Group spacing="xs" align="flex-start">
                <Stack spacing="sm" justify="flex-start" gap="xs">
                    <Avatar radius="xl" color="blue" size="md">
                        {reply.user?.username?.charAt(0)?.toUpperCase() ?? null}
                    </Avatar>
                    <Text fw={500} size="sm">{reply.user?.username ?? "Deleted user"}</Text>
                </Stack>
                <Stack style={{ flex: 1 }}>
                    <Group p="xs" spacing="sm" justify="flex-start">
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
