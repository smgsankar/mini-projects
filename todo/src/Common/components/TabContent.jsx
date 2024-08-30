export function TabContent({ children, noPadding }) {
  return (
    <div
      className={`relative w-fill h-fill flex-shrink-0 ${
        noPadding ? "" : "px-4 py-5"
      }`}
    >
      {children}
    </div>
  );
}
