import { menu } from "@/lib/menu";
import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header>
      <ul className="flex items-center gap-2">
        {menu.map((item) => (
          <li key={item.title}>
            <Link
              title={item.title}
              to={item.url}
              className="flex gap-1 items-center border-zinc-700/75 border rounded-full px-4 py-1.5 bg-zinc-900/55 hover:bg-zinc-800/75 duration-300 transition-colors"
            >
              <span>{item.icon}</span>
              <span className="hidden sm:block">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
