🛡️ Страховой квест

Интерактивные истории о страховании для детей и подростков а также ребят 18+. Игроки проходят сцены, делают выбор, проходят мини‑игры и узнают, как страховка помогает в реальной жизни.

🚀 Технологии
React + Vite
React Router (HashRouter)
CSS Modules
GitHub Pages для хостинга
Также есть тг под с ml частью
📦 Локальный запуск

bash
git clone https://github.com/Anfihal/edu-platform.git
cd edu-platform
npm install
npm run dev

Откройте http://localhost:5173

🏗️ Сборка

npm run build

🌐 Деплой на GitHub Pages

Автоматический деплой настроен через GitHub Actions. При пуше в ветку main проект собирается и публикуется на https://anfihal.github.io/edu-platform/.

📁 Структура
src/pages/ – компоненты страниц (AgeHome, StoryReader)
src/pages/age-/stories//story.js – файлы историй
public/images/ – персонажи, фоны, иконки

✍️ Добавление новой истории

1. Создайте папку в src/pages/age-X/stories/название/
2. Добавьте файл story.js по образцу существующих
3. Фоны и персонажи поместите в public/images/
4. Добавьте запись в AGE_CONTENT

📝 Лицензия

Проект создан для примера реализации игры страховых компаний.



