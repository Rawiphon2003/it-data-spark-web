import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import Pricing from "../pages/Pricing.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Blog from "../pages/Blog.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

export default [
  { path: "/", element: <Home /> },
  { path: "/solutions", element: <Products /> },
  { path: "/solutions/:slug", element: <ProductDetail /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];
