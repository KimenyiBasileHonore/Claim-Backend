import express from 'express';
import {
  userSignup,
  userLogin,
  companySignup,
  companyLogin,
} from '../controllers/authController'; 

const router = express.Router();


router.post('/user/signup', userSignup); 
router.post('/user/login', userLogin);  
router.post('/company/signup', companySignup);
router.post('/company/login', companyLogin);  

export default router;
