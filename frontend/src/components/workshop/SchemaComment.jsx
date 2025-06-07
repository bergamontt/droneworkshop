import { Avatar, Divider } from '@mantine/core'
import '../../styles/SchemaComments.css'

function SchemaComment() {
    return(
        <article className='schema-comment-container'>
            
            <Divider size={"sm"}/>
            
            <div className='comment-main-container'>
                <div className='comment-user-container'>
                    <Avatar radius="xl" color="blue" size="md" style>
                        V
                    </Avatar>
                    <span className='comment-creator-username'>
                        vovan228
                    </span>
                </div>

                <div className='comment-main-data'>
                    <div className='comment-user-text'>
                        <span>
                            Я б замінив окуня на карася і була би просто пушка.
                        </span>
                    </div>

                    <div className='comment-date-container'>
                        <span className='comment-date'>
                            07.06.2025
                        </span>
                    </div> 
                </div>

            </div>

        </article>
    );
}

export default SchemaComment