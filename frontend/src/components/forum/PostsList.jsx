import { Stack, Alert, Anchor } from '@mantine/core';
import info from '../../assets/info.svg'
import PostElement from "./PostElement.jsx";

export default function PostsList({ posts }) {
    if (!posts) return <></>;
    const content = posts.content;
    if (!content) return <></>;

    return (
        <Stack spacing="md">
            {content.map((post) => (
                <PostElement key={post.postId} post={post} />
            ))}
            {
                content.length === 0 &&
                <Alert
                    variant="white"
                    color="blue"
                    title="Опублікованих постів не знайдено"
                    icon={<SidebarIcon link={info} size="1.5em" />}
                    style={{width: "500px"}}
                >
                    Ви можете створити власний пост-питання на сторінці&nbsp;
                    <Anchor href="http://localhost:5173/write-post" target="_blank">
                        написання постів
                    </Anchor>.
                    Створивши пост, Ви зможете переглянути його на цій сторінці.
                </Alert>
            }      
        </Stack>
    );
}
