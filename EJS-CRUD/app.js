import http from 'http';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import userRoutes from './ROUTES/personroute.js';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.get ('/', (req, res) => {
    res.send('Welcome to the User Management API');
});



app.use(cors());
app.use(express.json());



// app.use(userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }
    );
}).catch((error) => {
    console.error('Failed to connect to MongoDB', error);
});
