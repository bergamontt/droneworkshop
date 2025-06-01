import {Container, Title, Text, Group, Avatar, Paper, Stack} from '@mantine/core';
import { useFetch } from '../../hooks/useFetch.jsx'
import { getPostById } from "../../services/PostService.jsx";
import { getRepliesByPostId } from "../../services/ReplyService.jsx";
import ReplyList from "../../components/forum/ReplyList.jsx";
import {useParams} from "react-router-dom";

export default function ForumPostPage() {
    const { postId } = useParams();

    const { data: post } = useFetch(getPostById, postId);
    const { data: replies } = useFetch(getRepliesByPostId, postId);

    if (!post) return <div style={{ backgroundColor: "rgba(109, 128, 125, 0.5)", height: '100vh' }} />;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            justifyContent: 'center',}}
        >
            <div style={{
                width: '80%',
                backgroundColor: 'white',
                minHeight: '100vh',
                padding: '2rem',
                margin:"auto"}} >
                <Container size="lg">
                    <Paper withBorder p="md" radius="sm" mb="md">
                        <Stack gutter="sm">
                            <Stack justify="flex-start">
                                <Group>
                                    <Avatar radius="xl" color="blue" size="sm">
                                        {post.user?.username?.charAt(0).toUpperCase() ?? null}
                                    </Avatar>
                                    <Text size="sm" c="gray">
                                        {post.user?.username ?? "Deleted user"}
                                    </Text>
                                </Group>
                            </Stack>
                            <Stack>
                                <Title order={4} mb={6}>
                                    {post.topic}
                                </Title>
                                <Text size="sm" >
                                    {post.description}
                                </Text>
                            </Stack>
                        </Stack>
                    </Paper>
                    <ReplyList replies={replies} />
                </Container>
            </div>
        </div>
    );
}
