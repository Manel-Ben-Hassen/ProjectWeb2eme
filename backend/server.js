import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db.js'
import authRoutes from './routes/authRoutes.js'
import cors from "cors"; // Import CORS


dotenv.config()
connectDB()


const port = process.env.PORT

const app = express() ;
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes)



app.listen(port , ()=> console.log(`server is running on port ${port}`))