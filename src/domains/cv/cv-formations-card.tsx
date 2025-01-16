export function CvFormationsCard() {
  return (
    <div className="border rounded-xl border-zinc-300/75 p-6 space-y-3 shadow-sm">
      <h1 className="text-2xl text-indigo-400">Formations</h1>
      <ul className="list-disc pl-6">
        <li>
          <div className="inline">2023 -&nbsp;</div>
          <div className="inline">Ynov Toulouse -&nbsp;</div>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/35078/"
            className="text-indigo-500 underline"
          >
            M2 - Expert Développement Web
          </a>
        </li>
        <li>
          <div className="inline">2021 -&nbsp;</div>
          <div className="inline">IPI Toulouse -&nbsp;</div>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/30714/"
            className="text-indigo-500 underline"
          >
            Bachelore CDAN
          </a>
        </li>
        <li>
          <div className="inline">2018 -&nbsp;</div>
          <div className="inline">IFC Avignon -&nbsp;</div>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/27812/"
            className="text-indigo-500 underline"
          >
            Bachelore CSIA
          </a>
        </li>
        <li>
          <div className="inline">2017 -&nbsp;</div>
          <div className="inline">Lycée Aubanel Avignon -&nbsp;</div>
          <a
            href="https://www.francecompetences.fr/recherche/rncp/35340/"
            className="text-indigo-500 underline"
          >
            BTS SIO
          </a>
        </li>
      </ul>
    </div>
  );
}
