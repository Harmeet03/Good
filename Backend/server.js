const mongoDB = require("./dbConnection");
const express = require("express");
const buyForm = require("./formSchema");

mongoDB();

const cors = require("cors");

const connection = {
    origin: "http://127.0.0.1:5501"
    // origin: "https://goodclothing.netlify.app"
};

const app = express();
app.use(cors(connection));

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const request = await fetch("https://good-wt15.onrender.com/", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5501'
                // 'Access-Control-Allow-Origin': 'https://goodclothing.netlify.app'
            }
        });
        if(request.ok){
            console.log("Server Connected!");
        }
        else{
            console.log("Request Error!");
        }
    }
    catch(error){
        console.log(`Error occurred: ${error}`);
    }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("App is Working");
});

// NOW THIS CODE WILL GET THE DATA FROM BUY FORM (BACKEND OF BUY FORM)
app.post("/form", async function (req, res) {
    try{
        const buyer = await buyForm.create({
            email: req.body.email,
            fname: req.body.fname,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pcode: req.body.pcode,
            pno: req.body.pno
        });

        console.log("Data sent");
        // Send a success response
        res.status(201).json({ message: "Form submitted successfully", buyer });
    }
    catch(error){
        console.log(`Error while sending data to form's backend: ${error}`);
    }
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});