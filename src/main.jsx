import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// ===== АВТОМАТИЧЕСКАЯ ПРЕДЗАГРУЗКА ИЗОБРАЖЕНИЙ =====
// Собираем все PNG/JPG/JPEG/WEBP из папок public/images/characters, public/images/stories и корня public/images
const imageModules = import.meta.glob(
  [
    '/public/images/characters/**/*.{png,jpg,jpeg,webp}',
    '/public/images/stories/**/*.{png,jpg,jpeg,webp}',
    '/public/images/*.{png,jpg,jpeg,webp}'
  ],
  { eager: true, as: 'url' }
);

const allImageUrls = Object.values(imageModules);

// Фоновая предзагрузка (не блокирует рендеринг)
const preloadImages = (urls) => {
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

if (allImageUrls.length > 0) {
  const startPreload = () => preloadImages(allImageUrls);
  // Используем requestIdleCallback, если доступен, чтобы не мешать первому рендеру
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(startPreload, { timeout: 2000 });
  } else {
    setTimeout(startPreload, 1);
  }
}
// ====================================================

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);