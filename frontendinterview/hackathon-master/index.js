const express = require("express");
const dbConnection = require("./databaseConn.js");
const app = express();

const cors = require("cors");
app.use(cors);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const path = require("path");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(require("cookie-parser")());

//routes
// const productRoutes=require('./routes/productRoutes.js')
const sellerRoutes = require("./routes/sellerRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
// app.use(productRoutes)
app.use(userRoutes);
app.use(sellerRoutes);
// //

app.listen(process.env.PORT, () => {
  console.log("server started at port no 8085");
});

// database connection
dbConnection();

const getData = require("./data.js");

// app.get('/insertData',async()=>{
//     getData();
// })
