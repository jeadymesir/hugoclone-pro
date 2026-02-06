import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ManagedIT from "./pages/services/ManagedIT";
import InternetServices from "./pages/services/InternetServices";
import Consultancy from "./pages/services/Consultancy";
import SoftwareHardware from "./pages/services/SoftwareHardware";
import BusinessServices from "./pages/services/BusinessServices";
import Trainings from "./pages/services/Trainings";
import Leadership from "./pages/about/Leadership";
import Testimonials from "./pages/about/Testimonials";
import BankDetails from "./pages/BankDetails";
import TermsConditions from "./pages/TermsConditions";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminCareers from "./pages/admin/AdminCareers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Services */}
          <Route path="/services/managed-it" element={<ManagedIT />} />
          <Route path="/services/internet" element={<InternetServices />} />
          <Route path="/services/consultancy" element={<Consultancy />} />
          <Route path="/services/software-hardware" element={<SoftwareHardware />} />
          <Route path="/services/business" element={<BusinessServices />} />
          <Route path="/services/trainings" element={<Trainings />} />
          
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/testimonials" element={<Testimonials />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Bank Details */}
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          
          {/* Careers */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          
          {/* Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/careers" element={<AdminCareers />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
