import Router from 'express';

const route = new Router();

route.get('/', (req, res) => {
    res.render('index.ejs');
});

export default route;