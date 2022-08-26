const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

/**
 * 
 * cpf - string
 * nome - string 
 * id - uuid
 * statement - [] array
 * 
 */

app.post("/account", (req,res) => {

    const {cpf, name} = req.body;

    const customerAlreadyExists = customers.some(

        (customer) => customer.cpf === cpf

    );

    if(customerAlreadyExists){

        return res.status(400).json({error: "CPF JÁ EXISTENTE!"})

    }


    customers.push({

        cpf,
        name,
        id: uuidv4(),
        statement: [],

    });

    return res.status(201).send();

});

app.listen(3333);