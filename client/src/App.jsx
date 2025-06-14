import "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";


import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Program from "./Pages/Program";
import Gallary from "./Pages/Gallary";
import Teams from "./Pages/Teams";
import Blogs from "./Pages/Blogs";


const App = () => {
  return (
    <div className="">
        <Navbar/>
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     <Route path="/blogs" element={<Blogs/>}/>
       <Route path="/gallery" element={<Gallary/>}/>

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/teams" element={<Teams/>}/>
      </Routes>
      <Footer />
    
    </div>
  );
};

export default App;
