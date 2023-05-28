import { useEffect, useRef, useState } from 'react';

const useElementOnScreen = (options: IntersectionObserverInit) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting === true) {
            setIsVisible(entry.isIntersecting);
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    }, [containerRef, options])

    const returnTuple: [React.MutableRefObject<null>, boolean] = [containerRef, isVisible];
    return returnTuple;
}

export default useElementOnScreen;