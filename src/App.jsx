import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutusPage from "./Pages/AboutusPage";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";
import TopHeader from "./Components/TopHeader";
import NavBar from "./Components/NavBar";
import FindWorkPage from "./Pages/FindWorkPage";
import IntershipPage from "./Pages/IntershipPage";
import Register from "./Pages/Register";
import ContactUsPage from "./Pages/ContactUsPage";
import RegisterSample from "./Components/RegisterSample";
import HRRegister from "./Pages/HRRegister";

export default function App() {
  return (
    <div
      id="__next"
      className="scroll-smooth !bg-white "
      style={{ scrollBehavior: "smooth" }}
    >
      <BrowserRouter>
        <TopHeader></TopHeader>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
          <Route
            path="/findwork"
            element={<FindWorkPage></FindWorkPage>}
          ></Route>
          <Route
            path="/contactus"
            element={<ContactUsPage></ContactUsPage>}
          ></Route>
          <Route
            path="/internships"
            element={<IntershipPage></IntershipPage>}
          ></Route>
          <Route
            path="/register"
            element={<Register></Register>}
          ></Route>
          <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
          <Route
            path="/hrForm"
            element={<HRRegister></HRRegister>}
          ></Route>

          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
