import { useState, useEffect } from 'react';
import { Pagination, Center, Stack } from '@mantine/core';
import Searchbar from '../../components/common/Searchbar.jsx';
import PostsList from '../../components/forum/PostsList.jsx';
import { jwtService } from '../../services/JWTService.jsx';
import { getAllPosts } from '../../services/PostService.jsx';
import { useFetchUnique } from '../../hooks/useFetchUnique.jsx';
import { elementsPerPage } from '../../services/ServiceConfig.jsx';
import { getCurrentUser } from '../../services/UserService.jsx';
import '../../styles/Forum.css';

function ForumMainPage({personal = false}) {

    const [activePage, setPage] = useState(1);
    const [postPrefix, setPostPrefix] = useState('');

    const { data: user } = useFetchUnique(
        getCurrentUser,
        [getCurrentUser],
        { enabled: personal && jwtService.isLoggedIn() } 
    );

    useEffect(() => {
        setPostPrefix('');
        setPage(1);
    }, []);

    const { data: posts } = useFetchUnique(
        () =>
        getAllPosts(activePage - 1, elementsPerPage, {
            postPrefix,
            username: personal && user?.username ? user.username : undefined,
        }),
        [activePage, postPrefix, personal, user?.username],
        { enabled: !personal || (personal && !!user?.username) }
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
