import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import OppositeContentTimeline from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />  
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<OppositeContentTimeline />} />
        {/* <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/catering" element={<Catering />} />  */}
      </Routes>
      {/* <ScrollToTop /> */}
      {/* <SimpleBottomNavigation /> */}
    </HashRouter>
    <Footer />
    </>
  );
}

export default App;
