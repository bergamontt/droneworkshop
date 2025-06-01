import {Paper, Text, Title, Group, Avatar, Grid, Badge, Stack, Container} from "@mantine/core";
import '../../styles/TutorialsSection.css';
import ReplyList from "./ReplyList.jsx";

export default function ReplyElement({ reply }) {
    if (!reply) return <div></div>;

    return (
        <Paper withBorder shadow="xs" p="md" radius="md">
            <Group gutter="sm">
                <Group>
                    <Avatar radius="xl" color="blue" size="sm">
                        {reply.user?.username?.charAt(0)?.toUpperCase() ?? null}
                    </Avatar>
                    <Text size="sm" c="gray">
                        {reply.user?.username ?? "Deleted user"}
                    </Text>
                </Group>
                <Stack>
                    <Text size="sm" >
                        {reply.description}
                    </Text>
                </Stack>
            </Group>
        </Paper>
    );
}
