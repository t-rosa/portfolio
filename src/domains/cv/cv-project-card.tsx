import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";

interface Props {
  title: string;
  tools: string;
  description: string;
  githubUrl?: string;
  websiteUrl?: string;
  status?: "pro" | "perso" | "open-source";
  company?: string;
}

export function CvProjectCard(props: Props) {
  return (
    <div
      data-status={props.status}
      className="border-zinc-300/75 relative border rounded-xl p-6 grid grid-rows-[auto_1fr_auto] gap-3 shadow-sm"
    >
      {props.status === "pro" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-white border-emerald-300 text-zinc-600 text-xs">
          Pro - {props.company}
        </p>
      )}
      {props.status === "perso" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-white border-red-300 text-zinc-600 text-xs">
          Perso
        </p>
      )}
      {props.status === "open-source" && (
        <p className="absolute z-10 -top-2 right-5 border px-3 rounded-xl bg-white border-yellow-300 text-zinc-600 text-xs">
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
