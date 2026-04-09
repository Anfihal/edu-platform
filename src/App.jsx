import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AgeSelector from './components/AgeSelector';
import AgeHomeTemplate from './pages/AgeHomeTemplate';
import StoryReader from './pages/StoryReader';  // ✅ Новый компонент

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/age-select" element={<AgeSelector />} />
      <Route path="/age/:age/home" element={<AgeHomeTemplate />} />
      <Route path="/age/:age/stories/:slug" element={<StoryReader />} />  ✅ Новый роут
    </Routes>
  );
}

export default App;