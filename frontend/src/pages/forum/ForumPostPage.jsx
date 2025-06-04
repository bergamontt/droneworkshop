import {
    Container, Title, Text, Group, Avatar, Paper, Stack,
    Pagination, Center, Button, Divider
} from '@mantine/core';
import { useFetch } from '../../hooks/useFetch.jsx';
import { getPostById } from "../../services/PostService.jsx";
import { getRepliesByPostId } from "../../services/ReplyService.jsx";
import ReplyList from "../../components/forum/ReplyList.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useFetchUnique } from "../../hooks/useFetchUnique.jsx";
import { elementsPerPage } from "../../services/ServiceConfig.jsx";
import {jwtService} from "../../services/JWTService.jsx";
import ReplyCreationWindow from "../../components/forum/ReplyCreationWindow.jsx";
import {useDisclosure} from "@mantine/hooks";

export default function ForumPostPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [activePage, setPage] = useState(1);
    const [opened, { open, close }] = useDisclosure(false);

    useEffect(() => setPage(1), []);

    const { data: post } = useFetch(getPostById, postId);
    const { data: replies } = useFetchUnique(
        () => getRepliesByPostId(activePage - 1, elementsPerPage, postId),
        [getRepliesByPostId, activePage, postId]
    );

    const totalPages = replies?.totalPages || 1;
    const totalReplies = replies?.totalElements ?? 0;

    if (!post) {
        return <div style={{ backgroundColor: "#f0f2f5", minHeight: '100vh' }} />;
    }

    return (
        <div style={{
            minHeight: '100vh',
            width: "100%",
            paddingTop: '2rem',
            paddingBottom: '4rem'
        }}>
            <Container size="md">
                <Paper p="lg" shadow="sm" radius="lg" withBorder>
                    <Paper
                        withBorder p="lg"
                        radius="md"
                        shadow="xs"
                        mb="lg"
                        style={{ backgroundColor: 'white'
                    }}>
                        <Stack spacing="xs" margin="auto">
                            <Group spacing="sm" justify="space-between">
                                <Title order={3}>{post.topic}</Title>
                                <Text size="xs" c="dimmed">
                                    {format(post.createdAt, 'dd.MM.yyyy, HH:mm')}
                                </Text>
                            </Group>

                            <Divider/>

                            <Group spacing="xs" align="flex-start">
                                <Stack spacing="sm" gap="xs">
                                    <Avatar radius="xl" color="blue" size="md">
                                        {post.user?.username?.charAt(0)?.toUpperCase() ?? null}
                                    </Avatar>
                                    <div>
                                        <Text fw={500} size="sm">{post.user?.username ?? "Deleted user"}</Text>
                                    </div>
                                </Stack>
                                <Group p="xs">
                                    <Text size="sm">{post.description}</Text>
                                </Group>
                            </Group>
                        </Stack>
                    </Paper>

                    <Text size="lg" fw={600} mb="xs">Відповіді ({totalReplies})</Text>
                    <ReplyList replies={replies} />

                    <Center mt="xl">
                        <Pagination total={totalPages} value={activePage} onChange={setPage} size="md" />
                    </Center>
                </Paper>
            </Container>
            <Button
                onClick={() => {
                    jwtService.isLoggedIn() ? open() : navigate("/log-in")
                }}
                style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                }}
            >
                + Відповісти
            </Button>
            <ReplyCreationWindow post={post} opened={opened} close={close}/>
        </div>
    );
}
