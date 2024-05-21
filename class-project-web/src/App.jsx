import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Signin/Login";
import { Toaster } from "sonner";
import Navbar from "./sections/navbar/Navbar";
import Footer from "./sections/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
