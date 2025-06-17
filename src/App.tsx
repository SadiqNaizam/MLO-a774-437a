import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import DashboardPage from "./pages/DashboardPage";
import GenericInfoPage from "./pages/GenericInfoPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendered, setting up routes.");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} /> {/* Default to LoginPage */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/reset-password" element={<PasswordResetPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} /> {/* For nested dashboard routes if any */}
            <Route path="/info" element={<GenericInfoPage />} />
            
            {/* Other application routes can be added here */}

            <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;