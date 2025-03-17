# GESTOR DE TURNOS PARA CENTRO CLÍNICO

## Descripción

Este proyecto es un sistema de gestión de turnos para un centro clínico, desarrollado con un frontend en React y un backend en Node.js con NestJS. Utiliza una base de datos PostgreSQL para almacenar la información de los usuarios y los turnos.

---

## 🚀 Instalación y Configuración en Local

### Clonar el Repositorio

```sh
git clone https://github.com/JDamianDelgado/GestionDeTurnos.git
cd GestionDeTurnos
```

### 🖥️ Configurar el Backend

1. Accede a la carpeta del backend:
   ```sh
   cd back
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Crea un archivo `.env` en la raíz del backend y agrega las siguientes variables de entorno (los valores deben configurse segun su entorno):
   ```env
   PORT=3000
   envDSourceusername=*******
   envDSourcepassword=*******
   envDSourcedatabase=*******
   envDSourceTypes=postgres
   ```
4. Ejecuta las migraciones de la base de datos (si aplica):
   ```sh
   npm run migration:run
   ```
5. Inicia el servidor:
   ```sh
   npm run start
   ```
   El backend se ejecutará en `http://localhost:3000`.

### 🌐 Configurar el Frontend

1. Accede a la carpeta del frontend:
   ```sh
   cd ../front
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
   El frontend se ejecutará en `http://localhost:5173` (por defecto en Vite).

---

## 🏥 Funcionalidades del Sistema

### 📌 Plataforma

- Presenta una interfaz amigable con información sobre el centro y sus servicios.
- Cuenta con un **footer** con enlaces de contacto y ubicación.
- Incluye un **NavBar** con un botón de inicio de sesión (_LogIn_).

### 🔐 Registro / Inicio de Sesión

- Permite a los usuarios registrarse y acceder al sistema.
- Registro con los siguientes datos requeridos:
  - Nombre
  - Apellido
  - DNI
  - Edad
  - Fecha de nacimiento
  - Email (verificación de duplicados en la base de datos)
  - Username (> 8 caracteres, incluyendo números, validando duplicados)
  - Contraseña (> 8 caracteres, al menos una mayúscula y un carácter especial)
- Inicio de sesión con **username** y **contraseña**.

### 👤 Perfil de Usuario

- Muestra los datos del usuario registrado.
- Opciones para modificar contraseña y cobertura médica.
- Permite subir una foto de perfil.

### 📅 Solicitud de Turnos

- Formulario para agendar turnos con los siguientes campos:
  - **Especialidad** (_select_)
  - **Subcategoría** de la especialidad (_select_)
  - **Fecha** (_date_, mínimo 24 horas después, sin fines de semana ni feriados)
  - **Hora** (_time_, de 07:00 a 19:00 horas)
  - **Botón de Confirmación**
- Validaciones:
  - No se permiten turnos en fines de semana o feriados.
  - Horario fuera del rango muestra un error.
  - Confirmación con mensaje de asistencia y tolerancia de 10 minutos.

### 📜 Historial y Cancelación de Turnos

- Lista de turnos organizados por especialidad, fecha y hora.
- Opción para cancelar turnos con confirmación.
- Acceso al historial de turnos.
- Si no hay turnos agendados, aparece un mensaje con opción de solicitar uno nuevo.

### 🔓 Cierre de Sesión (_LogOut_)

- Botón para salir de la sesión.
- Mensaje de confirmación de cierre de sesión.
- Redirección a la pantalla principal.

---

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un **fork**, crear una nueva rama y enviar un **pull request** con tus mejoras.

---

## 📩 Contacto

📧 **Email:** JoakoDelgado2013@gmail.com  
🔗 **LinkedIn:** [Joaquín D. Delgado](https://www.linkedin.com/in/joaquin-d-delgado-312125351/)
