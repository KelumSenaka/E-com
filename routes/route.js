const express = require('express')
const router = express.Router()
const Ecom = require('../models/model')
const mongoose = require("mongoose");

router.get('/', async(req,res) => {
    try{
           const ecoms = await Ecom.find()
           res.status(200).json(ecoms)
           
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{   
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send("Invalid Item id");
        } else{
            const ecom = await Ecom.findById(req.params.id)
            res.status(200).json(ecom)
        }
           
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const ecoms = new Ecom({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    })

    try{
        const x =  await ecoms.save() 
        res.status(201).json(x)
    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send("Invalid Item id");
        } else{
            const ecom = await Ecom.findById(req.params.id) 
            ecom.price = req.body.price
            ecom.quantity = req.body.quantity
            const x = await ecom.save()
            res.status(200).json(x)
        }
           
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send("Invalid Item id");
        } else{
            const ecom = await Ecom.findByIdAndRemove(req.params.id)
            res.status(204).json(ecom)
        }
        
    }catch(err){
        res.send('Error')
    }

})



module.exports = router