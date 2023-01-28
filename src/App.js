import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/skills" element={<SkillsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
