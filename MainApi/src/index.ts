import express from 'express'
import diaryRouter from './routes/diaries'
import dotenv from 'dotenv';
import path from 'path';
const ENV_FILE = path.join(__dirname, '../.env');
dotenv.config({ path: ENV_FILE });

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use('/api/diaries', diaryRouter)


//Starts the server
const server =app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})

export {server, app}