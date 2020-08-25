import { useEffect, useRef } from 'react'

function useIsMount() {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
}

export default useIsMount;