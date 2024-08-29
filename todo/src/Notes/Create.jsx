import { useState } from "react";
import { ChevronLeft } from "../Common/icons/ChevronLeft";
import { addNote } from "../Common/store/indexedDB";
import { colorBgMap } from "../Common/utils/constants";

function ColorButton({ onClick, className, selected }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`rounded-full transition-all ${className} ${
        selected ? "h-12 w-12 outline outline-1 outline-black" : "h-10 w-10 "
      }`}
    />
  );
}

const colors = Object.entries(colorBgMap);

export function Create({ onBack }) {
  const [selectedColor, setSelectedColor] = useState("red");

  const preventSwipe = (e) => {
    e.stopPropagation();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");
    addNote({ title, content, color: selectedColor })
      .then(() => {
        onBack();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      onTouchStart={preventSwipe}
      className="h-fill w-fill flex flex-col gap-4"
    >
      <div className="flex items-center gap-1">
        <button onClick={onBack} className="pt-[4px]">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold">Create Note</h1>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col flex-1 gap-4">
        <div className="h-16 flex flex-row justify-evenly items-center gap-4 py-2">
          {colors.map(([color, className]) => (
            <ColorButton
              key={color}
              className={className}
              selected={color === selectedColor}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <input
          required
          name="title"
          className="outline outline-gray-300 outline-1 rounded-lg h-[40px] w-fill px-4"
          placeholder="Enter title for your note"
        />
        <textarea
          required
          name="content"
          className="outline outline-gray-300 outline-1 rounded-lg flex-1 w-fill px-4 pt-4"
          placeholder="Keep your thoughts here"
        />
        <button
          type="submit"
          className="bg-amber-800 rounded-lg font-semibold text-white py-2"
        >
          Create
        </button>
      </form>
    </div>
  );
}
