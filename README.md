## Tareas

### Completadas

- Utilizar **useState** para componentes de funciones con estado. -> Se utilizó componentes de funciones con estado proporcionado por el **Hook** useState.
- Crear un componente con **Render Prop**. -> DateFormatter que renderiza un elemento con una fecha formateada.
- Implementar un **High-Order Component**. -> función withErrorBoundary para extender un componente con un limite de error y un elemento de respaldo.
- Usar **StrictMode**. -> Añadido al componente de la Aplicación.
- Procesar la entrada de texto en la creación de la publicación. -> Un elemento con el atributo content-editable para registrar saltos de linea y que cambia el alto del elemento de forma dinamica.
- Limpiar la entrada de texto anterior. -> Uso de **ref** para limpiar su contenido al enviar el formulario.
- Manejar el estado de los componentes de forma optima. -> Uso de **Context API**.
- Implementar **Arrastra y Suelta** para subir imagenes y videos y permitir el uso de su lógica en multiples componentes (reusabilidad). -> Uso de **Custom Hook** con la lógica que puede ser reutilizada.
- Implementar **Firebase Realtime Database**. -> Se registró el proyecto y se añadió el SDK de Firebase para almacenar las publicaciones en la base de datos.
- Implementar **Firebase Storage**. -> Metódos para interactuar con el SDK de Firebase para subir los archivos multimedia de las publicaciones.
- Utilizar **loader** en webpack para manejar archivos de _CSS_. -> Se añadió style-loader y css-loader para cargar los estilos en modo de desarrollo, para producción, se añadira MiniCSSExtractPlugin.
- Implementar **Firebase Authentication**. -> Primero, se añadió un router y rutas para dividir la aplicación en home, login y register. Luego se implementó autenticación a traves de Google, con email y contraseña y registro de usuarios.
- Diseñar e implementar componente Form con validaciónes usando el patrón de diseño **compound components**". -> Utilizando **Context API + Hooks** se implementaron los componentes Fomr y Input para crear formularios con su propio estado, eliminando redundancias.
- Añadir input de foto de perfil con previsualizador. -> Se utilizó los patrones **compound component** y **render props** para crear un componente que renderiza la previsualización del input.
- Añadir validaciónes a los formularios. -> Se añdió la libreria validator.js y la logica necesaria para validar los formularios a traves de esquemas.

### No Completadas

- Crear componente ErrorMessage para mostrar error en un campo de formulario.
- Realizar modificaciónes necesarias para desplegar la aplicación en Heroku.
- Dividir el formulario de registro en 2 partes.
- Añadir emojis.
- Permitir al desarrollador añadir las validaciones que desee para reducir el tamaño del paquete y mejorarla usabilidad: {fieldName: {
  validator: () => {}, // should return bool
  message: "Message", // when is false
  type: "isEmail" // identifier for error component
  }}
- Completar **CRUD** de publicaciones.
- Hacer Code Splitting para mejorar el tamaño de los estaticos.
- Implementar Firebase Function para procesar imagenes de perfil al ser subidas (Recortar a 1:1, reducir tamaño, calidad).
