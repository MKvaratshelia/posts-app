import { useCallback, useRef } from 'react';
// мы вызываем функцию только по истечении задержки, чтобы не спамить событием
export function useThrottle(callback, delay) {
    const throttleRef = useRef(false);

    return useCallback(
        (...args) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
