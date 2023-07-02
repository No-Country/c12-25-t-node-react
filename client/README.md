# <img width="40" height="40" src="https://img.icons8.com/dusk/40/web.png" alt="web"/> APPARTAMENTOS - FRONT 



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