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
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition !== null) {
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition),
            behavior: 'instant'
          });
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
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