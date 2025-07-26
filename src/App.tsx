
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Foundation from "./pages/Foundation";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";
import CustomerShowcase from "./components/CustomerShowcase";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="foundation" element={<Foundation />} />
              <Route path="products" element={<Products />} />
               <Route path="/products/:id" element={<ProductPage />}/>
              <Route path="infrastructure" element={<Infrastructure />} />
              <Route path="connect" element={<Connect />} />
              <Route path="customers" element={<CustomerShowcase />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
