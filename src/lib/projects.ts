export interface Project {
  title: string;
  tools: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  status?: "pro" | "perso" | "open-source";
  company?: string;
  wip?: boolean;
}

export const projects: Project[] = [
  {
    title: "Editeur cartographique",
    tools:
      "PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers",
    description:
      "Editeur de carte en ligne. Création, édition et visualisation de cartes publique et privée, je peux vous faire une démonstration sur demande.",
    websiteUrl: "https://app.astradal.com/",
    status: "pro",
    company: "Astradal",
    wip: true,
  },
  {
    title: "Geostack",
    tools:
      "PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers",
    description:
      "Application de gestion de données géographiques, avec divers outils de personnalisation de cartes mais aussi d'objets géographiques et de métiers associés.",
    websiteUrl: "https://www-janedoagency-com.vercel.app/",
    githubUrl: "https://github.com/t-rosa/www.janedoagency.com",
    status: "perso",
    wip: true,
  },
  {
    title: "Tanstack Form",
    tools: "Typescript",
    description:
      "Contribution open source à la librairie TanStack Form. Ajout de fonctionnalités concernant la validation et la gestion des champs de type 'array'.",
    websiteUrl: "https://tanstack.com/form/latest",
    githubUrl:
      "https://github.com/TanStack/form/pulls?q=is%3Apr+author%3At-rosa+",
    status: "open-source",
  },
  {
    title: "Ark Stack UI",
    tools: "React, Typescript, TailwindCSS, Ark-ui",
    description:
      "Implémentation d'une librairie de composants UI autour des composants de la librairie Ark-ui avec React, TypeScript et TailwindCSS.",
    githubUrl: "https://github.com/t-rosa/ark-stack-ui",
    status: "perso",
    wip: true,
  },
  {
    title: "Portfolio",
    tools: "React, Typescript, TailwindCSS, TanStack Router",
    description:
      "Site vitrine personnel. Présentation de mes projets, compétences et informations de contact.",
    githubUrl: "https://github.com/t-rosa/portfolio",
    status: "perso",
  },
  {
    title: "Better League Client",
    tools: "Astro, TailwindCSS",
    description:
      "Ma conception du client de League of legends s'il devait être refait. C'est mon terrain de jeu pour faire des animations et du CSS.",
    githubUrl: "https://github.com/t-rosa/better-league-client",
    websiteUrl: "https://better-league-client.vercel.app/",
    status: "perso",
    wip: true,
  },
  {
    title: "Maison de la mascotte",
    tools: "Astro, TailwindCSS",
    description:
      "Site vitrine pour une maison d'hôtes. Présentation de la maison, services et informations de contact.",
    githubUrl: "https://github.com/t-rosa/www.maisondelamascotte.com",
    websiteUrl: "https://www.maisondelamascotte.com/",
    status: "pro",
  },
  {
    title: "Abalone",
    tools: "C++, Raylib",
    description:
      "Implémentation du jeu de plateau Abalone en C++ avec la librairie Raylib.",
    githubUrl: "https://github.com/t-rosa/ABALONE",
    status: "perso",
    wip: true,
  },
  {
    title: "Tetris",
    tools: "C++, Raylib",
    description:
      "Implémentation du jeu Tetris en C++ avec la librairie Raylib.",
    githubUrl: "https://github.com/t-rosa/TETRIS",
    status: "perso",
    wip: true,
  },
];
