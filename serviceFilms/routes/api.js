const router = require('express').Router();
const middleware = require('./middlewares');

const apiFilmsRouter = require('./api/films');
const apiCitysRouter = require('./api/citys');
const apiFilmsPresentationsRouter = require('./api/films_presentations');
const apiReservationsRouter = require('./api/reservations');

router.use('/films', apiFilmsRouter);
router.use('/citys', apiCitysRouter);
router.use('/films-presentations', apiFilmsPresentationsRouter);
router.use('/reservations', middleware.checkToken, apiReservationsRouter);

module.exports= router;