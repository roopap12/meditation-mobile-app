import Dexie from "dexie";
Dexie.debug = true;

export const db = new Dexie("myDatabase");

db.version(3).stores({
    form: "++id, firstName, lastName, dateOfBirth, email, donation",
  });

export default db;