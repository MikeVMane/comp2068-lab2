'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res)
{
    var answer = "";

    function calculate(method, x, y)
    {
        var firstNumber = parseInt(x);
        var secondNumber = parseInt(y);

        if (method === "add")
        {
            answer += "The calculation is " + x + " + " + y + " = " + (firstNumber + secondNumber);
            console.log(answer);
        }
        else if (method === "subtract")
        {
            answer += "The calculation is " + x + " - " + y + " = " + (firstNumber - secondNumber);
            console.log(answer);
        }
        else if (method === "multiply")
        {
            answer += "The calculation is " + x + " x " + y + " = " + (firstNumber * secondNumber);
            console.log(answer);
        }
        else if (method === "divide")
        {
            answer += "The calculation is " + x + " / " + y + " = " + (firstNumber / secondNumber);
            console.log(answer);
        }
        else
        {
            answer = "ERROR! :( You must enter either \"add\", \"subtract\", \"multiply\" or \"divide\" for the method.";
            console.log(answer);
        }
    }

    if (Object.keys(req.query).length > 0)
    {
        calculate(req.query.method, req.query.x, req.query.y);
    }

    res.render('index', { title: 'Calculator', calculate: answer });
});

module.exports = router;
