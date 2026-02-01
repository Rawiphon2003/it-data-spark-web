import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import LineFloatingButton from "../components/LineFloatingButton.jsx";
import routes from "./routes.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-black via-[#050B18] to-black">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Routes>
      </main>
      <Footer />
      <LineFloatingButton />
    </div>
  );
}
