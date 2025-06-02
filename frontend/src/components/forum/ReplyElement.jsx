import { Paper, Text, Group, Avatar, Stack, Divider } from "@mantine/core";
import { format } from 'date-fns';

export default function ReplyElement({ reply }) {
    if (!reply) return <></>;

    return (
        <Paper withBorder shadow="xs" p="md" radius="md" bg="white">
            <Stack spacing="xs">
                <Group spacing="sm">
                    <Avatar radius="xl" color="blue" size="md">
                        {reply.user?.username?.charAt(0)?.toUpperCase() ?? null}
                    </Avatar>
                    <div>
                        <Text fw={500} size="sm">{reply.user?.username ?? "Deleted user"}</Text>
                        <Text size="xs" c="dimmed">{format(reply.createdAt, 'dd.MM.yyyy, HH:mm')}</Text>
                    </div>
                </Group>

                <Divider my="xs" mt="xs" mb="xs"/>

                <Text size="sm" mb="xs">{reply.description}</Text>
            </Stack>
        </Paper>
    );
}
