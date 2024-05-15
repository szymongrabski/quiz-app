import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InstructionsPage from './pages/InstructionsPage';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/instructions" element={<InstructionsPage/>}/>
      <Route path="/:category_id" element={<CategoryPage/>}/>
      <Route path='/:category_id/quiz' element={<QuizPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
