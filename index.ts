#! /usr/bin/env node
import inquirer from "inquirer"


const currency:any =  {
    USD: 1,     // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};


let userAnswer = await inquirer.prompt(
    [
        {
            name:"from",
            message:"enter from currency",
            type:'list',
            choices:["USD","EUR","GBP","INR","PKR"]
        },
        {
            name:"to",
            message:"enter to currency",
            type:'list',
            choices:["USD","EUR","GBP","INR","PKR"]
        },
        {
            name:"amount",
            message:" enter your amount",
            type:"number",

        }
    ]
)
let fromAmount = currency[userAnswer.from]         //exchange rate
let toAmount = currency[userAnswer.to]             //exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount  //USD base currency 
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);