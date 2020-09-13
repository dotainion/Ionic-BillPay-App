const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51HMQLOBZvIBjqI0E93lQVGdltBSy5P0uqkUA5gUFNBbQdkexXdEzoSSFG26FiqbR8g8QUiHXOhLH1VlWcU6qHRt2005AyPPFDS");

const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req, res) => {
    res.send("add your stripe secret key to the .require('stripe') statement!!");
});

app.post("/login", async (req, res) =>{
    console.log(req.body)
    const data = req.body;
    if (data.SERVERUSERNAME === "user" && data.SERVERPASSWORD === "users"){
        if (data.username === "mb.repairss@gmail.com" && data.password === "user"){
            return res.send(true);
        }
        return res.send(false)
    }
    return res.send(null);
})

app.post("/checkout", async (req, res) =>{
    console.log(req.body);

    let error;
    let status;

    try{  
        const { token, product } = req.body;

        const customer = await stripe.customers.create({
            email: req.body.email,
            source: req.body.id
        });
        

        const idempotencyKey = uuid();
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency: "usd",
            customer:customer.id,
            description: "Purchased the $ {product.name}'",
            shipping:{
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
            }
        },
        {
            idempotencyKey
        }
        );
        console.log("Charge: ",{charge});
        status = "success";


      
    }catch(error){
        //console.error("Error: ", error);
        status = "failure";
    }
    console.log("hello world",status)
    res.json({error, status});
})

app.listen(80);
