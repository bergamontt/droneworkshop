import { Stack } from '@mantine/core';
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
        </Stack>
    );
}
