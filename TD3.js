const express = require("express");
const app = express();  //intialisation de l'application web 
const port = 3000;      //port sur lequel le serveur web est lancé

function main() {

    app.get("/", (req,res) => {
        const dt = new Date();
        res.send("Hello world");
        console.log(dt);
    });
    
    app.listen(port, function() {
        console.log(`Serveur lancé sur port ${port}`);
    });
}

main();