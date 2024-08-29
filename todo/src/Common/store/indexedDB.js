let db;

export function initNotesDB() {
  const request = window.indexedDB.open("notes", 1);

  request.onsuccess = () => {
    db = request.result;
  };

  request.onupgradeneeded = () => {
    db = request.result;
    db.createObjectStore("notes", { keyPath: "id", autoIncrement: true });
  };
}

export function addNote({ title, content, color }) {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Database not initialized");
    const transaction = db.transaction(["notes"], "readwrite");
    const store = transaction.objectStore("notes");

    store.add({ title, content, color });

    transaction.oncomplete = () => {
      console.log("Note added successfully");
      resolve();
    };
  });
}

export function getNotes() {
  return new Promise((resolve, reject) => {
    if (!db) return reject("Database not initialized");
    const transaction = db.transaction("notes", "readonly");
    const store = transaction.objectStore("notes");
    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}