import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { PreloadProvider, usePreload } from './contexts/PreloadContext';
import { getAllImageUrls } from './utils/getAllImageUrls';
import App from './App';
import './index.css';

const AppWithPreload = () => {
  const { preloadAll, isComplete, progress } = usePreload();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const urls = getAllImageUrls();
    preloadAll(urls).then(() => setReady(true));
  }, [preloadAll]);

  if (!ready) {
    return (
      <div className="global-preloader">
        <div className="preloader-progress" style={{ width: `${progress}%` }} />
        <p>Загрузка картинок... {Math.round(progress)}%</p>
      </div>
    );
  }

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreloadProvider>
      <HashRouter>
        <AppWithPreload />
      </HashRouter>
    </PreloadProvider>
  </React.StrictMode>
);