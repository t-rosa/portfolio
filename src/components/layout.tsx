import { MenuHeader } from "./menu-header";
import { PersonalCard } from "./personal-card";
import { Squares } from "./squares";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="relative min-h-dvh radial">
      <Squares />
      <div className="mx-auto max-w-7xl py-4 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <MenuHeader />
          <main className="space-y-6 py-4">
            <PersonalCard />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export { Layout };
