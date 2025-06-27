export interface FooterLink {
  title: string;
  links: { name: string; url: string }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: "Menú",
    links: [
      { name: "Inicio", url: "#inicio" },
      { name: "Proyectos", url: "#porta" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { name: "Email", url: "mailto:info@depauni.com" },
      { name: "Linkedin", url: "#" },
      
    ],
  },
 
];
