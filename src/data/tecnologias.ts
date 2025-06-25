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
      { nombre: "JavaScript", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Java", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Python", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "Tecnologías web",
    tecnologias: [
      { nombre: "HTML", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "CSS", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "Frameworks y librerías",
    tecnologias: [
      { nombre: "Angular", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "ASP.NET", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Django", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Ionic", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Bootstrap", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "React", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "Bases de datos",
    tecnologias: [
      { nombre: "MySQL", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "Oracle", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "SQL Server", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "SQLite3", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "Diseño y prototipado",
    tecnologias: [
      { nombre: "Figma", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "CMS",
    tecnologias: [
      { nombre: "WordPress", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
  {
    titulo: "Control de versiones",
    tecnologias: [
      { nombre: "Git", icono: "/assets/images/skills/languages/csharp.png" },
      { nombre: "GitHub", icono: "/assets/images/skills/languages/csharp.png" },
    ],
  },
];
