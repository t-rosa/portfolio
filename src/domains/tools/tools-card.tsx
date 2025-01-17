interface Props {
  title: string;
  tools: string[];
  usage: ToolUsage;
}

export function ToolsCard({ title, tools, usage: type }: Props) {
  return (
    <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-3 grid grid-rows-[auto_1fr_auto] gap-3">
      <StatusBadge usage={type} />

      <div className="space-y-1">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="list-disc pl-6">
        {tools.map((tool) => (
          <li>
            <p className="text-zinc-400">{tool}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ToolUsage = "regular" | "occasional";

function StatusBadge({ usage }: { usage: ToolUsage }) {
  return (
    <p
      data-usage={usage}
      className="absolute z-10 -top-2 right-5 border px-3 rounded-xl data-[usage=regular]:bg-red-800 data-[usage=occasional]:bg-emerald-800 border-zinc-700/75 text-zinc-100 text-xs"
    >
      {usage === "regular" ? "Régulier" : "Occasionel"}
    </p>
  );
}
