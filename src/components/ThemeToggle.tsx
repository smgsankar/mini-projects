import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const onClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={onClick}
      aria-label="Toggle theme"
      className={cn(
        `transition-colors duration-500 ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`
      )}
    >
      {isDark ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-blue-400" />
      )}
    </Button>
  );
};
