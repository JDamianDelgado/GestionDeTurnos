import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "../Context/ReactContext";

export const NavBar = () => {
  const { currentUser, logOut } = useContext(UserContext);

  return (
    <div className={styles.navBar}>
      <img className={styles.navBarImg} src="/imagenes/logo.png" alt="Logo" />
      <div className="navBarItemsGroup">
        <Link to="/Home" className={styles.navBarItems}>
          Home
        </Link>
        {!currentUser ? (
          <>
            <Link to="/Register" className={styles.navBarItems}>
              Registrarse
            </Link>
            <Link to="/Login" className={styles.navBarItems}>
              Iniciar Sesión
            </Link>
          </>
        ) : (
          <>
            <Link to="/MisTurnos" className={styles.navBarItems}>
              Mis Turnos
            </Link>
            <Link to="/NewAppointments" className={styles.navBarItems}>
              Nuevo turno
            </Link>
            <button onClick={logOut}>LogOut</button>
          </>
        )}
      </div>
      <Link to="/MiPerfil">
        <img
          className={styles.navBarImg}
          src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
          alt="userDefault"
        />
      </Link>
    </div>
  );
};
