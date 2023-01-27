import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<HomePage />}/>
        <Route path="/about" element={<HomePage />}/>
        <Route path="/skills" element={<HomePage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
