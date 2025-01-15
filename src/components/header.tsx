import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header>
      <ul className="flex items-center gap-2">
        <li>
          <Link
            to="/"
            className="block border-zinc-700/75 border rounded-full px-4 py-1.5 bg-zinc-900/55 hover:bg-zinc-800/75 duration-300 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block border-zinc-700/75 border rounded-full px-4 py-1.5 bg-zinc-900/55 hover:bg-zinc-800/75 duration-300 transition-colors"
          >
            Projets
          </Link>
        </li>
      </ul>
    </header>
  );
}
