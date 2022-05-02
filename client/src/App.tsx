// import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import Articles from './pages/Articles';
import { ProtectedRoute } from './routes/ProtectedRoute';
import ArticlesPlan from './pages/ArticlesPlan';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ProtectedRoute />}>
            <Route path="/articles" element={<Articles />} />
          </Route>
          <Route path="/article-plans" element={<ProtectedRoute />}>
            <Route path="/article-plans" element={<ArticlesPlan />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
