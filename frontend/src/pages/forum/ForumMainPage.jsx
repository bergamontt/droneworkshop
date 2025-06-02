import { useState, useEffect } from 'react';
import { Pagination, Center, Container, Stack, Paper, Button } from '@mantine/core';
import Searchbar from '../../components/common/Searchbar.jsx';
import PostsList from '../../components/forum/PostsList.jsx';
import { getAllPosts } from '../../services/PostService.jsx';
import { useFetchUnique } from '../../hooks/useFetchUnique.jsx';
import {jwtService} from "../../services/JWTService.jsx";
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import { useNavigate } from "react-router-dom";

function ForumMainPage() {
    const navigate = useNavigate();

    const [activePage, setPage] = useState(1);
    const [postPrefix, setPostPrefix] = useState('');

    useEffect(() => {
        setPostPrefix('');
        setPage(1);
    }, []);

    const { data: posts } = useFetchUnique(
        () => getAllPosts(activePage - 1, elementsPerPage, { postPrefix }),
        [getAllPosts, activePage, postPrefix]
    );

    const handlePageChange = (page) => setPage(page);
    const handlePostPrefixChange = (value) => {
        setPage(1);
        setPostPrefix(value);
    };

    const total = posts?.totalPages || 1;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            padding: '2rem',
            justifyContent: 'center',}}
        >
            <Container size="md">
                <Stack spacing="xl">
                    <Searchbar
                        placeholder="Знайти пост за назвою..."
                        onChange={handlePostPrefixChange}
                    />

                    <Paper p="lg" shadow="sm" radius="lg" withBorder>
                        <PostsList posts={posts} />
                    </Paper>

                    <Center>
                        <Pagination total={total} value={activePage} onChange={handlePageChange} size="md" />
                    </Center>
                </Stack>
            </Container>

            <Button
                onClick={() => {
                    jwtService.isLoggedIn() ? navigate("/write-post") : navigate("/log-in")
                }}
                style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '1rem',
                }}
            >
                + Написати пост
            </Button>
        </div>
    );
}

export default ForumMainPage;
