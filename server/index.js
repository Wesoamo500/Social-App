import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'

import AuthRoutes from './Routes/AuthRoutes.js'
import UserRoutes from './Routes/UserRoutes.js'
import PostRoutes from './Routes/PostRoutes.js'
import UploadRoutes from './Routes/UploadRoutes.js'

const app = express(); 

// serve images
app.use(express.static('public'))
app.use('/images', express.static("images"))

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGO_DB , {useNewUrlParser:true,useUnifiedTopology:true} )
	.then(()=>app.listen(process.env.PORT,()=>console.log('server running')))
	.catch((error)=>console.log(error.message))


app.use('/auth',AuthRoutes)    
app.use('/user',UserRoutes)
app.use('/post',PostRoutes)
app.use('/upload', UploadRoutes)