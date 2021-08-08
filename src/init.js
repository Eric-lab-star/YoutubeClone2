import "./db";
import "./models/Video";
import app from "./server";

const handleListening = () => {
  console.log(`server is listening to http://localhost:4000`);
};

app.listen("4000", handleListening);
