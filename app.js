//import Models from './orm/models.js';
import common from './routes/common.js';

import Express from 'express';
import Session from 'express-session';
import DotEnv from 'dotenv';

const app = new Express();

DotEnv.config();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(Express.json());
app.use(Express.static('public'));
app.use(Express.urlencoded({extended: true}));
app.use(Session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use([
    common
]);

app.listen(3000, (e) => {
    console.log(e ? e : `Listening on port 3000`);
});