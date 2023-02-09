const express = require('express')
const router = express.Router()
const Ecom = require('../models/model')


router.get('/', async(req,res) => {
    try{
           const ecoms = await Ecom.find()
           res.json(ecoms)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const ecom = await Ecom.findById(req.params.id)
           res.json(ecom)
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
        res.json(x)
    }catch(err){
        res.send('Error')
    }
})

router.put('/:id',async(req,res)=> {
    try{
        const ecom = await Ecom.findById(req.params.id) 
        ecom.quantity = req.body.quantity
        const x = await ecom.save()
        res.json(x)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const ecom = await Ecom.findById(req.params.id) 
        ecom.quantity = req.body.quantity
        const x = await ecom.save()
        res.json(x)   
    }catch(err){
        res.send('Error')
    }

})



module.exports = router