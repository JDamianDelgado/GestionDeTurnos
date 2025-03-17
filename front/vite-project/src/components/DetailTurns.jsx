import axios from "axios";
import styles from "../styles/MisTurnos.module.css";
import { useState } from "react";

/* eslint-disable react/prop-types */
function DetailTurns({ appointment }) {
  const { especialidad, date, time, cobertura, id, Estado } = appointment;

  const [estadoTurno, setEstadoTurno] = useState(Estado);

  const HandleCancelTurn = (id) => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(() => {
        setEstadoTurno("Cancelado");
      })
      .catch((error) => alert("No se pudo cancelar el turno", error));
  };

  return (
    <div>
      <div className={styles.card}>
        <h4>
          Id Turno: <br /> {id}
        </h4>
        <h5>
          Especialidad: <br />
          {especialidad}
        </h5>
        <p>
          Dia: <br />
          {date}
        </p>
        <p>
          Hora: <br />
          {time}
        </p>
        <p>
          Cobertura: <br />
          {cobertura ? "Sí" : "No"}
        </p>
        <h3
          className={
            estadoTurno === "Activo" ? styles.active : styles.cancelled
          }
        >
          Estado: {estadoTurno}
        </h3>
        {estadoTurno === "Activo" && (
          <button
            className={styles.cardButton}
            onClick={() => HandleCancelTurn(id)}
          >
            Cancelar Turno
          </button>
        )}
      </div>
    </div>
  );
}
export default DetailTurns;
