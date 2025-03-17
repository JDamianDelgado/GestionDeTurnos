import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/ReactContext";
import styles from "../styles/NewAppoinmtments.module.css";
import { validateAppointments } from "../helpers/validate";

export const NewAppointments = () => {
  const { currentUser } = useContext(UserContext);

  const [newAppointments, setNewAppointments] = useState({
    especialidad: "",
    date: "",
    time: "",
    cobertura: false,
    Estado: "Activo",
    idUser: currentUser.user.idUser.id,
  });

  const [errors, setErrors] = useState({
    especialidad: "",
    date: "",
    time: "",
    cobertura: "",
    Estado: "Activo",
    idUser: currentUser.user.idUser.id,
  });

  const navigate = useNavigate();

  const postAppointment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/schedule",
        newAppointments
      );
      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      console.log(
        "Error al crear el turno:",
        error.response ? error.response.data.message : error.message
      );
      alert(
        "Hubo un error al crear el turno: " +
          (error.response ? error.response.data.message : error.message)
      );
      console.log(errors);
      return false;
    }
  };

  const handleNewAppointmentsChange = (event) => {
    const { name, value } = event.target;

    setNewAppointments({
      ...newAppointments,
      [name]: value,
    });

    setErrors(validateAppointments(newAppointments));
  };

  const handlerSubmitNewAppointments = async (event) => {
    event.preventDefault();
    const result = await postAppointment();
    if (result === true) {
      alert("Nuevo turno creado");
      navigate("../MisTurnos");
    } else {
      alert("No se pudo crear turno");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmitNewAppointments} className={styles.form}>
        <label className={styles.label}>Especialidad:</label>
        <input
          className={styles.input}
          type="text"
          name="especialidad"
          value={newAppointments.especialidad}
          onChange={handleNewAppointmentsChange}
          required
        />

        <label className={styles.label}>Dia</label>
        <input
          className={styles.input}
          type="date"
          name="date"
          value={newAppointments.date}
          onChange={handleNewAppointmentsChange}
          required
        />

        <label className={styles.label}>Hora </label>
        <input
          className={styles.input}
          type="time"
          name="time"
          value={newAppointments.time}
          onChange={handleNewAppointmentsChange}
          required
        />

        <label className={styles.label}>Cobertura:</label>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="cobertura"
          checked={newAppointments.cobertura}
          onChange={(e) =>
            handleNewAppointmentsChange({
              target: {
                name: "cobertura",
                value: e.target.checked,
              },
            })
          }
        />

        <button className={styles.button}>Nuevo turno</button>
      </form>
    </div>
  );
};
