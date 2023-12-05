import { PostsList } from '../../../entities/Post/ui/PostsList/PostsList';
import './MainPage.css';
import { useRef, useCallback } from 'react';
import { useInfiniteScroll } from '../../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { getLimit, fetchAllPosts } from '../../../entities/Post';
import { setLimit } from '../../../entities/Post/model/slice/postSlice';
import { Loader, Title } from '../../../shared';

export const MainPage = () => {
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const dispatch = useDispatch();
    const limit = useSelector(getLimit);

    const { data, isLoading, error } = fetchAllPosts(limit);

    const scroll = useCallback(() => {
        dispatch(setLimit());
    }, [dispatch]);

    useInfiniteScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: scroll,
    });

    return (
        <main ref={wrapperRef} className='main-page'>
            <Title tag={'h1'} title='Список постов' />
            {isLoading && <Loader />}
            {data && <PostsList data={data} />}
            {error && <p>Что-то пошло не так</p>}
            <div className={'trigger'} ref={triggerRef} />
        </main>
    );
};
