import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import EditCategoria from "./Pages/EditCategoria";
import EditVideo from "./Pages/EditVideo";
import Home from "./Pages/Home";
import NuevaCategoria from "./Pages/NuevaCategoria";
import NuevoVideo from "./Pages/NuevoVideo";
import Page404 from "./Pages/Page404";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
        <Route path="/nueva-categoria" element={<NuevaCategoria />} />
        <Route path="/edit-video/:id" element={<EditVideo />} />
        <Route path="/edit-categoria/:id" element={<EditCategoria />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
