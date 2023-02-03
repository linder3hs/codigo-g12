# Pimer día con Git y Github

Lista de comandos de git

* Para poder ver la version de git ejecutamos en nuestra terminal:

```bash
git --version
git -v
```

* Para configurar el correo y nombre (sólo la primera vez en mi máquina)


```bash
git config --global user.email "micorreo@gmail.com"
git config --global user.name "Mi nombre"
```

*  Para ver la configuración de git

```bash
git config --list
```

* Para inicializar nuestro repositorio en git:

```bash
git init
```

* Para ver el estado de nuestro cambios:

```bash
git status
```

* Para preparar nuestros archivos para la zona de stage (prepararlos para commit)

```bash
git add .
git add nombreDelArchivo.extensión
```

* Crear el registro de los cambios realizados:

```bash
git commit -m "comentario corto y conciso"
```

*  Para ver una linea de tiempo de los commits que hemos realizado:

```bash
git log
```