export const validateRegister = (input) => {
  const errors = {};

  //Validar name
  if (!input.name.trim()) {
    errors.name = "El nombre completo es obligatorio.";
  } else if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    errors.name = "El nombre solo debe contener letras y espacios.";
  }

  // Validar email
  if (!input.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(input.email)
  ) {
    errors.email = "El correo electrónico no es válido.";
  }

  // Validar fecha de nacimiento
  if (!input.birthdate) {
    errors.birthdate = "La fecha de nacimiento es obligatoria.";
  } else {
    const age =
      new Date().getFullYear() - new Date(input.birthdate).getFullYear();
    if (age < 18) {
      errors.birthdate = "Debes tener al menos 18 años.";
    }
  }

  // Validar DNI
  if (!input.ndni.trim()) {
    errors.ndni = "El DNI es obligatorio.";
  } else if (!/^\d{7,10}$/.test(input.ndni)) {
    errors.ndni = "El DNI debe contener entre 8 y 10 números.";
  }

  // Validar nombre de usuario
  if (!input.username.trim()) {
    errors.username = "El nombre de usuario es obligatorio.";
  } else if (!/^[a-zA-Z0-9._-]{4,15}$/.test(input.username)) {
    errors.username =
      "El nombre de usuario debe tener entre 4 y 15 caracteres y solo puede contener letras, números, puntos y guiones.";
  }

  // Validar contraseña
  if (!input.password.trim()) {
    errors.password = "La contraseña es obligatoria.";
  } else if (input.password.length <= 6) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  } else if (!/[A-Z]/.test(input.password)) {
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula.";
  } else if (!/[0-9]/.test(input.password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  } else if (!/[!@#$%^&*]/.test(input.password)) {
    errors.password =
      "La contraseña debe contener al menos dos carácteres especial (!@#$%^&*).";
  }

  return errors;
};

export const validateLogin = (username, password) => {
  const errors = {};
  // Validar nombre de usuario
  if (typeof username !== "string" || !username.trim()) {
    errors.username = "El nombre de usuario es obligatorio.";
  } else if (!/^[a-zA-Z0-9._-]{4,15}$/.test(username)) {
    errors.username =
      "El nombre de usuario debe tener entre 4 y 15 caracteres y solo puede contener letras, números, puntos y guiones.";
  }

  // Validar contraseña
  if (typeof password !== "string" || !password.trim()) {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length <= 6) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  } else if (!/[A-Z]/.test(password)) {
    errors.password =
      "La contraseña debe contener al menos una letra mayúscula.";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.password =
      "La contraseña debe contener al menos dos carácteres especiales (!@#$%^&*).";
  }

  return errors;
};

export const validateAppointments = (formData) => {
  const errors = {};

  // Validar especialidad (debe ser una opción válida)
  if (!formData.especialidad) {
    errors.especialidad = "La especialidad es obligatoria.";
  }

  // Validar fecha (debe ser una fecha futura)
  const today = new Date();
  const minDate = new Date(today.getTime() + 48 * 60 * 60 * 1000);
  const minDateString = minDate.toISOString().split("T")[0];

  if (!formData.date) {
    errors.date = "La fecha es obligatoria.";
  } else if (formData.date < minDateString) {
    errors.date = "La fecha debe ser al menos 48 horas después de la actual.";
  } else {
    const selectedDate = new Date(formData.date);
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      errors.date = "Los turnos solo se pueden sacar de lunes a viernes.";
    }
  }

  // Validar hora (debe tener formato HH:mm)
  const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!formData.time) {
    errors.time = "La hora es obligatoria.";
  } else if (!timeRegex.test(formData.time)) {
    errors.time = "La hora debe tener el formato HH:mm.";
  } else {
    const [hours] = formData.time.split(":").map(Number);
    if (hours < 7 || hours > 19) {
      errors.time = "El turno solo se puede sacar entre las 07:00 y las 19:00.";
    }
  }

  // Validar Estado (debe ser 'Activo' o 'Cancelado')
  if (formData.Estado !== "Activo" && formData.Estado !== "Cancelado") {
    errors.Estado = "El estado debe ser 'Activo' o 'Cancelado'.";
  }

  // Validar idUser (debe existir)
  if (!formData.idUser) {
    errors.idUser = "El usuario es obligatorio.";
  }

  return errors;
};
