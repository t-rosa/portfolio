import Avatar from "@/assets/avatar.jpg";
import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";
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
          <About />
        </div>
        <Interlude />
        <div className="grid grid-cols-2 gap-3">
          <ProjectCard
            title="Astradal Designer"
            tools="PostgreSQL, Postgis, ASP Net Core, React, Typescript, TailwindCSS, TanStack Router, OpenLayers"
            description="Application web de gestion de données géographiques. Création, édition et visualisation de cartes publique et privée, je peux vous faire une démonstration sur demande."
            websiteUrl="https://app.astradal.com/"
            wip
          />
          <ProjectCard
            title="Tanstack Form"
            tools="Typescript"
            description="Contribution open source à la librairie TanStack Form. Ajout de fonctionnalités concernant la validation et la gestion des champs de type 'array'."
            websiteUrl="https://tanstack.com/form/latest"
          />
          <ProjectCard
            title="Jane Do Agency"
            tools="Next.js, React, Typescript, TailwindCSS, Sanity"
            description="Site vitrine promotionnel de l'agence musicale Jane Do Agency. Interface et design sur mesure, gestion de contenu via CMS et prise de contact."
            websiteUrl="https://www-janedoagency-com.vercel.app/"
          />
          <ProjectCard
            wip
            title="Ark Stack UI"
            tools="React, Typescript, TailwindCSS, Ark-ui"
            description="Implémentation d'une librairie de composants UI autour des composants de la librairie Ark-ui avec React, TypeScript et TailwindCSS."
            githubUrl="https=//github.com/t-rosa/ark-stack-ui"
          />
          <ProjectCard
            wip
            title="Abalone"
            tools="C++, Raylib"
            description="Implémentation du jeu de plateau Abalone en C++ avec la librairie Raylib."
            githubUrl="https://github.com/t-rosa/ABALONE"
          />
          <ProjectCard
            title="Better League Client"
            tools="Astro, TailwindCSS"
            description="Ma conception du client de League of legends s'il devait être refait. Principalement du CSS et des animations."
            websiteUrl="https://better-league-client.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}

function PersonalInfos() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3 w-md">
      <img
        src={Avatar}
        className="rounded-full size-25 border border-zinc-300/75"
      />
      <h1 className="text-2xl text-indigo-400">
        Hey, I'm <span className="font-semibold">Toma</span>.
      </h1>
      <div className="space-y-1">
        <p className="text-zinc-600 text-lg">
          Ingénieur logiciel, spécialisé dans le web.
        </p>
        <ul className="text-zinc-500 text-sm space-y-1">
          <li className="flex items-center gap-1">
            <LinkIcon className="size-4" /> t-rosa.com
          </li>
          <li className="flex items-center gap-1">
            <MailIcon className="size-4" /> toma.rosa@ik.me
          </li>
          <li className="flex items-center gap-1">
            <PhoneIcon className="size-4" /> 06 41 77 01 36
          </li>
        </ul>
      </div>
    </div>
  );
}

function Interlude() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-3 space-y-3">
      <p className="text-zinc-600 text-pretty ">
        Passionné et motivé, je suis ouvert à toutes propositions pour un poste
        de développeur web, quelle que soit la technologie. N&apos;hésitez pas à
        me contacter ou à visiter mon site web. Merci !
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3">
      <h1 className="text-2xl text-indigo-400">À propos</h1>
      <p className="text-zinc-600">
        Je suis un titulaire d&apos;un Master 2 avec une spécialisation en
        développement web et je travaille depuis 5 ans au sein de la
        société&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.astradal.com/"
          className="underline"
        >
          Astradal
        </a>
        .
      </p>
      <p className="text-zinc-600">
        Pendant mon temps libre, j&apos;aime implémenter des jeux avec Raylib,
        contribuer à des projets open source et essayer de nouvelles choses.
      </p>
      <p className="text-zinc-600">
        En dehors de la programmation, j&apos;aime jouer à Street Fighter, aux
        jeux de cartes et lire les romans Warcraft.
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
  wip?: boolean;
}

export function ProjectCard(props: Props) {
  return (
    <div className="relative border rounded-xl border-zinc-300/75 p-3 lg:p-6 space-y-3 grid grid-rows-[auto_1fr_auto] gap-3">
      {props.wip && (
        <p className="absolute z-10 -top-2 right-10 border px-3 rounded-xl bg-zinc-100 border-zinc-300/75 text-zinc-600 text-xs">
          work in progress
        </p>
      )}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-zinc-400">{props.tools}</p>
      </div>
      <p className="text-zinc-600">{props.description}</p>
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
