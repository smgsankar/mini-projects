import { useEffect, useState } from "react";
import { getNotes } from "../Common/store/indexedDB";
import { colorBgMap } from "../Common/utils/constants";
import { ellipsizeText } from "../Common/utils/helpers";

function NoteCard({ note }) {
  return (
    <li
      key={note.id}
      className="relative flex flex-col gap-1 bg-white shadow-md p-4 rounded-xl w-fill h-[180px]"
    >
      <span
        className={`absolute top-0 left-0 h-2 w-fill ${
          colorBgMap[note.color]
        } rounded-t-xl`}
      />
      <h2 className="font-semibold text-xl">{ellipsizeText(note.title, 16)}</h2>
      <p className="overflow-hidden whitespace-pre-line line-clamp-5 break-words h-[calc(100%-32px)]">
        {note.content}
      </p>
    </li>
  );
}

export function List() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes()
      .then((notes) => {
        setNotes(notes);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p className="px-4 py-5">Loading...</p>
      ) : (
        <div className="flex flex-col gap-5 py-5">
          <h1 className="text-3xl font-semibold px-4">Your notes</h1>
          <ul className="grid grid-cols-2 gap-4 px-4 pb-5 overflow-auto no-scrollbar">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
