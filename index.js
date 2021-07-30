import express from "express"
import morgan from "morgan";

const logger = morgan("combined");
const app = express();



const middleware = (req,res,next) => {
    console.log(`I am middleware`);
    next();
};

const handleHome = (req, res) => {
    return res.send("<h1>This is My Home <h1>")
};
app.use(logger);
app.use(middleware);
app.get("/", handleHome);

const handleListening = () => {
    console.log(`server is listening to http://localhost:4000`);
}

app.listen("4000", handleListening)