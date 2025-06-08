import { useState, useEffect } from 'react';
import { Pagination, Center, Stack } from '@mantine/core';
import Searchbar from '../../components/common/Searchbar.jsx';
import PostsList from '../../components/forum/PostsList.jsx';
import { getAllPosts } from '../../services/PostService.jsx';
import { useFetchUnique } from '../../hooks/useFetchUnique.jsx';
import { useJWT } from "../../hooks/useJWT.jsx";
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import '../../styles/Forum.css';

function ForumMainPage({personal = false}) {
    const { currentUsername } = useJWT();
    const [activePage, setPage] = useState(1);
    const [postPrefix, setPostPrefix] = useState('');

    useEffect(() => {
        setPostPrefix('');
        setPage(1);
    }, []);

    const { data: posts } = useFetchUnique(
        () =>
        getAllPosts(activePage - 1, elementsPerPage, {
            postPrefix,
            username: personal && currentUsername ? currentUsername : undefined,
        }),
        [activePage, postPrefix, personal, currentUsername],
        { enabled: !personal || (personal && !!currentUsername) }
    );

    const handlePageChange = (page) => setPage(page);
    
    const handlePostPrefixChange = (value) => {
        setPage(1);
        setPostPrefix(value);
    };

    const total = posts?.totalPages || 1;

    return (
        <div className='forum-main-container'>
            <div className='forum-posts-container'>
                <Stack>
                
                <Searchbar
                    placeholder="Знайти пост за назвою..."
                    onChange={handlePostPrefixChange}
                />

                <PostsList posts={posts} />

                <Center>
                    <Pagination 
                        total={total} 
                        value={activePage} 
                        onChange={handlePageChange}
                    />
                </Center>
                </Stack>
            </div>
        </div>
    );
}

export default ForumMainPage;
