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
      { nombre: "JavaScript", icono: "/assets/images/skills/languages/javascript.png" },
      { nombre: "Java", icono: "/assets/images/skills/languages/java.png" },
      { nombre: "Python", icono: "/assets/images/skills/languages/python.png" },
    ],
  },
  {
    titulo: "Tecnologías web",
    tecnologias: [
      { nombre: "HTML", icono: "/assets/images/skills/frameworks/html.png" },
      { nombre: "CSS", icono: "/assets/images/skills/frameworks/css.png" },
    ],
  },
  {
    titulo: "Frameworks y librerías",
    tecnologias: [
      { nombre: "Angular", icono: "/assets/images/skills/frameworks/angular.png" },
      { nombre: "ASP.NET", icono: "/assets/images/skills/frameworks/net.png" },
      { nombre: "Django", icono: "/assets/images/skills/frameworks/django.png" },
      { nombre: "Ionic", icono: "/assets/images/skills/frameworks/ionic.png" },
      { nombre: "Bootstrap", icono: "/assets/images/skills/frameworks/bootstrap.png" },
      { nombre: "React", icono: "/assets/images/skills/frameworks/react.png" },
    ],
  },
  {
    titulo: "Bases de datos",
    tecnologias: [
      { nombre: "MySQL", icono: "/assets/images/skills/databases/mysql.png" },
      { nombre: "Oracle", icono: "/assets/images/skills/databases/oracle.png" },
      { nombre: "SQL Server", icono: "/assets/images/skills/databases/SqlServer.png" },
      { nombre: "SQLite3", icono: "/assets/images/skills/databases/SqlLite.png" },
    ],
  },
  {
    titulo: "Diseño y prototipado",
    tecnologias: [
      { nombre: "Figma", icono: "/assets/images/skills/prototyping/figma.png" },
    ],
  },
  {
    titulo: "CMS",
    tecnologias: [
      { nombre: "WordPress", icono: "/assets/images/skills/cms/wordpress.png" },
    ],
  },
  {
    titulo: "Control de versiones",
    tecnologias: [
      { nombre: "Git", icono: "/assets/images/skills/versiones/git.png" },
      { nombre: "GitHub", icono: "/assets/images/skills/versiones/github.png" },
    ],
  },
];
