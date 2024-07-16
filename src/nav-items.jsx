import { Home, BarChart } from "lucide-react";
import Index from "./pages/Index.jsx";
import WeeklySummary from "./pages/WeeklySummary.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Water Tracker",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Weekly Summary",
    to: "/weekly-summary",
    icon: <BarChart className="h-4 w-4" />,
    page: <WeeklySummary />,
  },
];