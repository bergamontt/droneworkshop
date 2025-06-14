import { Paper, Text, Title, Group, Avatar, Grid } from "@mantine/core";
import { format } from 'date-fns';
import '../../styles/TutorialsSection.css';
import {useNavigate} from "react-router-dom";

export default function PostElement({ post }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/forum/main/${post.postId}`);
    }

    if (!post) return <></>;

    return (
        <Paper withBorder shadow="xs" p="md" radius="md">
            <Grid gutter="sm" align="center">
                <Grid.Col span={{ base: 12, sm: 9 }}>
                    <Title order={4} mb={6}
                           onClick={handleClick}
                           style={{ cursor: 'pointer' }}
                           lineClamp={1}
                    >
                        {post.topic}
                    </Title>
                    <Text size="sm" c="dimmed" lineClamp={1}>
                        {post.description}
                    </Text>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 3 }}>
                    <Group justify="center" mb="sm">
                        <Avatar radius="xl" color="blue" size="sm">
                            {post.user?.username.charAt(0).toUpperCase() ?? null}
                        </Avatar>
                        <Text size="sm" c="gray">
                            {post.user?.username ?? "Deleted user"}
                        </Text>
                    </Group>
                    <Group justify="center">
                        <Text size="sm" c="dimmed">
                            {format(post.createdAt, 'dd.MM.yyyy, HH:mm')}
                        </Text>
                    </Group>
                </Grid.Col>
            </Grid>
        </Paper>
    );
}
