import SchemaComment from './SchemaComment';
import CommentModal from './CommentModal';
import { Divider, Pagination, Center, Modal, Button, Space } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useFetchUnique } from '../../hooks/useFetchUnique';
import { getCommentsByPublicationtId } from '../../services/CommentService';
import { elementsPerPage } from '../../services/ServiceConfig';
import { useState } from 'react';
import '../../styles/SchemaComments.css'

function SchemaComments({publicationId}) {
    
    const [opened, { open, close }] = useDisclosure(false);
    const [activePage, setPage] = useState(1);

    const { data: comments } = useFetchUnique(
        () => getCommentsByPublicationtId(
        activePage - 1, elementsPerPage, publicationId),
        [getCommentsByPublicationtId, activePage, publicationId]
    );
    
    const totalPages = comments?.totalPages || 1;

    return(
        <section className="schema-comments-container">
            
            <article className="comments-count-container">
                
                <span className="comments-count">
                    Коментарі ({comments?.content?.length})
                </span>

                <Modal
                    opened={opened}
                    onClose={close}
                    title="Меню створення коментаря"
                    centered
                >
                    <CommentModal 
                        publicationId={publicationId}
                    />
                </Modal>

                <Button
                    variant="light"
                    onClick={open}
                >
                    + Написати коментарій
                </Button>

            </article>
            
            <article className="comments-container">
                {comments?.content?.length > 0 &&
                    <Space h="md" />}
                {comments?.content?.map((comment) =>
                    (<SchemaComment
                        comment={comment}
                    />))}
                {comments?.content?.length > 0 &&
                    <Divider size={"sm"}/>}
            </article>
            
            {comments?.content?.length > 0 &&
                <Center mt="xl">
                    <Pagination 
                        total={totalPages} 
                        value={activePage} 
                        onChange={setPage} 
                        size="md" 
                    />
                </Center>}

        </section>
    );
}

export default SchemaComments