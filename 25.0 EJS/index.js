import express from "express";

const app = express();
const port = 2000;

app.get("/",(req,res) =>{
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "It's Time to work hard";

    if (day === 0 || day === 6)
    {
         type = "the weekend";
        adv = "It's time to have some fun"; 
    }

    res.render("index.ejs",{
        dayType: type, 
        advise : adv
    });
});

app.listen(2000 , ()=>{
    console.log(`Sever running on port ${port}`);
});
