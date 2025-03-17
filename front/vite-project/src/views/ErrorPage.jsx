import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    const countDownInterval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countDownInterval);
      navigate("../Home");
    }, 5000);
    return () => clearInterval(countDownInterval);
  }, [navigate]);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Page not found</h1>
        <br />
        <p>Redireccionando a Home en {countDown} segundos ... </p>
      </div>
    </div>
  );
};
