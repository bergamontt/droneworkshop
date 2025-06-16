import { useState, useEffect } from 'react';
import { Pagination, Center, Stack, NativeSelect } from '@mantine/core';
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
    const [currPostPrefix, setCurrPistPrefix ] = useState('');
    const [postPrefix, setPostPrefix] = useState('');
    const [sortValue, setSortValue] = useState('Від нових до старих');

    useEffect(() => {
        setSortValue('Від нових до старих');
        setCurrPistPrefix('');
        setPostPrefix('');
        setPage(1);
    }, []);

    const getFilters = () => {
        let sortBy = 'createdAt';
        let sortDirection = 'DESC'; 

        switch (sortValue) {
            case 'Від нових до старих':
                sortBy = 'createdAt';
                sortDirection = 'DESC';
                break;
            case 'Від старих до нових':
                sortBy = 'createdAt';
                sortDirection = 'ASC';
                break;
            case 'За темою від А до Z':
                sortBy = 'topic';
                sortDirection = 'ASC';
                break;
            case 'За темою від Z до А':
                sortBy = 'topic';
                sortDirection = 'DESC';
                break;
            default:
                break;
        }

        return {
            postPrefix: currPostPrefix,
            username: personal && currentUsername ? currentUsername : undefined,
            sortBy,
            sortDirection,
        };
    };

    const { data: posts } = useFetchUnique(
        () => getAllPosts(activePage - 1, elementsPerPage, getFilters()),
        [activePage, currPostPrefix, personal, currentUsername, sortValue],
        { enabled: !personal || (personal && !!currentUsername) }
    );

    const handlePageChange = (page) => setPage(page);
    
    const handleCurrPostPrefixChange = (value) => {
        setPage(1);
        setCurrPistPrefix(value);
    }

    const handlePostPrefixChange = (value) => {
        setPostPrefix(value);
    };

    const total = posts?.totalPages || 1;

    return (
        <div className='forum-main-container'>
            <div className='forum-posts-container'>
                <Stack>
                    
                    <div className='forum-functions-container'>
                        <Searchbar
                            placeholder="Знайти пост за назвою..."
                            value={postPrefix}
                            onChange={handlePostPrefixChange}
                            onSearch={handleCurrPostPrefixChange}
                        />
                        <NativeSelect
                            value={sortValue}
                            onChange={(event) => setSortValue(event.currentTarget.value)}
                            data={['Від нових до старих',
                                   'Від старих до нових',
                                   'За темою від А до Z',
                                   'За темою від Z до А']}
                            style={{width: "280px", marginLeft: "1em"}}
                            size='md'
                        />
                    </div>

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
