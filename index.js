import express from "express";

const PORT = 4000;
const app = express();

const middleWare = (req, res, next)=> {
 console.log(`someone is requesting ${req.url}`);
 next();
}

const handleHome = (req, res) => {
    return res.send("this is Home");
}

app.use( middleWare)
app.get("/", handleHome);


const handlePort = () => {
    console.log(`server is listening to http://localhost:${PORT}🥶`);
}
app.listen(PORT, handlePort);