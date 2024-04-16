import { PostDetails } from '../../../entities/Post';
import './PostPage.css';
import { fetchPostById } from '../../../entities/Post';
import { useParams } from 'react-router-dom';
import { Button, Loader } from '../../../shared';
import { Page } from '../../../widgets';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const PostPage = () => {
    const { id } = useParams();
    const { data: post, isLoading, error } = fetchPostById(id);
    const navigate = useNavigate();

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    return (
        <Page>
            {isLoading && <Loader />}

            {!isLoading && (
                <>
                    <Button className='post-page__button-back' onClick={goBack}>
                        Назад
                    </Button>
                    {post && <PostDetails post={post} />}
                </>
            )}
            {error && <p>что-то пошло не так</p>}
        </Page>
    );
};

export default PostPage;
