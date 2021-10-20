const express = require("express");
const cors = require("cors");
const { fail } = require("assert");
const app = express();

app.use(cors());
app.use(express.json());

var students = [{
    "name": "Anastasia Blanko",
    "dob": "2021-03-27",
    "skills": "Kaledo",
    "department": "Legal",
    "country": "United States",
    "state": "Nevada",
    "city": "Las Vegas",
    "address": "9719 Susan Parkway",
    "zip": "891365",
    "id": 1
  }, {
    "name": "Guthrie Balderson",
    "dob": "2020-12-29",
    "skills": "NPO",
    "department": "Services",
    "country": "United States",
    "state": "North Carolina",
    "city": "Raleigh",
    "address": "040 Vermont Terrace",
    "zip": "276150",
    "id": 2
  }, {
    "name": "Red Bugg",
    "dob": "2021-02-24",
    "skills": "QPST",
    "department": "Accounting",
    "country": "United States",
    "state": "New York",
    "city": "New York City",
    "address": "28 Havey Avenue",
    "zip": "102603",
    "id": 3
  }, {
    "name": "Bab Thor",
    "dob": "2021-05-23",
    "skills": "JBPM",
    "department": "Marketing",
    "country": "United States",
    "state": "California",
    "city": "San Jose",
    "address": "20 Hanover Drive",
    "zip": "951132",
    "id": 4
  }, {
    "name": "Julius Mapp",
    "dob": "2021-07-25",
    "skills": "Image Processing",
    "department": "Legal",
    "country": "United States",
    "state": "Texas",
    "city": "Houston",
    "address": "93513 Moulton Point",
    "zip": "772661",
    "id": 5
  }]

app.post("/students", (req,res) => {
    req.body.id = students.length + 1;
    console.log(req.body);
    students.push(req.body);
    res.send();
})

app.get("/students", (req,res) => {
    res.send(students);
})

app.get("/students/:id", (req,res) => {
    var student = students.find(st => st.id == req.params.id);
    console.log(student);
    res.send(student);
})

app.put("/students/:id", (req,res) => {
    console.log(req.body);
    req.body.id = req.params.id;
    students[req.params.id-1] = req.body;
    res.send();
})

app.delete("/students/:id", (req,res) => {
    var idx = req.params.id-1
    students.splice(idx, 1);
    for(var i = idx; i < students.length; i++)
    {
        students[i].id = students[i].id - 1;
    }
    res.send();
})


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})
