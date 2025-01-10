import Router from 'express';

const route = new Router();

route.get('/galleri', (req, res) => {
    res.render('gallery.ejs');
});

route.get('/for-sagsbehandlere', (req, res) => {
    //res.render('forCaseworkers.ejs');
    res.render('index.ejs');
});

route.get('/for-den-unge', (req, res) => {
    //res.render('fortheYoung.ejs');
    res.render('index.ejs');
});

route.get('/om-soranahus', (req, res) => {
    res.render('about.ejs');
});

route.get('/', (req, res) => {
    res.render('index.ejs');
});

export default route;