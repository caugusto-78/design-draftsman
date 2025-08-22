import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import WireframePrivateAreaDemo from "./pages/WireframePrivateAreaDemo";
import ImprovedDashboard from "./pages/ImprovedDashboard";
import FirstTimeOnboarding from "./pages/FirstTimeOnboarding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImprovedDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/wireframe" element={<WireframePrivateAreaDemo />} />
          <Route path="/onboarding" element={<FirstTimeOnboarding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
