import jwt from 'jsonwebtoken'
import Company from '../models/company';

const checkAuth=async(req,res,next)=>{
    const token=req.header("x-auth-token");
    try {
        const user=await jwt.verify(token,process.env.TOKEN_SECRET);
        const person=await Company.findOne({email:user.email})
        req.user=person
        console.log(person)
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({"message":"authentication expired"});
    }
}

export default checkAuth;