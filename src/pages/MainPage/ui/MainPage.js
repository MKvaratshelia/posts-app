import { PostsList } from '../../../entities/Post/ui/PostsList/PostsList';
import './MainPage.css';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLimit, fetchAllPosts } from '../../../entities/Post';
import { setLimit } from '../../../entities/Post/model/slice/postSlice';
import { Loader, Title } from '../../../shared';
import { Page } from '../../../widgets';

const MainPage = () => {
    const dispatch = useDispatch();
    const limit = useSelector(getLimit);

    const { data, isLoading, error } = fetchAllPosts(limit);

    const onScroll = useCallback(() => {
        dispatch(setLimit());
    }, [dispatch]);

    return (
        <Page className={'main-page'} onScrollEnd={onScroll}>
            <Title tag={'h1'} title='Список постов' />
            {isLoading && <Loader />}
            {data && <PostsList data={data} />}
            {error && <p>Что-то пошло не так</p>}
        </Page>
    );
};

export default MainPage;
