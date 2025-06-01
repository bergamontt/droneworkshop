import { Stack } from '@mantine/core';
import ReplyElement from "./ReplyElement.jsx";

export default function ReplyList({ replies }) {
    if (!replies) return <></>;

    return (
        <Stack spacing="md">
            {replies.map((reply) => (
                <ReplyElement key={reply.replyId} reply={reply} />
            ))}
        </Stack>
    );
}
