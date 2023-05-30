import { useEffect, useRef, useState } from 'react';

interface UseElementOnScreen extends IntersectionObserverInit {
    onlyOn: boolean
}

const useElementOnScreen = ({onlyOn, ...options}: UseElementOnScreen) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (!onlyOn) {
            setIsVisible(entry.isIntersecting);
        } else if (entry.isIntersecting === true) {
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