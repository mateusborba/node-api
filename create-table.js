import sql from "./db.js";

sql`DROP TABLE IF EXISTS video;`.then(() => {
  console.log("table dropped.");
});

sql`
CREATE TABLE videos (
    id          TEXT PRIMARY KEY,  
    title       TEXT,
    description TEXT,
    duration    INT
)`.then(() => {
  console.log("created table");
});
