export function ToolsCard() {
  return (
    <div className="space-y-6">
      <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-6 ">
        <h2 className="text-xl font-semibold">Régulièrement</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="list-disc border border-dashed rounded-xl border-zinc-400/75 py-3 px-9">
            <li>
              <p className="text-zinc-400">HTML / CSS / JavaScript</p>
            </li>
            <li>
              <p className="text-zinc-400">React / TypeScript / Tailwind</p>
            </li>
            <li>
              <p className="text-zinc-400">C# / ASP Net Core / EFCore</p>
            </li>
            <li>
              <p className="text-zinc-400">Vite / Prettier / Eslint</p>
            </li>
            <li>
              <p className="text-zinc-400">
                Vitest / XUnit / Playwright / Testcontainers
              </p>
            </li>
            <li>
              <p className="text-zinc-400">hey-api / Scalar .Net</p>
            </li>
          </ul>
          <ul className="list-disc border border-dashed rounded-xl border-zinc-400/75 py-3 px-9">
            <li>
              <p className="text-zinc-400">Zod / FluentValidation</p>
            </li>
            <li>
              <p className="text-zinc-400">
                TanStack router / query / table / virtual
              </p>
            </li>
            <li>
              <p className="text-zinc-400">React hook form / OpenLayers</p>
            </li>
            <li>
              <p className="text-zinc-400">Git / Github / Github CLI</p>
            </li>
            <li>
              <p className="text-zinc-400">
                Docker / Github Actions / Postgres
              </p>
            </li>
            <li>
              <p className="text-zinc-400">Vim / NeoVim / VSCode / VS</p>
            </li>
          </ul>
          <ul className="list-disc border border-dashed rounded-xl border-zinc-400/75 py-3 px-9 col-span-full">
            <li>
              <p className="text-zinc-400">Ark-ui</p>
            </li>
            <li>
              <p className="text-zinc-400">Radix-ui</p>
            </li>
            <li>
              <p className="text-zinc-400">HeadlessUI</p>
            </li>
            <li>
              <p className="text-zinc-400">Shadcn/ui</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-6 ">
        <h2 className="text-xl font-semibold">Occasionel</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <ul className="list-disc border border-dashed rounded-xl border-zinc-400/75 py-3 px-9">
            <li>
              <p className="text-zinc-400">Angular / RxJS</p>
            </li>
            <li>
              <p className="text-zinc-400">Solid JS / HTMX</p>
            </li>
            <li>
              <p className="text-zinc-400">Node.js / Adonis / Hono</p>
            </li>
            <li>
              <p className="text-zinc-400">Astro / TanStackStart / Next.js </p>
            </li>
            <li>
              <p className="text-zinc-400">
                PandaCSS / ParkUI / RizzUI / base-ui
              </p>
            </li>
            <li>
              <p className="text-zinc-400">
                Biome / Rolldown (alpha) / Tailwind V4 (beta)
              </p>
            </li>
          </ul>
          <ul className="list-disc border border-dashed rounded-xl border-zinc-400/75 py-3 px-9">
            <li>
              <p className="text-zinc-400">Mapbox GL / Maplibre GL</p>
            </li>
            <li>
              <p className="text-zinc-400">Three.js / React Three Fiber</p>
            </li>
            <li>
              <p className="text-zinc-400">TanStack Form</p>
            </li>
            <li>
              <p className="text-zinc-400">Go / Rust / C++</p>
            </li>
            <li>
              <p className="text-zinc-400">Raylib</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
