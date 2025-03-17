import styles from "../styles/Home.module.css";
export const Home = () => {
  return (
    <div>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            <img src="/imagenes/frente.png" alt="clinica vista de frente " />
            <img
              src="/imagenes/superior.png"
              alt="clinica vista desde arriba"
            />
            <img src="/imagenes/interior.png" alt="clinica interior" />
            <img src="/imagenes/frente.png" alt="clinica vista de frente " />
            <img
              src="/imagenes/superior.png"
              alt="clinica vista desde arriba"
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.intro}>
          <h1>¿Quiénes somos?</h1>
          <p>
            Somos una institución dedicada a brindar atención integral en áreas
            clave de la salud. Nuestro objetivo es mejorar la calidad de vida de
            nuestros pacientes a través de un enfoque multidisciplinario que
            combina conocimiento, experiencia y empatía.
          </p>
          <p>
            Con años de experiencia, contamos con profesionales altamente
            calificados en diversas especialidades, desde la psicología hasta la
            cardiología. Creemos en la importancia de la atención personalizada
            y en la promoción de hábitos saludables para un bienestar duradero.
          </p>
          <img
            src="https://www.saludadiario.es/wp-content/uploads/2024/02/acuerdo-ap.jpg"
            alt=""
          />
        </div>

        <h1 className={styles.cardsContainerh1}>
          Contamos con las siguientes áreas:
        </h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h1>Psicologia</h1>
            <img
              src="https://cpip.finis.cl/wp-content/uploads/2024/04/shutterstock_1200155323-470x270-1.jpg"
              alt="Psicología"
            />

            <p>
              Ayuda a comprender, diagnosticar y tratar problemas de salud
              mental, como ansiedad, depresión y estrés. También mejora la
              calidad de vida, promoviendo el bienestar emocional y el manejo de
              las relaciones interpersonales.
            </p>
          </div>

          <div className={styles.card}>
            <h1>Nutrición</h1>
            <img
              src="https://images.griddo.universitatcarlemany.com/en-que-consiste-la-nutricion-clinica-y-la-dietetica-hospitalaria"
              alt="Nutrición"
            />

            <p>
              Se centra en la alimentación adecuada para prevenir enfermedades y
              mejorar la calidad de vida. Una nutrición balanceada es clave para
              combatir problemas como obesidad, diabetes y desnutrición.
            </p>
          </div>

          <div className={styles.card}>
            <h1>Cardiología</h1>
            <img
              src="https://www.hospitalaleman.org.ar/wp-content/uploads/2011/10/cardiologia-1.jpg"
              alt="Cardiología"
            />

            <p>
              Se encarga del diagnóstico y tratamiento de enfermedades del
              corazón y el sistema cardiovascular, como hipertensión, infartos y
              arritmias. Es vital para prevenir y manejar condiciones que
              afectan la calidad y esperanza de vida.
            </p>
          </div>

          <div className={styles.card}>
            <h1>Oftalmología</h1>
            <img
              src="https://www.hospitalsanbernardo.com.ar/web/wp-content/uploads/2024/04/OFTALMOLOGIA.jpg"
              alt="Oftalmología"
            />

            <p>
              Se especializa en el cuidado de los ojos y la visión, incluyendo
              la prevención y tratamiento de problemas como cataratas, glaucoma
              y errores refractivos. Garantiza una buena calidad de vida al
              preservar la salud visual.
            </p>
          </div>

          <div className={styles.card}>
            <h1>Clínica médica</h1>
            <img
              src="https://fotos.perfil.com/2023/07/10/trim/987/555/atencion-medica-en-consultorio-1607098.jpg"
              alt="Clínica médica"
            />

            <p>
              Aborda enfermedades comunes y complejas en adultos mediante el
              diagnóstico, tratamiento y seguimiento. Es fundamental para el
              manejo integral de pacientes con múltiples comorbilidades.
            </p>
          </div>
          <div className={styles.card}>
            <h1>Ginecología</h1>
            <img
              src="https://emsalud.com/wp-content/uploads/2023/05/La-importancia-de-la-atencion-ginecologica-regular-para-la-salud-femenina.png"
              alt="Ginecología"
            />
            <p>
              Se especializa en el cuidado de la salud reproductiva de la mujer,
              abordando la prevención, diagnóstico y tratamiento de enfermedades
              del sistema reproductor femenino.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
