import { useState, useEffect } from 'react';

export const useImagePreloader = (urls) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!urls || urls.length === 0) {
            setLoaded(true);
            return;
        }

        let mounted = true;
        let loadedCount = 0;
        const total = urls.length;

        urls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = img.onerror = () => {
                if (!mounted) return;
                loadedCount++;
                if (loadedCount === total) setLoaded(true);
            };
        });

        return () => { mounted = false; };
    }, [urls]);

    return loaded;
};