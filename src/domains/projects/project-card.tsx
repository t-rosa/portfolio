import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-3 grid grid-rows-[auto_1fr_auto] gap-3">
      {project.wip && (
        <p
          title="Work In Progress"
          className="absolute z-10 -top-2 left-5 border px-3 rounded-xl bg-zinc-800 border-zinc-700/75 text-zinc-100 text-xs"
        >
          WIP
        </p>
      )}
      {project.status === "pro" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-red-800 border-zinc-700/75 text-zinc-100 text-xs">
          Pro {project.company && <span>- {project.company}</span>}
        </p>
      )}
      {project.status === "perso" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-indigo-800 border-zinc-700/75 text-zinc-100 text-xs">
          Perso
        </p>
      )}
      {project.status === "open-source" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-emerald-800 border-zinc-700/75 text-zinc-100 text-xs">
          Open Source
        </p>
      )}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-zinc-400">{project.tools}</p>
      </div>
      <p className="text-zinc-300">{project.description}</p>
      <ul className="flex items-center gap-3">
        {project.githubUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="flex gap-1 items-center text-sm text-indigo-400/75 "
            >
              <GithubIcon className="size-4" />
              Github
            </a>
          </li>
        )}
        {project.websiteUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.websiteUrl}
              className="flex gap-1 items-center text-sm text-indigo-400/75 "
            >
              <LinkIcon className="size-4" />
              Website
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
