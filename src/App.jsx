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
    // Only prevent scroll restoration when navigating back/forward
    if (window.history.state && window.history.state.preventScroll) {
      return;
    }
    // Add the current scroll position to history state
    const currentPosition = window.scrollY;
    window.history.replaceState(
      { ...window.history.state, scrollPosition: currentPosition },
      ''
    );
  }, [location]);

  useEffect(() => {
    // Restore scroll position when navigating back
    if (window.history.state && window.history.state.scrollPosition) {
      window.scrollTo(0, window.history.state.scrollPosition);
    }
  }, []);

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