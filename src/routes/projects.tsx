import { ProjectCard } from "@/components/project-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <ProjectCard
        wip
        title="Astradal Designer"
        tools="PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers"
        description="Application web de gestion de données géographiques. Création, édition et visualisation de cartes publique et privée, je peux vous faire une démonstration sur demande."
        websiteUrl="https://app.astradal.com/"
      />
      <ProjectCard
        title="Jane Do Agency"
        tools="Next.js, React, Typescript, TailwindCSS, Sanity"
        description="Site vitrine promotionnel de l'agence musicale Jane Do Agency. Interface et design sur mesure, gestion de contenu via CMS et prise de contact."
        websiteUrl="https://www-janedoagency-com.vercel.app/"
        githubUrl="https://github.com/t-rosa/www.janedoagency.com"
      />
      <ProjectCard
        title="Tanstack Form"
        tools="Typescript"
        description="Contribution open source à la librairie TanStack Form. Ajout de fonctionnalités concernant la validation et la gestion des champs de type 'array'."
        websiteUrl="https://tanstack.com/form/latest"
        githubUrl="https://github.com/TanStack/form/pulls?q=is%3Apr+author%3At-rosa+"
      />
      <ProjectCard
        title="Maison de la mascotte"
        tools="Astro, TailwindCSS"
        description="Site vitrine pour une maison d'hôtes. Présentation de la maison, services et informations de contact."
        githubUrl="https://github.com/t-rosa/www.maisondelamascotte.com"
        websiteUrl="https://www.maisondelamascotte.com/"
      />
      <ProjectCard
        title="Better League Client"
        tools="Astro, TailwindCSS"
        description="Ma conception du client de League of legends s'il devait être refait. Principalement du CSS et des animations."
        githubUrl="https://github.com/t-rosa/better-league-client"
        websiteUrl="https://better-league-client.vercel.app/"
      />
      <ProjectCard
        title="Portfolio"
        tools="React, Typescript, TailwindCSS, TanStack Router"
        description="Site vitrine personnel. Présentation de mes projets, compétences et informations de contact."
        githubUrl="https://github.com/t-rosa/portfolio"
      />
      <ProjectCard
        wip
        title="Ark Stack UI"
        tools="React, Typescript, TailwindCSS, Ark-ui"
        description="Implémentation d'une librairie de composants UI autour des composants de la librairie Ark-ui avec React, TypeScript et TailwindCSS."
        githubUrl="https://github.com/t-rosa/ark-stack-ui"
      />
      <ProjectCard
        wip
        title="Abalone"
        tools="C++, Raylib"
        description="Implémentation du jeu de plateau Abalone en C++ avec la librairie Raylib."
        githubUrl="https://github.com/t-rosa/ABALONE"
      />
      <ProjectCard
        wip
        title="Tetris"
        tools="C++, Raylib"
        description="Implémentation du jeu Tetris en C++ avec la librairie Raylib."
        githubUrl="https://github.com/t-rosa/TETRIS"
      />
    </div>
  );
}
