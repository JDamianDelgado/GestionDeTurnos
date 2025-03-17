import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/ReactContext";
import DetailPerfil from "../components/DetailPerfil";
import styles from "../styles/DetailPerfil.module.css";

export const MiPerfil = () => {
  const [myDates, setMyDates] = useState(null);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      setMyDates(currentUser.user.idUser);
    }
  }, [currentUser]);
  if (!currentUser || !myDates)
    return (
      <div className={styles.container}>
        <h1 className={styles.line}>Por favor inicie sesion</h1>;
      </div>
    );

  return (
    <div>
      <DetailPerfil myDates={myDates} />
    </div>
  );
};
