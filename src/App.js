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
import About from "./pages/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Commitment from "./pages/Commitment";
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/Products/ProductsDetails";
import Gallery from "./pages/Gallery";
import Certificate from "./pages/Certificate";
import Contect from "./pages/Contect";
import Cart from "./pages/Cart";
import Productss from "./components/Productss";
import Header from "./components/Header";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import Inquiry from "./components/Inquiry";
import BlogsDetails from "./pages/BlogsDetails";
import InnderGallery from "./pages/InnerGallery"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productss" element={<Productss />} />
        <Route path="/about" element={<About />} />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/ProductsDetails" element={<ProductsDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/blogdetails" element={<BlogsDetails />} />
        <Route path="/innergallery/:id" component={<InnderGallery/>} />





      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
