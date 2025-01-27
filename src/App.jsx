import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './hooks/useAuth';
import Index from './pages/Index';
import OfferCategoryPage from './components/OfferCategoryPage';
import Login from './components/Login';
import SignUp from './components/SignUp';

const ScrollToPosition = () => {
  const location = useLocation();

  useEffect(() => {
    // Save scroll position before navigation
    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Restore scroll position after navigation
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null && window.history.state?.type === 'POP') {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedPosition));
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <ScrollToPosition />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/offers/:category" element={<OfferCategoryPage />} />
            <Route path="/offers/:category/:subcategory" element={<OfferCategoryPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;