import { PersonalCard } from "@/components/personal-card";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-dvh radial">
      <div className="mx-auto max-w-7xl py-4 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
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
          <div className="space-y-6 py-6">
            <PersonalCard />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
