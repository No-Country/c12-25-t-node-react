# <img width="40" height="40" src="https://img.icons8.com/dusk/40/web.png" alt="web"/> APPARTAMENTOS - FRONT 


## <img width="40" height="40" src="https://img.icons8.com/doodle/40/crowd.png" alt="crowd"/> ¿Cómo nos organizamos ?

Utilizamos la metodología **ágile** y **scrum**. Intentamos coordinar con nuestro UX/UI para contar con la información en Figma y con el grupo de BackEnd para tener los servicios a utilizar en las tareas de cada Sprint.

Creamos un **MVP** y dividimos las tareas en **sprints** (con duración de una semana):


- Funcionalidades para el MVP:

### SPRINT 1:

Funcionalidades:
```
-Footer 
-Home - Hero image 
-Home - Destacados 
-Home - CTA a contactos 
-Página Términos y condiciones 
```

Agregamos porque disposumos de tiempo:
```
-Página Quienes Somos - banner y recuadro de texto
-Páginas search - contact - favorites - que se vea el banner
```


### SPRINT 2:

Funcionalidades: 
```
-Header  
-Home - Buscador  
-Quienes Somos - cards de los integrantes 
-Contacto  - el Formulario 
-Detalle de la propiedad - resumen y carousel 
-Detalle de la propiedad - propiedad - zona  
-Detalle de la propiedad - contacto  
-Página no encontrada 
```

Agregamos, porque dispusimos de tiempo:
```
Componente loader 
```

Quedo pendiente, porque no contabamos con los endpoint ni la documentación por parte del back:
```
-Unir Front con Back
```

### SPRINT 3:

Funcionalidades:
```
-Registro de nuevo usuario 
-Login 
-Unir Front con Back en el detalle de la propiedad por id 
-Unir Front con Back en los carousel de la HomePage
```

-> Decidimos utilizar **Firebase**, comenzamos a implementarlo.

### SPRINT 4:

Funcionalidades:
```
-Modificar todos los mock JSON que teníamos haciendo el fetch con Firebase
-Buscador de propiedades con filtros 
-Favoritos
```

Creamos un Trello, donde creabamos una tarjeta por cada tarea, con:

- la historia de usuario

- la tarea es asignada a un miembro del equipo

- en la tarea se deje el númeor de issue, que utilizamos para nombrar a la rama de trabajo

- establecemos una fecha de vencimiento de la tarea (la semana del Sprint)

### Un ejemplo del [tablero](https://trello.com/b/DbZIDBeG/nocountry-c12-25-t-node-react):

![image](https://github.com/No-Country/c12-25-t-node-react/assets/72580574/357b93b3-3985-4c69-a7f2-7aee0e2df944)

### Ejemplo de tarea:



![image](https://github.com/No-Country/c12-25-t-node-react/assets/72580574/a21b83c0-02b7-4594-b49a-f4c61037f6f0)

---


## <img width="48" height="48" src="https://img.icons8.com/color/48/git.png" alt="git"/> Ayuda para el workflow y commits



### <img width="30" height="30" src="https://img.icons8.com/ios/30/merge-git.png" alt="merge-git"/> ¿Cómo organizar las ramas?


Partimos desde la rama `main`, desde la cual creamos la rama `develop` ò `development`.


Desde la rama `develop` ò `development` creamos la rama `release/1.0.0`, estas ramas release vamos a ir icrementando los números de versiones de Sprint en Sprint(`release/1.0.0` para el Sprint 1, `release/2.0.0` para el Sprint 2, `release/3.0.0` para el Sprint 3 y `release/4.0.0` para el Sprint 4).


Desde la rama  `release/1.0.0` cada integrante del equipo de Front End va a crear su rama para poder desarrollar la tarea del Sprint.


### <img width="30" height="30" src="https://img.icons8.com/ios/30/merge-git.png" alt="merge-git"/> ¿Cómo podemos nombrar una nueva rama?


Desde la terminal: `git checkout -b feat/#2-header` 

-> `<tipo>/#<nro-de-issue/tarea>-<descripcion>`


---


### <img width="30" height="30" src="https://img.icons8.com/ios/30/console.png" alt="console"/> Commits semanticos <tipo>

- **feat**: Una nueva característica para el usuario.

- **fix**: Arregla un bug que afecta al usuario.

- **perf**: Cambios que mejoran el rendimiento del sitio.

- **build**: Cambios en el sistema de build, tareas de despliegue o instalación.

- **ci**: Cambios en la integración continua.

- **docs**: Cambios en la documentación.

- **refactor**: Refactorización del código como cambios de nombre de variables o funciones.

- **style**: Cambios de formato, tabulaciones, espacios o puntos y coma, etc; no afectan al usuario.

- **test**: Añade tests o refactoriza uno existente.

Ejemplo: `git commit -m "feat/#2-header: create-header with logo and navbar"`


---

### <img width="40" height="40" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/external-documentation-agile-flaticons-lineal-color-flat-icons-2.png" alt="external-documentation-agile-flaticons-lineal-color-flat-icons-2"/> Links útiles

- [Buenas prácticas para escribir commits](https://midu.dev/buenas-practicas-escribir-commits-git/)

- [Git Workflow - Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows)
