import { CvAboutCard } from "@/domains/cv/cv-about-card";
import { CvFormationsCard } from "@/domains/cv/cv-formations-card";
import { CvPersonalCard } from "@/domains/cv/cv-personal-card";
import { CvProjectCard } from "@/domains/cv/cv-project-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="absolute inset-0 z-10 bg-white text-zinc-900">
      <div className="mx-auto w-[827px] space-y-[37px]">
        <div className="flex gap-[37px]">
          <CvPersonalCard />
          <div className="grid gap-[37px]">
            <CvAboutCard />
            <CvFormationsCard />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[37px]">
          <CvProjectCard
            status="pro"
            company="Astradal"
            title="Editeur cartographique"
            tools="PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers"
            description="Application web de gestion de données géographiques. Création, édition et visualisation de cartes publique et privée, je peux vous faire une démonstration sur demande."
            websiteUrl="https://app.astradal.com/"
          />
          <CvProjectCard
            status="pro"
            company="Jane Do"
            title="Jane Do Agency"
            tools="Next.js, React, Typescript, TailwindCSS, Sanity"
            description="Site vitrine promotionnel de l'agence musicale Jane Do Agency. Interface et design sur mesure, gestion de contenu via CMS et prise de contact."
            websiteUrl="https://www-janedoagency-com.vercel.app/"
          />
          <CvProjectCard
            status="open-source"
            title="Tanstack Form"
            tools="Typescript"
            description="Contribution open source à la librairie TanStack Form. Ajout de plusieurs fonctionnalités concernant la validation, la gestion des champs de type 'array', etc."
            websiteUrl="https://tanstack.com/form/latest"
          />
          <CvProjectCard
            status="perso"
            title="Ark Stack UI"
            tools="React, Typescript, TailwindCSS, Ark-ui"
            description="Implémentation d'une librairie de composants UI autour des composants de la librairie Ark-ui avec React, TypeScript et TailwindCSS."
            githubUrl="https://github.com/t-rosa/ark-stack-ui"
          />
          <CvProjectCard
            status="perso"
            title="Better League Client"
            tools="Astro, TailwindCSS"
            description="Ma conception du client de League of legends s'il devait être refait. Principalement du CSS et des animations."
            websiteUrl="https://better-league-client.vercel.app/"
          />
          <CvProjectCard
            status="perso"
            title="Abalone"
            tools="C++, Raylib"
            description="Implémentation du jeu de plateau Abalone en C++ avec la librairie Raylib."
            githubUrl="https://github.com/t-rosa/ABALONE"
          />
        </div>
      </div>
    </div>
  );
}
