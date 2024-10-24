import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";

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
        {/* <Route path="/dinner" element={<DinnerMenu />} />
        <Route path="/lunch" element={<LunchMenu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/catering" element={<Catering />} /> */}
      </Routes>
      {/* <ScrollToTop /> */}
      {/* <SimpleBottomNavigation /> */}
    </HashRouter>
    </>
  );
}

export default App;
