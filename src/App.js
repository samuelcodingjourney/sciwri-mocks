import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssessmentPage from './pages/AssessmentPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/courses' element={<CoursePage />} /> {/* To be implemented */}
          <Route path='/quiz' element={<AssessmentPage />} /> {/* To be implemented */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
