import express from "express";
const app = express();
const port = 5000 ;

app.get("/",(req,res) =>{
res.send("<h1>Hello</h1>");
});

app.get("/contact",(req,res) =>{
    res.send("<h1>Contact Me</h1>");
    });

app.get("/about",(req,res) =>{
        res.send("<h1>About Me</h1><p>Mu name is Jass.</p>");
        });
app.listen(port, () =>{
    console.log(`Server is running at ${port}`);
});