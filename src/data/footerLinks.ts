export interface FooterLink {
  title: string;
  links: { name: string; url: string }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: "Menú",
    links: [
      { name: "Inicio", url: "#" },
      { name: "Acerca de mi", url: "#" },
      { name: "Proyectos", url: "#" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { name: "Email", url: "mailto:info@depauni.com" },
      { name: "Linkedin", url: "#" },
      
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Aviso legal", url: "#" },
      { name: "Política de privacidad", url: "#" },
    ],
  },
];
