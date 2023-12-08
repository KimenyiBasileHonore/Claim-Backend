import express from 'express';
import cors from 'cors';
import dbConnect from './database/dbConnect';
import userCompanyroute from "./routes/userCompanyrouter"
import mifotraRoutes from "./routes/mifotraRoutes";
import problemReportrouter from "./routes/problemReportrouter";
import companyRoutes from "./routes/companyRoutes";
import companyController from "./controllers/authController";
import problemReportController from "./controllers/companyController";
import countRouter from "./routes/countRouter";


const app = express();
dbConnect();

app.use(cors({orgin:"*"}));
app.use(express.json());



app.use('/api/user', userCompanyroute);
app.use('/api/mifotra',mifotraRoutes);
app.use('/api/problem',problemReportrouter);
app.use('/api/company',companyRoutes)
app.get('/api/companies', companyController.getCompanyNames);
app.get('/api/problemReports/company/:companyId',problemReportController.getReportsByCompany );
app.use('/api/mifotrareport', countRouter);

export default app;

