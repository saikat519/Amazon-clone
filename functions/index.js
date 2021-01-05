const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')("your Stripe key");

const app=express();

//middlewares
app.use(cors({ origin:true }));
app.use(express.json())

// routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello from Firebase");
})

app.post('/payments/create',async(req,res)=>{
    const total = req.query.total;

    console.log(`Payment req recieved total Ammount : ${total}`);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });
    
    // status 201 is OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
})



//listen
exports.api = functions.https.onRequest(app);
