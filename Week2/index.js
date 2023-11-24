const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

function calculateSum(counter){
    var sum = 0;
    for(var i=1;i<=counter;i++){
        sum = sum + i;
    }
    return sum;
}
function calculateMul(counter){
    var prod = 1;
    for(var i = 1;i<=counter;i++){
        prod = prod * i;
    }
    return prod;
}

// function middleware1(req,res,next){
//     console.log("from inside middleware " + req.headers.counter)
//     if(condition){
//         next()
//     }
//     else{
//         res.send("Error from inside middleware ")
//     }
// }
// app.use(middleware1)

function handleFirstRequest(req,res){
    // console.log(req.headers);
    // var headParam = req.headers.counter
    // var calculatedSum2 = calculateSum(headParam);

    //console.log(req.query)
    //var qryParam = req.query.counter
    //var calculatedSum = calculateSum(qryParam);
    //console.log(calculatedSum2)
    var cntr1 = req.query.counter

    // console.log(req.body)
    // var cntr = req.body.counter
    if(cntr1<1000){
        var calculatedSum3 = calculateSum(cntr1)
        var calculatedMul1 = calculateMul(cntr1)
        var answerObject = {
            sum : calculatedSum3,
            mul : calculatedMul1
        };
        //var answer = "the sum is a " + calculatedSum;
        res.status(200).send(answerObject)
    }
    else{
        res.status(411).send("You have sent very big number")
    }
}
function createrUser(req,res){
    res.send("Hello")
}
function putting(req,res){
    res.send("Put is working")
}
function Deleted(req,res){
    res.send("Delete is working")
}
function wildcard(req,res){
    console.log(req.params.username)
    res.send("This is working")
}

function givePage(req,res){
    // res.send(`<head>
    // <title>
    //     Hello Fromm page
    // </title>
    // </head>
    // <body>
    //     <b>Hi there</b>
    // </body>`)
    res.sendFile(__dirname + "/index.html")
}

app.get('/handlesum',handleFirstRequest)
// app.post('/createUser',createrUser)
// app.put('/putting',putting)
// app.delete('/Deleted',Deleted)
//app.post('/handlesum',handleFirstRequest)
//app.get('/',givePage)

//app.get('/:username',wildcard)//Like Instagram profile


function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)


