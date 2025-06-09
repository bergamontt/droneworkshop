import { Avatar, Divider } from '@mantine/core'
import { format } from "date-fns";
import '../../styles/SchemaComments.css'

function SchemaComment({comment}) {

    if (!comment) return <></>;

    return(
        <article className='schema-comment-container'>
            
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