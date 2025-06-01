import { useState, useEffect } from 'react';
import { Pagination, Center, Container, Title, Space } from '@mantine/core';
import Searchbar from '../../components/common/Searchbar.jsx';
import PostsList from '../../components/forum/PostsList.jsx';
import {getAllPosts} from "../../services/PostService.jsx";
import {useFetchUnique} from "../../hooks/useFetchUnique.jsx";
import {elementsPerPage} from "../../services/ServiceConfig.jsx";
import ComponentsList from "../../components/common/ComponentsList.jsx";

function ForumMainPage() {
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

    if (!posts) return <div style={{ backgroundColor: "rgba(109, 128, 125, 0.5)", height: '100vh' }} />;

    const total = posts.totalPages || 1;

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'rgba(109, 128, 125, 0.5)',
            justifyContent: 'center',}}
        >
            <div style={{ width: '80%',
                backgroundColor: 'white',
                minHeight: '100vh',
                padding: '2rem',
                margin:"auto"}} >
                <Container size="lg">
                    <Searchbar
                        placeholder="Search posts by title..."
                        onChange={handlePostPrefixChange}
                    />

                    <Space h="md" />

                    <PostsList posts={posts} />

                    <Center mt="lg" mb="xl">
                        <Pagination total={total} value={activePage} onChange={handlePageChange} size="md" />
                    </Center>
                </Container>
            </div>
        </div>
    );
}

export default ForumMainPage;
