import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const Container = ({ children }: PropsWithChildren) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={cn(
        `min-h-screen flex flex-col items-center transition-colors duration-500 ${
          isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
        }`
      )}
    >
      {children}
    </div>
  );
};
