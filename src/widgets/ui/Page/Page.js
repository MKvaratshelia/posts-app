import { useEffect, useRef } from 'react';
import { useInfiniteScroll, useThrottle } from '../../../shared';
import './Page.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { uiActions, getUIScrollByPath } from '../../../features/UI';

export const Page = ({ children, onScrollEnd, className }) => {
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const scrollPosition = useSelector((state) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 300);

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]);

    return (
        <main onScroll={onScroll} className={classNames('page', className)} ref={wrapperRef}>
            {children}
            {onScrollEnd ? <div className={'trigger'} ref={triggerRef} /> : null}
        </main>
    );
};
