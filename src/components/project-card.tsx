import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";

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
    <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-3 grid grid-rows-[auto_1fr_auto] gap-3">
      {props.wip && (
        <p className="absolute z-10 -top-2 right-10 border px-3 rounded-xl bg-zinc-900 border-zinc-700/75 text-zinc-400 text-xs">
          work in progress
        </p>
      )}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-zinc-400">{props.tools}</p>
      </div>
      <p className="text-zinc-300">{props.description}</p>
      <ul className="flex items-center gap-3">
        {props.githubUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.githubUrl}
              className="flex gap-1 items-center text-sm text-indigo-400/75 "
            >
              <GithubIcon className="size-4" />
              Github
            </a>
          </li>
        )}
        {props.websiteUrl && (
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.websiteUrl}
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
