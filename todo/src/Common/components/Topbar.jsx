export function Topbar() {
  const handleClick = (e) => {
    console.log("Clicked at topbar");
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 bg-white w-full font-semibold text-2xl text-center py-5 shadow-bottomElevated z-10"
    >
      Pages AIO
    </div>
  );
}
