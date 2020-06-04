'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res)
{

    function calculate(method, x, y)
    {
        var firstNumber = parseInt(x);
        var secondNumber = parseInt(y);

        if (method === "add")
        {
            console.log(x + " + " + y + " = " + (firstNumber + secondNumber));
        }
        else if (method === "subtract")
        {
            console.log(x + " - " + y + " = " + (firstNumber - secondNumber));
        }
        else if (method === "multiply")
        {
            console.log(x + " x " + y + " = " + (firstNumber * secondNumber));
        }
        else if (method === "divide")
        {
            console.log(x + " / " + y + " = " + (firstNumber / secondNumber));
        }
        else
        {
            console.log("ERROR! :( You must enter either \"add\", \"subtract\", \"multiply\" or \"divide\" for the method.");
        }
    }

    if (Object.keys(req.query).length > 0)
    {
        calculate(req.query.method, req.query.x, req.query.y);
    }

    res.render('index', { title: 'Calculator' });
});

module.exports = router;
