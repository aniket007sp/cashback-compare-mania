import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import CategoryPage from "./pages/CategoryPage";
import FlightsPage from "./pages/FlightsPage";
import HotelsPage from "./pages/HotelsPage";
import TrainsPage from "./pages/TrainsPage";
import CabsPage from "./pages/CabsPage";
import BusPage from "./pages/BusPage";
import AccountPage from "./pages/AccountPage";
import MallsPage from "./pages/MallsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/trains" element={<TrainsPage />} />
          <Route path="/cabs" element={<CabsPage />} />
          <Route path="/buses" element={<BusPage />} />
          <Route path="/account/*" element={<AccountPage />} />
          <Route path="/malls" element={<MallsPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;