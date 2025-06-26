import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/homePage/HomePage';
import { AboutPage } from './pages/aboutPage/AboutPage';
function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App;
