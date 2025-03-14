import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Store from "./pages/Store";
import StoreLocator from "./pages/StoreLocator";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";

import { Routes, Route, useLocation } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />

        <Route
          path="/menu"
          element={
            <PageWrapper>
              <Menu />
            </PageWrapper>
          }
        />
        <Route
          path="/store"
          element={
            <PageWrapper>
              <Store />
            </PageWrapper>
          }
        />
        <Route
          path="/store-locator"
          element={
            <PageWrapper>
              <StoreLocator />
            </PageWrapper>
          }
        />
        <Route
          path="/franchise"
          element={
            <PageWrapper>
              <Franchise />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
