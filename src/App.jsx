import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Home from "@/pages/Home"
import AboutUs from "@/pages/AboutUs"
import Memberships from "@/pages/Memberships"
import Transformations from "@/pages/Transformations"
import Gallery from "@/pages/Gallery"
import Contact from "@/pages/Contact"
import BookVisit from "@/pages/BookVisit"
import Reviews from "@/pages/Reviews"

import Academy from "@/pages/Academy"
import Alumni from "@/pages/Alumni"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="gym-theme">
      <Router>
        <div className="flex flex-col min-h-screen bg-background transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/book" element={<BookVisit />} />
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
