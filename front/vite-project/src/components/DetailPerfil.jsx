import styles from "../styles/DetailPerfil.module.css";

/* eslint-disable react/prop-types */
function DetailPerfil({ myDates }) {
  const { id, name, email, birthdate, ndni } = myDates;

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h1 className={styles.line}>
          Id Usuario: <br />
          {id}
        </h1>
        <h1 className={styles.line}>
          Nombre: <br />
          {name}
        </h1>
        <h1 className={styles.line}>
          Email: <br />
          {email}
        </h1>
        <h1 className={styles.line}>
          Birthdate: <br />
          {birthdate}
        </h1>
        <h1 className={styles.line}>
          Nro de Dni: <br />
          {ndni}
        </h1>
      </div>
    </div>
  );
}
export default DetailPerfil;
