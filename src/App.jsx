import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Gallery from "./pages/gallery/Gallery"
import Plans from "./pages/plans/Plans"
import Trainers from "./pages/trainers/Trainers"
import Notfound from "./pages/notfound/Notfound"
import Contact from "./pages/contact/Contact"
import "./index.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./login/Login"
import Register from "./components/register/Register"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Login /> */}
      <Navbar />
      <Routes >
        <Route index element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="plans" element={<Plans />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App