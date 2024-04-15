import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/color.css";
import "./assets/css/flaticon.css";
import "./assets/css/font-awesome-all.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/owl.css";
// import "./assets/css/owl.video.play.html";
import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/timePicker.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Booking from "./components/Booking";
import Chooseus from "./components/Chooseus";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Funfact from "./components/Funfact";
import Header from "./components/Header";
import Industries from "./components/Industries";
import Location from "./components/Location";
import Service from "./components/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (


  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Header />}>
  //       <Route path="/about" element={<About />} />
  //       <Route path="/banner" element={<Banner />} />
  //       <Route path="/blog" element={<Blog />} />
  //       <Route path="/chooseus" element={<Chooseus />} />
  //       <Route path="/booking" element={<Booking />} />
  //       <Route path="/event" element={<Event />} />
  //       <Route path="/service" element={<Service />} />
  //       <Route path="/funfact" element={<Funfact />} />
  //       <Route path="/industries" element={<Industries/>} />
  //       <Route path="/location" element={<Location/>} />


  //     </Route>
  //   </Routes>
  //   <Footer/>
  // </BrowserRouter>

    <>
      <Header />
      <Banner/>
      <About/>
      <Service/>
      <Industries/>
      <Chooseus/>s
      <Funfact/>
      <Blog/>
      <Event/>
      <Booking/>
      <Location/>
      <Footer/>
    </>
  );
}

export default App;
