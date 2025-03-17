import axios from "axios";
import { useState } from "react";
import { validateRegister } from "../helpers/validate";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Register.module.css";

export const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    ndni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    ndni: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const postRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        form
      );
      if (response.status === 201) {
        return true;
        // return response.data;
      }
    } catch (err) {
      alert(err.response.data.error);
      return;
    }
  };

  const handlerFormChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
    //forma mas sencilla de actualizar estado, a prueba

    setErrors(validateRegister(form));
    //forma mas sencilla de filtrar los errores, a prueba
  };

  const handlerSubmitRegister = async (event) => {
    event.preventDefault();
    const result = await postRegister();
    if (result === true) {
      alert("usuario creado con exito");
      navigate("../Home");
    } else {
      console.log(result);
      return "no se pudo crear usuario";
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmitRegister} className={styles.form}>
        <label className={styles.label}> Nombre completo</label>
        <input
          placeholder={"Ej Ramon Perez"}
          className={styles.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handlerFormChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <label className={styles.label}>Email </label>
        <input
          type="email"
          placeholder="example@example.com"
          name="email"
          value={form.email}
          onChange={handlerFormChange}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <label className={styles.label}>Fecha de nacimiento </label>
        <input
          type="date"
          value={form.birthdate}
          name="birthdate"
          onChange={handlerFormChange}
          className={styles.input}
        />
        {errors.birthdate && <p className={styles.error}>{errors.birthdate}</p>}

        <label className={styles.label}>DNI</label>
        <input
          type="text"
          name="ndni"
          value={form.ndni}
          onChange={handlerFormChange}
          className={styles.input}
        />
        {errors.ndni && <p className={styles.error}>{errors.ndni}</p>}

        <label className={styles.label}> Nombre de usuario</label>
        <input
          type="text"
          name="username"
          value={form.username}
          placeholder="Usuario1#"
          onChange={handlerFormChange}
          className={styles.input}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}

        <label className={styles.label}> Contraseña</label>
        <input
          type="password"
          name="password"
          value={form.password}
          minLength={7}
          onChange={handlerFormChange}
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}

        <button className={styles.button}>Registrarse</button>
      </form>
    </div>
  );
};
