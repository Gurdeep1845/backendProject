import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";




const app = express()



app.use(cors({                     
    origin: process.env.CORS_ORIGIN,                         //Enables CORS for all route
    Credentials : true    
}))
  
app.use(express.json({limit :   "16kb"}));        //Parses incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: true }));  //Parses incoming requests with URL-encoded payloads.
app.use(express.static('public'));                // Serve files from the 'public' directory
app.use(cookieParser())


export default app()