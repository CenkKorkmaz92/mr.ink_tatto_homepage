import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Pircing from "./pages/Pircing";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Imprint from "./pages/Imprint";
import DataProtection from "./pages/DataProtection";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * Main application component with routing and providers
 * Sets up React Query, tooltips, toasts, and defines all routes
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="team" element={<Team />} />
            <Route path="pircing" element={<Pircing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="imprint" element={<Imprint />} />
            <Route path="data-protection" element={<DataProtection />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
