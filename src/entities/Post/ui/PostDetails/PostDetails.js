import { P, Title } from '../../../../shared';

export const PostDetails = ({ post }) => {
    return (
        <div className='post-details'>
            <P>№ {post.id}</P>
            <Title tag={'h1'} title={`Заголовок: ${post.title}`} className='postitem__title' />
            <P className='postitem__body'>{post.body}</P>
        </div>
    );
};
