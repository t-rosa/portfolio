import Avatar from "@/assets/avatar.jpg";
import { GithubIcon } from "@/assets/icons/github-icon";
import LinkIcon from "@/assets/icons/link-icons";
import LinkedinIcon from "@/assets/icons/linkedin-icon";
import MailIcon from "@/assets/icons/mail-icon";
import PhoneIcon from "@/assets/icons/phone-icon";

export function CvPersonalCard() {
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
