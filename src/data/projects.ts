export interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
}

export const projects: Project[] = [
  {
    titulo: "Nuevo Amanecer",
    descripcion: "Diseño y desarrollo web.",
    imagen: "/assets/images/projects/nuevoamanecer.png",
    link: "https://nuevoamanecermadrid.com/"
  },
  {
    titulo: "Psicología Forense",
    descripcion: "Colaboración web.",
    imagen: "/assets/images/projects/Paloma-R.png",
    link: "https://www.psicologialegalforense.com/"
  },
  {
    titulo: "Autocares HBV",
    descripcion: "Clonación del sitio web.",
    imagen: "/assets/images/projects/Autocares.png",
    link: "https://www.autocares-hbv.com/"
  },
  {
    titulo: "DepaUni",
    descripcion: "Gestión para residencia estudiantil.",
    imagen: "/assets/images/projects/Depauni.png",
    link: "https://psicologia-forense.com"
  },
  {
    titulo: "Ali Amor",
    descripcion: "Gestión de stock de perfumería.",
    imagen: "/assets/images/projects/aliamor.png",
    link: "https://perfumeria-1v1p.onrender.com/"
  },
  {
    titulo: "Portafolio",
    descripcion: "Diseño y desarrollo personal.",
    imagen: "/assets/images/projects/Critofer-Sani.png",
    link: "https://cristofersani.vercel.app"
  }
];
