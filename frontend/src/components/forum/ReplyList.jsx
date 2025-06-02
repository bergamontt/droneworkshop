import { Stack, Text, Center } from '@mantine/core';
import ReplyElement from "./ReplyElement.jsx";

export default function ReplyList({ replies }) {
    if (!replies) return <></>;
    const content = replies.content;
    if (!content || content.length === 0) {
        return (
            <Center p="lg">
                <Text size="md" c="dimmed">No replies yet.</Text>
            </Center>
        );
    }

    return (
        <Stack spacing="md" mt="md">
            {content.map((reply) => (
                <ReplyElement key={reply.replyId} reply={reply} />
            ))}
        </Stack>
    );
}
