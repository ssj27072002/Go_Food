const express = require("express");
const router = express.Router();
const Order = require("../models/Orders")

router.post('./orderData',async(req,res)=>{
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})


    let
})