import { useEffect, useState } from "react";
import { getNotes } from "../Common/store/indexedDB";
import { colorOutlineMap } from "../Common/utils/constants";

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
        <p>Loading...</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className={`outline outline-2 ${colorOutlineMap[note.color]} `}
            >
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
