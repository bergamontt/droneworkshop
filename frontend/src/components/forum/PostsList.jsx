import { Stack } from '@mantine/core';
import PostElement from "./PostElement.jsx";

export default function PostsList({ posts }) {
    if (!posts) return <></>;

    return (
        <Stack spacing="md">
            {posts.map((post) => (
                <PostElement key={post.postId} post={post} />
            ))}
        </Stack>
    );
}
