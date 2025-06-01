import { Container, Space } from '@mantine/core';
import { useFetch } from '../../hooks/useFetch.jsx'
import Searchbar from '../../components/common/Searchbar.jsx';
import PostsList from '../../components/forum/PostsList.jsx';
import {getAllPosts} from "../../services/PostService.jsx";

function ForumMainPage() {
    const { data: posts } = useFetch(getAllPosts);

    if (!posts) return <div style={{ backgroundColor: "rgba(109, 128, 125, 0.5)", height: '100vh' }} />;

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
                    />

                    <Space h="md" />

                    <PostsList posts={posts} />

                </Container>
            </div>
        </div>
    );
}

export default ForumMainPage;
