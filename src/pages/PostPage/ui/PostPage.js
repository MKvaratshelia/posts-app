import { PostDetails } from '../../../entities/Post';
import { BackButton } from '../../../features';
import './PostPage.css';
import { fetchPostById } from '../../../entities/Post';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../shared';

export const PostPage = () => {
    const { id } = useParams();
    const { data: post, isLoading, error } = fetchPostById(id);

    return (
        <main className='post-page'>
            {isLoading && <Loader />}

            {!isLoading && (
                <>
                    <BackButton className='post-page__button-back' />
                    {post && <PostDetails post={post} />}
                </>
            )}
            {error && <p>что-то пошло не так</p>}
        </main>
    );
};
