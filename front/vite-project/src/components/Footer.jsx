import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.footerContent}>
        <p>
          &copy; {new Date().getFullYear()} Clínica del Sol. Todos los derechos
          reservados.
        </p>
        <div className={styles.footerInfo}>
          <p>
            <strong>Dirección:</strong> Av. Siempre Viva 123, Ciudad del Sol
          </p>
          <p>
            <strong>WhatsApp:</strong> +54 9 11 1234 5678
          </p>
          <p>
            <strong>Correo:</strong> contacto@clinicadelsol.com
          </p>
        </div>
      </div>
    </footer>
  );
};
