import { useRef } from 'react';
import { useInfiniteScroll } from '../../../shared';
import './Page.css';
import classNames from 'classnames';

export const Page = ({ children, onScrollEnd, className }) => {
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);

    useInfiniteScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: onScrollEnd,
    });
    return (
        <main className={classNames('page', className)} ref={wrapperRef}>
            {children}
            {onScrollEnd ? <div className={'trigger'} ref={triggerRef} /> : null}
        </main>
    );
};
