import { createContext, useContext, useState, useEffect } from 'react';

const PreloadContext = createContext();

export const usePreload = () => useContext(PreloadContext);

export const PreloadProvider = ({ children }) => {
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [totalImages, setTotalImages] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const progress = totalImages ? (imagesLoaded / totalImages) * 100 : 0;

    const preloadImage = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(url); // игнорируем ошибки
        });
    };

    const preloadAll = async (urls) => {
        setTotalImages(urls.length);
        setImagesLoaded(0);
        setIsComplete(false);

        const batchSize = 10;
        for (let i = 0; i < urls.length; i += batchSize) {
            const batch = urls.slice(i, i + batchSize);
            await Promise.all(batch.map(preloadImage));
            setImagesLoaded(prev => Math.min(prev + batch.length, urls.length));
        }
        setIsComplete(true);
    };

    return (
        <PreloadContext.Provider value={{ preloadAll, progress, isComplete, imagesLoaded, totalImages }}>
            {children}
        </PreloadContext.Provider>
    );
};