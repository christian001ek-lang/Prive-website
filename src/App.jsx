import React from "react";
import Nabar from "./components/Navbar/Nabar";
import Post from "./components/Post/post";
import Projacts from "./components/projacts/projacts";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <div>
      <Nabar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Hero /> */}
      {/* <Post />
      <Services />
      <Projacts />
      <Footer /> */}
      <Projacts />

      <Footer />
    </div>
  );
}
