interface MenuItem {
  icon?: string;
  title: string;
  url: string;
}

export const menu: MenuItem[] = [
  {
    icon: "🏠",
    title: "Home",
    url: "/",
  },
  {
    icon: "👨‍💻",
    title: "Projets",
    url: "/projects",
  },
  {
    icon: "🛠️",
    title: "Outils",
    url: "/tools",
  },
];
