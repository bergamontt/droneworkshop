import {Avatar, CloseButton, Divider} from '@mantine/core'
import { format } from "date-fns";
import '../../styles/SchemaComments.css'
import {notifications} from "@mantine/notifications";
import {useJWT} from "../../hooks/useJWT.jsx";
import {deleteComment} from "../../services/CommentService.jsx";

function SchemaComment({comment}) {
    const { currentUsername } = useJWT();

    const handleDelete = async () => {
        try{
            await deleteComment(comment.commentId);
            notifications.show({
                color: 'green',
                title: 'Коментар видалено',
                message: 'Комендар успішно видалено! Перезавантажте сторінку',
            })
        } catch {
            notifications.show({
                color: 'red',
                title: 'Виникла помилка',
                message: 'Не вдалося видалити коментар',
            })
        }
    }

    if (!comment) return <></>;

    return(
        <article className='schema-comment-container'>

            {comment?.username === currentUsername && (
                <CloseButton
                    size="sm"
                    style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 10,
                    }}
                    variant="subtle"
                    color="gray"
                    onClick={handleDelete}
                />
            )}
            
            <Divider size={"sm"}/>
            
            <div className='comment-main-container'>
                <div className='comment-user-container'>
                    <Avatar radius="xl" color="blue" size="md" style>
                        {comment?.username?.charAt(0)?.toUpperCase() ?? null}
                    </Avatar>
                    <span className='comment-creator-username'>
                        {comment?.username ?? "Deleted user"}
                    </span>
                </div>

                <div className='comment-main-data'>
                    <div className='comment-user-text'>
                        <span>
                            {comment.description}
                        </span>
                    </div>

                    <div className='comment-date-container'>
                        <span className='comment-date'>
                            {format(comment.createdAt, 'dd.MM.yyyy, HH:mm')}
                        </span>
                    </div> 
                </div>

            </div>

        </article>
    );
}

export default SchemaComment