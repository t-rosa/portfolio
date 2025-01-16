import { ToolsCard } from "@/domains/tools/tools-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ToolsCard />
    </div>
  );
}
