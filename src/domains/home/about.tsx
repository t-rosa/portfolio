export function About() {
  return (
    <div className="border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-3">
      <h1 className="text-2xl text-indigo-200">À propos</h1>
      <p className="text-zinc-400 ">
        Je suis un titulaire d&apos;un Master 2 avec une spécialisation en
        développement web et je travaille depuis 5 ans au sein de la
        société&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.astradal.com/"
          className="underline"
        >
          Astradal
        </a>
        .
      </p>
      <p className="text-zinc-400">
        Pendant mon temps libre, j&apos;aime implémenter des jeux avec Raylib,
        contribuer à des projets open source et lancer des projets.
      </p>
      <p className="text-zinc-400">
        En dehors de la programmation, j&apos;aime jouer à Street Fighter, aux
        jeux de cartes et lire les romans Warcraft.
      </p>
    </div>
  );
}
