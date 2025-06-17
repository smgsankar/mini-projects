import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type KeyState = "default" | "correct" | "present" | "absent";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  keyStates?: Record<string, KeyState>;
  disabled: boolean;
}

const KEYS_ROW_1 = "QWERTYUIOP".split("");
const KEYS_ROW_2 = "ASDFGHJKL".split("");
const KEYS_ROW_3 = ["Backspace", ..."ZXCVBNM".split(""), "Enter"];

export const Keyboard = ({
  onKeyPress,
  keyStates = {},
  disabled,
}: KeyboardProps) => {
  const getKeyClass = (key: string) => {
    const state = keyStates[key.toUpperCase()] ?? "default";
    return cn(
      "text-lg md:text-xl font-semibold rounded px-2 py-3 flex-1 text-white uppercase transition-colors duration-500 border border-border focus-visible:outline-none focus-visible:ring-0",
      {
        "bg-green-600": state === "correct",
        "bg-yellow-500": state === "present",
        "bg-zinc-600": state === "absent",
        "bg-muted text-foreground": state === "default",
      }
    );
  };

  const renderKey = (key: string, flexGrow = 1) => (
    <Button
      key={key}
      disabled={disabled}
      className={getKeyClass(key)}
      style={{ flex: flexGrow }}
      onClick={() => onKeyPress(key)}
    >
      {key === "Backspace" ? "⌫" : key === "Enter" ? "⏎" : key}
    </Button>
  );

  return (
    <div className="flex-1 w-full max-w-md px-2 flex flex-col justify-end gap-2 pb-4 select-none">
      <div className="flex gap-1">{KEYS_ROW_1.map((k) => renderKey(k))}</div>
      <div className="flex gap-1 pl-3 pr-3">
        {KEYS_ROW_2.map((k) => renderKey(k))}
      </div>
      <div className="flex gap-1">
        {KEYS_ROW_3.map((k) =>
          k === "Enter" || k === "Backspace" ? renderKey(k, 1.5) : renderKey(k)
        )}
      </div>
    </div>
  );
};
