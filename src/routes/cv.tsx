import Avatar from "@/assets/avatar.jpg";
import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";
import LinkedinIcon from "@/assets/icons/linkedin-icon";
import MailIcon from "@/assets/icons/mail-icon";
import PhoneIcon from "@/assets/icons/phone-icon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="absolute inset-0 z-10 bg-white text-zinc-900">
      <div className="mx-auto w-[827px] space-y-3">
        <div className="flex gap-3">
          <PersonalInfos />
          <div className="grid gap-3">
            <About />
            <Formations />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <CvProjectCard
            status="pro"
            company="Astradal"
            title="Editeur cartographique"
            tools="PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers"
            description="Application web de gestion de données géographiques. Création, édition et visualisation de cartes publique et privée, je peux vous faire une démonstration sur demande."
            websiteUrl="https://app.astradal.com/"
          />
          <CvProjectCard
            status="open-source"
            title="Tanstack Form"
            tools="Typescript"
            description="Contribution open source à la librairie TanStack Form. Ajout de plusieurs fonctionnalités concernant la validation, la gestion des champs de type 'array', etc."
            websiteUrl="https://tanstack.com/form/latest"
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
            status="perso"
            title="Ark Stack UI"
            tools="React, Typescript, TailwindCSS, Ark-ui"
            description="Implémentation d'une librairie de composants UI autour des composants de la librairie Ark-ui avec React, TypeScript et TailwindCSS."
            githubUrl="https=//github.com/t-rosa/ark-stack-ui"
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

function PersonalInfos() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3 w-lg shadow-sm">
      <img
        src={Avatar}
        className="rounded-full size-25 border border-zinc-300/75"
      />
      <h1 className="text-2xl font-semibold text-indigo-400">Toma ROSA</h1>
      <div className="space-y-1">
        <p className="text-zinc-600 text-lg">
          Ingénieur logiciel, spécialisé dans le web.
        </p>
      </div>
      <ul className="text-zinc-500 text-sm space-y-1">
        <li>
          <a href="https://t-rosa.com" className="flex items-center gap-1">
            <LinkIcon className="size-4" /> t-rosa.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/t-rosa"
            className="flex items-center gap-1"
          >
            <GithubIcon className="size-4" /> github.com/t-rosa
          </a>
        </li>
        <li>
          <a
            href="https://wwww.linkedin.com/in/toma-rosa/"
            className="flex items-center gap-1"
          >
            <LinkedinIcon className="size-4" /> linkedin.com/in/toma-rosa/
          </a>
        </li>
        <li>
          <a href="mailto:toma.rosa@ik.me" className="flex items-center gap-1">
            <MailIcon className="size-4" /> toma.rosa@ik.me
          </a>
        </li>
        <li className="flex items-center gap-1">
          <a href="tel:0641770136" className="flex items-center gap-1">
            <PhoneIcon className="size-4" /> 06 41 77 01 36
          </a>
        </li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3 shadow-sm">
      <h1 className="text-2xl text-indigo-400">À propos</h1>
      <p className="text-zinc-600">
        Développeur web, 5 ans d&apos;expérience, maîtrise de TypeScript, React,
        C#, ASP.NET Core, PostgreSQL, Docker et d&apos;autres, je suis prêt et
        motivé à contribuer efficacement à vos projets.
      </p>
    </div>
  );
}

interface Props {
  title: string;
  tools: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  status?: "pro" | "perso" | "open-source";
  company?: string;
}

function CvProjectCard(props: Props) {
  return (
    <div className="relative border rounded-xl border-zinc-300/75 p-6 grid grid-rows-[auto_1fr_auto] gap-3 shadow-sm">
      {props.status === "pro" && (
        <p className="absolute z-10 -top-2 right-7 border px-3 rounded-xl bg-emerald-100 border-zinc-300/75 text-zinc-600 text-xs">
          Pro - {props.company}
        </p>
      )}
      {props.status === "perso" && (
        <p className="absolute z-10 -top-2 right-7 border px-3 rounded-xl bg-red-100 border-zinc-300/75 text-zinc-600 text-xs">
          Perso
        </p>
      )}
      {props.status === "open-source" && (
        <p className="absolute z-10 -top-2 right-7 border px-3 rounded-xl bg-yellow-100 border-zinc-300/75 text-zinc-600 text-xs">
          Open Source
        </p>
      )}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-zinc-500 font-semibold text-sm">{props.tools}</p>
      </div>
      <p className="text-zinc-600 ">{props.description}</p>
      <ul className="flex items-center gap-3">
        {props.githubUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.githubUrl}
              className="flex gap-1 items-center text-sm text-indigo-600/75 "
            >
              <GithubIcon className="size-4" />
              {props.githubUrl}
            </a>
          </li>
        )}
        {props.websiteUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.websiteUrl}
              className="flex gap-1 items-center text-sm text-indigo-600/75 "
            >
              <LinkIcon className="size-4" />
              {props.websiteUrl}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

function Formations() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3 shadow-sm">
      <h1 className="text-2xl text-indigo-400">Formations</h1>
      <ul className="list-disc pl-6">
        <li>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/35078/"
            className="text-indigo-500 underline"
          >
            M2 - Expert Développement Web - Ynov Toulouse
          </a>
        </li>
        <li>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/30714/"
            className="text-indigo-500 underline"
          >
            Bachelore CDAN - IPI Toulouse
          </a>
        </li>
        <li>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/27812/"
            className="text-indigo-500 underline"
          >
            Bachelore CSIA - IFC Avignon
          </a>
        </li>
        <li>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/35340/"
            className="text-indigo-500 underline"
          >
            BTS SIO - Lycée Aubanel Avignon
          </a>
        </li>
      </ul>
    </div>
  );
}
