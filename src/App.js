import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Homepage';
import RaamatuTeenus from './pages/Raamatuteenus/RaamatuTeenus';
import IlmaTeenus from './pages/IlmaTeenus/IlmaTeenus';
import PostiTeenus from './pages/PostiTeenus/PostiTeenus';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/books' element={<RaamatuTeenus />} />
            <Route path='/weather' element={<IlmaTeenus />} />
            <Route path='/news' element={<PostiTeenus />} />
            <Route path='/about' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
