import React from "react";
import { Routes, Route } from "react-router";
import Blogs from "./Pages/blogs";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Practice from "./Pages/Practice";
// import Card from "./Components/Card"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </div>
  );
};

export default App;
