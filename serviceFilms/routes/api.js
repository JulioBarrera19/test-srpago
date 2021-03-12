const router = require('express').Router();
const middleware = require('./middlewares');

const apiFilmsRouter = require('./api/films');
const apiCitysRouter = require('./api/citys');
const apiRelFilmsCitysRouter = require('./api/rel_films_citys');

// router.use('/films', middleware.checkToken, apiFilmsRouter);
router.use('/films', apiFilmsRouter);
router.use('/citys', apiCitysRouter);
router.use('/films-citys', apiRelFilmsCitysRouter);

module.exports= router;