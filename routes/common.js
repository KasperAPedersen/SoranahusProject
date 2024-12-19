import Router from 'express';

const route = new Router();

route.get('/gallery', (req, res) => {
    res.render('gallery.ejs');
});

route.get('/staff', (req, res) => {
    res.render('staff.ejs');
});

route.get('/', (req, res) => {
    res.render('index.ejs');
});

export default route;