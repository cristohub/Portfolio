export interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
}

export const projects: Project[] = [
  {
    titulo: "Mr. Peto",
    descripcion: "Diseño web e identidad de marca",
    imagen: "/assets/img/peto.jpg"
  },
  {
    titulo: "Buna Cafetería",
    descripcion: "Identidad de marca",
    imagen: "/assets/img/buna.jpg"
  },
  {
    titulo: "Camper Box",
    descripcion: "Diseño web e identidad de marca",
    imagen: "/assets/img/camper.jpg"
  }
];
