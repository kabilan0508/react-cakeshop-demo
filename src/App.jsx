import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./Layout/Layout";
import MyCart from "./pages/MyCart";
import Cakes from "./pages/Cakes";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/loginorsignup" element={<Login />}></Route>
        <Route path="/cart" element={<MyCart />}></Route>
        <Route path="/cakes" element={<Cakes />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
