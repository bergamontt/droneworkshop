import { Paper, Text, Title, Group, Avatar, Grid, Badge } from "@mantine/core";
import '../../styles/TutorialsSection.css';
import {useNavigate} from "react-router-dom";

export default function PostElement({ post }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/forum/${post.postId}`);
    }

    if (!post) return <></>;

    const truncated = (text, len = 100) => text.length > len ? text.substring(0, len) + '...' : text;

    return (
        <Paper withBorder shadow="xs" p="md" radius="md">
            <Grid gutter="sm" align="center">
                <Grid.Col span={{ base: 12, sm: 9 }}>
                    <Title order={4} mb={6}
                           onClick={handleClick}
                           style={{ cursor: 'pointer' }}
                    >
                        {truncated(post.topic, 160)}
                    </Title>
                    <Text size="sm" c="dimmed">
                        {truncated(post.description, 240)}
                    </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 3 }}>
                    <Group justify="center">
                        <Avatar radius="xl" color="blue" size="sm">
                            {post.user?.username.charAt(0).toUpperCase() ?? null}
                        </Avatar>
                        <Text size="sm" c="gray">
                            {post.user?.username ?? "Deleted user"}
                        </Text>
                    </Group>
                </Grid.Col>
            </Grid>
        </Paper>
    );
}
