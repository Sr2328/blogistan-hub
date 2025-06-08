import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import VideosPage from './pages/VideosPage';
import ToolsPage from './pages/ToolsPage';
import SingleBlogPage from './pages/SingleBlogPage';
import SingleVideoPage from './pages/SingleVideoPage';
import SingleToolPage from './pages/SingleToolPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="blogs/:id" element={<SingleBlogPage />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="videos/:id" element={<SingleVideoPage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="tools/:id" element={<SingleToolPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;