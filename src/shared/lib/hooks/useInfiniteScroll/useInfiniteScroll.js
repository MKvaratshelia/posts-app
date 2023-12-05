import { useEffect, useRef } from 'react';

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }) {
    const observer = useRef(null);

    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current || null;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
