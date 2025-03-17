# <u>GESTOR DE TURNOS PARA CENTRO CLINICO</u>

# PLATAFORMA

- Al ingresar usuario debe contar con una plataforma amigable, donde visualice un resumen del centro y las practicas que se realizan en el
- debe tener un footer donde muestre enlaces del contacto y ubicacion del centro
- debe contar con un navBar donde aparezca "LogIn"

# REGISTRO / INICIO DE SESION

- Debe contar con un item para registrarse/ iniciar sesion
- EN caso de registro debe tener un formulario donde solicite

  - Nombre
  - Apellido
  - Dni
  - Edad
  - Fecha de nacimiento
  - Email (verificar si no existe el mismo con otro nombre de usuario)

  - Username (que contenga > 8 caracteres incluyendo nros / verificar si no existe algun otro parecido en BDD)
  - Contraseña (que tenga >8caracteres incluyendo letra en mayuscula y caracteres especial)

- contar con un formulario para que ingrese username y contraseña

# En perfil

- debe contar con la misma plataforma del inicio que muestre el resumen del centro, en la parte superior 4 items:

1. Mi perfil

   - debe visualizar los datos del usuario
   - debe tener la opcion de modificar la contraseña/cobertura
   - debe tener la opcion de agregar foto de perfil

2. Nuevos turnos

   - debe contar con un formulario donde aparezca :
     - input type 'select' donde pueda escoger la especialidad (clinico, estudios por imagenes,laboratorio, etc)
     - input type 'select' donde pueda escoger la subcategoria de la especialidad
     - input type 'date' donde pueda esocger la fecha **_debe ser posterior por 24 hs de la fecha actual y no podra ser un fin de semana o feriado_**.
     - input type 'time' para seleccionar la hora **_el centro solo aceptara horario de 07 a 19 hs_**
     - colocar un button para confirmar el turno
     - en caso de esocger feriado, fin de semana o un horario fuera del rango solicitado mostrar un **error** con la nota **no se pudo confirmar el turno, recuerde que solo atendemos de lun a vie excluyendo feriados de 07 a 19hs**
     - en caso de estar todo correcto mostrar un check y una nota : **recuerde asistir con la documentacion correspondiente y estudios en caso de ser necesario, el centro cuenta con una tolerancia de 10 minutos posterior al horario. En caso de no asistir avisar con una anticipacion de 24 hs. Gracias por elegirnos**

3. Mis turnos

   - mostrar en lista los turnos, priorizando la especialidad, fecha y horario
   - mostrar boton para cancelar turno
   - **_mostrar un boton para ver el historial de turno_**
   - al cancelar turno mostrar la confirmacion del evento
   - en caso de no haber ningun turno aparecer un cartel que muestre la leyenda 'solicitar nuevo turno" que rediriga a la pestaña "nuevos turnos"

4. LogOut
   - moastrar boton para salir de la sesion
   - mostrar cartel que verifique que salio de la sesion
   - debe redirigir a la pantalla principal
