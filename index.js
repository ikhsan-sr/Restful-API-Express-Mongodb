import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js';
const app = express();

mongoose.connect('mongodb://localhost:27017/restful_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(express.json());
app.use('/product', route);

app.listen('3001', () => {
    console.log(`Server started on port`);
});