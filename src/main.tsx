import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Projects from './pages/Projects.tsx';
import About from './pages/About.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts'
import { Toaster } from 'react-hot-toast';
const Main = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <StrictMode>
      <Provider store={store}>
        <div className={darkMode ? 'dark' : ''}>
          <Toaster />
          <Router>
            <Routes >
              <Route path="/" element={<App darkMode={darkMode} setDarkMode={setDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </Provider>

    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Main />);