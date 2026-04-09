// Персонажи
const characters = import.meta.glob('/public/images/characters/*/*.png', { eager: true, as: 'url', import: 'default' });
// Фоны историй
const storyBgsJpg = import.meta.glob('/public/images/stories/**/*.jpg', { eager: true, as: 'url', import: 'default' });
const storyBgsPng = import.meta.glob('/public/images/stories/**/*.png', { eager: true, as: 'url', import: 'default' });
// Иконки
const icons = import.meta.glob('/public/images/icons/*.svg', { eager: true, as: 'url', import: 'default' });

export const getAllImageUrls = () => {
    const urls = [
        ...Object.values(characters),
        ...Object.values(storyBgsJpg),
        ...Object.values(storyBgsPng),
        ...Object.values(icons)
    ];
    return [...new Set(urls)]; // уникальные
};