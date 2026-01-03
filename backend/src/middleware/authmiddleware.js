const jwt=require("jsonwebtoken")
const foodpartnermodel=require('../models/foodpartner.model')

async function authfoodpartnermiddleware(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"please login first"
        })
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const foodpartner=foodpartnermodel.findById(decoded.id)
        req.foodpartner=foodpartner
        next();
    } catch (error) {
        return res.status(401).json({
            
            message:"invalid token"
        })
    }
}

module.exports={
    authfoodpartnermiddleware
}