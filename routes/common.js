import Router from 'express';

const route = new Router();

route.get('/', (req, res) => {
    res.render('index.ejs');
});

route.get('/gallery', (req, res) => {
    res.render('gallery.ejs');
});

export default route;