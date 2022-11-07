import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let userPhoto;

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    userPhoto = avatar;

    const userData = req.body;

    users.push(userData);

    res.send("OK");
});

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;

    if (!username || !tweet) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

   const urlToString = userPhoto.toString();

   const post = {
    username,
    avatar: urlToString, 
    tweet
   };

    tweets.push(post);

    res.send("OK");
});

app.get('/tweets', (req, res) => {
    const tweetsPublished = tweets.slice(-10);
    res.send(tweetsPublished);
});

app.listen(5000, () => console.log('Running server in port 5000'));