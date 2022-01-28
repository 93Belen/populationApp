import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) =>{
    res.sendFile('index.html')
});

app.use('/', router);
app.listen(3000, () => console.log('Listening at 3000'));
