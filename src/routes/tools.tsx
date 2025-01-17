import { ToolsCard } from "@/domains/tools/tools-card";
import { tooling } from "@/lib/tooling";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tooling.regular.languages.length && (
        <ToolsCard
          title="Langages"
          tools={tooling.regular.languages}
          usage="regular"
        />
      )}
      {tooling.regular.frameworks.length && (
        <ToolsCard
          title="Frameworks"
          tools={tooling.regular.frameworks}
          usage="regular"
        />
      )}
      {tooling.regular.libraries.length && (
        <ToolsCard
          title="Librairies"
          tools={tooling.regular.libraries}
          usage="regular"
        />
      )}
      {tooling.regular.databases.length && (
        <ToolsCard
          title="Bases de données"
          tools={tooling.regular.databases}
          usage="regular"
        />
      )}
      {tooling.regular.tests.length && (
        <ToolsCard
          title="Tests"
          tools={tooling.regular.tests}
          usage="regular"
        />
      )}
      {tooling.regular.tools.length && (
        <ToolsCard
          title="Outils"
          tools={tooling.regular.tools}
          usage="regular"
        />
      )}
      {tooling.occasional.languages.length && (
        <ToolsCard
          title="Langages"
          tools={tooling.occasional.languages}
          usage="occasional"
        />
      )}
      {tooling.occasional.frameworks.length && (
        <ToolsCard
          title="Frameworks"
          tools={tooling.occasional.frameworks}
          usage="occasional"
        />
      )}
      {tooling.occasional.libraries.length && (
        <ToolsCard
          title="Librairies"
          tools={tooling.occasional.libraries}
          usage="occasional"
        />
      )}
      {tooling.occasional.databases.length && (
        <ToolsCard
          title="Bases de données"
          tools={tooling.occasional.databases}
          usage="occasional"
        />
      )}
      {tooling.occasional.tests.length && (
        <ToolsCard
          title="Tests"
          tools={tooling.occasional.tests}
          usage="occasional"
        />
      )}
      {tooling.occasional.tools.length && (
        <ToolsCard
          title="Outils"
          tools={tooling.occasional.tools}
          usage="occasional"
        />
      )}
    </div>
  );
}
