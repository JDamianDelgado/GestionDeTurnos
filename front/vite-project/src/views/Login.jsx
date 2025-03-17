import { useContext, useState } from "react";
import { validateLogin } from "../helpers/validate";
import styles from "../styles/login.module.css";
import { UserContext } from "../Context/ReactContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  ///////////
  const { loginUser } = useContext(UserContext);

  const navigate = useNavigate();

  // const postLoginUser = async () => {
  //   const succes = await loginUser(login);
  //   return succes;
  // };

  const handlerLoginChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });

    setErrors(validateLogin(login));
  };

  const handlerSubmitLogin = async (event) => {
    event.preventDefault();
    const result = await loginUser(login);
    //crear validate login
    if (result) {
      alert("ingreso exitoso");
      navigate("../Home");
    } else {
      alert("no existe usuario en base de datos");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handlerSubmitLogin}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png"
          alt=""
        />
        <label className={styles.label}> Nombre de usuario</label>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={login.username}
          onChange={handlerLoginChange}
          required
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}

        <label className={styles.label}>Contraseña</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handlerLoginChange}
          required
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button className={styles.button} type="submit">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

////// AUN NO ES FUNCIONAL
