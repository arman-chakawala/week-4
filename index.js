let express = require("express");
let fs = require("fs");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// res = responce
//req = request
//npm init =init stands for initialise
app.get("/", function (req, res) {
  res.send("hello this is my first express application");
});

app.get("/about", function (req, res) {
  res.send("Tis is basis express application and we seeing the about page");
});

app.get("/user/:userid/books/:booksid", function (req, res) {
  res.send(req.params);
});

app.get("/GetStudents", function (req, res) {
  fs.readFile(__dirname + "/" + "Student.json", "utf8", function (err, data) {
    console.log(data);
    res.json({
      status: true,
      Status_Code: 200,
      "requested at": req.localtime,
      requrl: req.url,
      "request Method": req.method,
      studentdata: JSON.parse(data),
    });
  });
});

app.get("/GetStudentid/:id", (req, res) => {
  studentdata = {};
  fs.readFile(__dirname + "/" + "Student.json", "utf8", function (err, data) {
    let students = JSON.parse(data);
    let student = students["Student" + req.params.id];
    console.log("student", student);
    if (student) res.json(student);
    else
      res.json({
        status: true,
        Status_Code: 200,
        "requested at": req.localtime,
        requrl: req.url,
        "request Method": req.method,
        studentdata: JSON.parse(data),
      });
  });
});

app.get("/studentinfo", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.post("/submit-data", function (req, res) {
  let name = req.body.firstName + " " + req.body.lastName + " ";
  Qual = " Qualification" + req.body.Qual;
  console.log(req.body.Qual);
  res.send({
    status: true,
    message: "form Details",
    data: {
      name: name,
      age: req.body.myAge + " Gender: " + req.body.gender + "",
      Qualification: Qual,
    },
  });
});
app.listen(8000, function () {
  console.log("server is running on port 8000");
});

//to stop the terminal ctrl+z
//boost trap
//tailwind css foe making css more easy pre written coding.....
