export interface Tecnologia {
  nombre: string;
  icono?: string; // opcional
}

export interface CategoriaTecnologia {
  titulo: string;
  tecnologias: Tecnologia[];
}

export const categoriasTecnologias: CategoriaTecnologia[] = [
  {
    titulo: "Lenguajes de programación",
    tecnologias: [
      { nombre: "C#", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "JavaScript", icono: "/icons/javascript.png" },
      { nombre: "Java", icono: "/icons/java.png" },
      { nombre: "Python", icono: "/icons/python.png" },
    ],
  },
  {
    titulo: "Tecnologías web",
    tecnologias: [
      { nombre: "HTML", icono: "/icons/html.png" },
      { nombre: "CSS", icono: "/icons/css.png" },
    ],
  },
  {
    titulo: "Frameworks y librerías",
    tecnologias: [
      { nombre: "Angular", icono: "/icons/angular.png" },
      { nombre: "ASP.NET", icono: "/icons/aspnet.png" },
      { nombre: "Django", icono: "/icons/django.png" },
      { nombre: "Ionic", icono: "/icons/ionic.png" },
      { nombre: "Bootstrap", icono: "/icons/bootstrap.png" },
      { nombre: "React", icono: "/icons/react.png" },
    ],
  },
  {
    titulo: "Bases de datos",
    tecnologias: [
      { nombre: "MySQL", icono: "/icons/mysql.png" },
      { nombre: "Oracle", icono: "/icons/oracle.png" },
      { nombre: "SQL Server", icono: "/icons/sqlserver.png" },
      { nombre: "SQLite3", icono: "/icons/sqlite.png" },
    ],
  },
  {
    titulo: "Diseño y prototipado",
    tecnologias: [{ nombre: "Figma", icono: "/icons/figma.png" }],
  },
  {
    titulo: "CMS",
    tecnologias: [{ nombre: "WordPress", icono: "/icons/wordpress.png" }],
  },
  {
    titulo: "Control de versiones",
    tecnologias: [
      { nombre: "Git", icono: "/icons/git.png" },
      { nombre: "GitHub", icono: "/icons/github.png" },
    ],
  },
];
