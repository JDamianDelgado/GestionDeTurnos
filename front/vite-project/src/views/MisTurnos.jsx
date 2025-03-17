import axios from "axios";
import styles from "../styles/MisTurnos.module.css";
import { useState, useEffect } from "react";
import DetailTurns from "../components/DetailTurns";
import { useContext } from "react";
import { UserContext } from "../Context/ReactContext";
import { useNavigate } from "react-router-dom";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    if (currentUser && currentUser.user.idUser.id) {
      axios
        .get(`http://localhost:3000/users/${currentUser.user.idUser.id}`)
        .then((res) => {
          setAppointments(res.data.idUsers.Appointments);
          console.log(res.data.idUsers.Appointments);
        });
    }
  }, [currentUser]);

  if (!currentUser) return;

  const handleCancelTurn = (id) => {
    axios
      .put(`http://localhost:3000/appointments/cancel/${id}`)
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === id
              ? { ...appointment, Estado: "Cancelado" }
              : appointment
          )
        );
        alert("El turno ha sido cancelado correctamente.");
      })
      .catch((error) => {
        console.error("Error al cancelar el turno:", error);
        alert("Hubo un error al cancelar el turno.");
      });
  };
  return (
    <div className={styles.cardContainer}>
      {appointments.length === 0 ? (
        <div className={styles.all}>
          <button
            onClick={() => {
              navigate("/NewAppointments");
            }}
          >
            Nuevo turno
          </button>
        </div>
      ) : (
        appointments.map((appointment) => (
          <DetailTurns
            key={appointment.id}
            appointment={appointment}
            onCancel={handleCancelTurn}
          />
        ))
      )}
    </div>
  );
};
export default MisTurnos;
