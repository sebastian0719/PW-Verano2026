# Comandos más usados de Git

---

git init
Inicia un repositorio Git en la carpeta actual.
Ejemplo: git init → Comienzas un proyecto nuevo desde cero.

---

git clone <url>
Clona un repositorio remoto a tu máquina.
Ejemplo: git clone https://github.com/usuario/repo.git → Te unes a un equipo y descargas el código.

---

git config
Configura opciones globales o locales de Git.
Ejemplo: git config --global user.name "Tu Nombre" → Configuras tu identidad antes de commitear.

---

git status
Muestra el estado de los archivos (modificados, staged, sin seguimiento).
Ejemplo: git status → Verificas qué archivos van a entrar en el próximo commit.

---

git add <archivo>
Añade archivos al área de staging.
Ejemplo: git add . → Agregas todos los archivos modificados para prepararlos para el commit.

---

git commit -m "msg"
Guarda los cambios del staging en el historial con un mensaje.
Ejemplo: git commit -m "Agrega validación" → Guardas un avance significativo.

---

git commit --amend
Modifica el último commit (mensaje o contenido).
Ejemplo: git commit --amend -m "Mensaje corregido" → Arreglas el mensaje del último commit.

---

git diff
Muestra diferencias entre archivos modificados y los del último commit.
Ejemplo: git diff → Revisas qué líneas cambiaste antes de hacer commit.

---

git branch
Lista, crea o elimina ramas.
Ejemplo: git branch feature-login → Creas una rama nueva para desarrollar una funcionalidad.

---

git checkout <rama>
Cambia a otra rama existente.
Ejemplo: git checkout main → Cambias a la rama principal.

---

git checkout -b <rama>
Crea y cambia a una nueva rama en un solo paso.
Ejemplo: git checkout -b bugfix → Creas una rama para arreglar un bug urgente.

---

git merge <rama>
Fusiona la rama indicada con la rama actual.
Ejemplo: git merge feature-login → Integras los cambios de tu rama a la principal.

---

git remote -v
Muestra los repositorios remotos configurados.
Ejemplo: git remote -v → Verificas que tu "origin" apunte al repositorio correcto.

---

git fetch <remoto>
Descarga cambios del remoto pero no los fusiona.
Ejemplo: git fetch origin → Ves qué hay nuevo en el remoto sin afectar tu trabajo.

---

git pull <remoto> <rama>
Descarga cambios del remoto y los fusiona con tu rama actual.
Ejemplo: git pull origin main → Actualizas tu rama con lo último del equipo.

---

git push <remoto> <rama>
Sube tus commits locales al repositorio remoto.
Ejemplo: git push origin feature-login → Subes tu funcionalidad para que otros la revisen.

---

git log
Muestra el historial de commits.
Ejemplo: git log --oneline --graph → Ves el historial de cambios de forma resumida.

---

git stash
Guarda temporalmente cambios sin commitear para dejar el área limpia.
Ejemplo: git stash → Guardas tu progreso para cambiar de rama urgente.

---

git stash pop
Recupera el último stash guardado y lo elimina de la pila.
Ejemplo: git stash pop → Recuperas tus cambios guardados temporalmente.

---

git reset <commit>
Deshace commits o saca archivos del staging.
Ejemplo: git reset --soft HEAD~1 → Te arrepientes del último commit pero conservas los cambios.
