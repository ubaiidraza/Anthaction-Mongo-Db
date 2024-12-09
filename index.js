import express from "express";
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import connectDb from "./src/db/index.js";
import userrouters from "./src/routes/user.routers.js"
import cookieParser from "cookie-parser";



const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Hello Home!")
})

app.use("/api/v1", userrouters);


// // bcrypt password
// const encrypt = "$2b$10$eza2WdScTzrO2uyW7qqhl.ll2W1ugvN4zO1pVsf.p4uoObsjsNnI."

// // jWT token 
// const token = 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYWFhQGdtYWlsLmNvbSIsImlhdCI6MTczMzA4MDQ5Mn0.qpw0qV6vHHhFqmiM1EMjBP6p-a39lt1jPOXwnvZrs64"

// // bcrypt password create
// app.post("/encryptpassword", (req, res) => {
//     const { password } = req.body;
//     bcrypt.hash(password, 10, function(err, hash) {
//         if (err) return res.status(402).json({ message: "password error"});
//         res.json({ password: hash })
//     });
// })


// // bcrypt check password 
// app.post("/checkPassword", (req, res) => {
//     const { password } = req.body;
//     bcrypt.compare(password, encrypt, function(err, result) {
//         if (err) return res.status(402).json({ message: "occured password"});
//         if (!result) return res.status(404).json({ message: "incorrect password" });

//         res.json({ message: "User logged in Successfully" })
//     });
// });


// // jWT token create 
// app.post("/generatetoken", (req, res) => {
//     const { email } = req.body;
//     var token = jwt.sign({ email }, process.env.JWT_SECRET);

//     res.json({ token })
// });

// // jWT Check token
// app.post("/checktoken", (req, res) => {
//     jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//         if (err) return res.json({ message: "error occured" });
//         console.log(decoded) // bar
//         res.json({ decoded })
//       });
// });


// MONGO DB and Server connection
connectDb().then(() => {
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
})
}).catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
})