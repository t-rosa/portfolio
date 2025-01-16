import Avatar from "@/assets/avatar.jpg";
import BlueskyIcon from "@/assets/icons/bluesky-icon";
import { GithubIcon } from "@/assets/icons/github-icon";
import LinkedinIcon from "@/assets/icons/linkedin-icon";
import MailIcon from "@/assets/icons/mail-icon";

export function PersonalCard() {
  return (
    <div className="border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-3">
      <img
        src={Avatar}
        className="rounded-full size-25 border border-zinc-700/75"
      />
      <h1 className="text-2xl text-indigo-200 font-semibold">Toma ROSA</h1>
      <div className="space-y-1">
        <p className="text-zinc-300 text-lg">
          Ingénieur logiciel, spécialisé dans le web.
        </p>
        <p className="text-zinc-400 max-w-xs">
          Si vous avez des questions, n&apos;hésitez pas à me contacter via mes
          réseaux.
        </p>
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/t-rosa"
            title="t-rosa"
          >
            <GithubIcon className="size-10" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/toma-rosa/"
            title="toma-rosa"
          >
            <LinkedinIcon className="size-10" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bsky.app/profile/t-rosa.com"
            title="@t-rosa.com"
          >
            <BlueskyIcon className="size-10" />
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="mailto:toma.rosa@ik.me"
            title="toma.rosa@ik.me"
          >
            <MailIcon className="size-10" />
          </a>
        </li>
      </ul>
    </div>
  );
}
