import { menu } from "@/lib/menu";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header>
      <ul className="flex items-center gap-2">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              to={item.url}
              className="block border-zinc-700/75 border rounded-full px-4 py-1.5 bg-zinc-900/55 hover:bg-zinc-800/75 duration-300 transition-colors"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
