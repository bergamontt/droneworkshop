import { Textarea, Button, Space } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useJWT } from '../../hooks/useJWT';
import { addComment } from '../../services/CommentService';

function CommentModal({publicationId}) {
    
    const { currentUsername } = useJWT();
    const [description, setDescription] = useState('');
    const descriptionTooLong = description.length > 2_000;
    
    const handleAddComment = async () => {
        try {
            await addComment({publicationId : publicationId, description, username: currentUsername});
            notifications.show({
                title: 'Успіх!',
                message: 'Ваш коментар було додано!',
                color: 'green'
            });
        } catch {
            notifications.show({
                title: 'Помилка!',
                message: 'Ваш коментар не було додано!',
                color: 'red'
            });
        } finally {
            setDescription('');
        }
    }

    return(
        <section className='comment-modal-container'>
            <Textarea
                label="Коментар"
                withAsterisk
                description="Напишіть текст вашого коментаря"
                placeholder="Ваш текст..."
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                error={descriptionTooLong ? 'Довжина коментаря не має перевищувати 2 000 символів' : null}
                autosize
                minRows={4}
            />
            <Space h="md"/>
            <Button
                variant="filled"
                fullWidth
                onClick={handleAddComment}
            >
                Надіслати
            </Button>
        </section>
    );
}

export default CommentModal