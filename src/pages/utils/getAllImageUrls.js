const characters = import.meta.glob('/images/characters/*/*.png', { eager: true, as: 'url', import: 'default' });
const storyBgsJpg = import.meta.glob('/images/stories/**/*.jpg', { eager: true, as: 'url', import: 'default' });
const storyBgsPng = import.meta.glob('/images/stories/**/*.png', { eager: true, as: 'url', import: 'default' });
const icons = import.meta.glob('/images/icons/*.svg', { eager: true, as: 'url', import: 'default' });

export const getAllImageUrls = () => {
    const urls = [
        ...Object.values(characters),
        ...Object.values(storyBgsJpg),
        ...Object.values(storyBgsPng),
        ...Object.values(icons)
    ];
    return [...new Set(urls)];
};