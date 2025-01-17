interface Props extends React.PropsWithChildren {
  title: string;
}
export function ToolsCard({ title, children }: Props) {
  return (
    <div className="relative border rounded-xl border-zinc-700/75 bg-zinc-900/55 p-3 lg:p-6 space-y-6 ">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid gap-6 lg:grid-cols-2">{children}</div>
    </div>
  );
}
