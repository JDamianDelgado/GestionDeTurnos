import "./styles/resetCss.css";
import { Routes, Route } from "react-router-dom";
import MisTurnos from "./views/MisTurnos";
import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home.jsx";
import { Register } from "./views/Register.jsx";
import { Login } from "./views/Login.jsx";
import { ErrorPage } from "./views/ErrorPage.jsx";
import { Footer } from "./components/Footer.jsx";
import { NewAppointments } from "./views/NewAppointments.jsx";
import { MiPerfil } from "./views/miPerfil.jsx";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>

        <Route path="/MisTurnos" element={<MisTurnos />} />

        <Route path="/Register" element={<Register />} />

        <Route path="/Login" element={<Login />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="/NewAppointments" element={<NewAppointments />} />

        <Route path="/MiPerfil" element={<MiPerfil />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
