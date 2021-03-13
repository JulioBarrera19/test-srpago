const router = require('express').Router();

const { FilmPresentation, Film, City } = require('../../db');

router.get('/',  async (req, res) => {
    const Films = await FilmPresentation.findAll();
    res.json(Films);
});

router.post('/', async (req, res) => {
    try{
        const checkFilmPresentation = await FilmPresentation.findOne({ where: {filmId: req.body.filmId, cityId: req.body.cityId, date: req.body.date}});
        console.log(checkFilmPresentation)
        if (!checkFilmPresentation){
            const newFilmPresentation = await FilmPresentation.create(req.body);
            res.json(newFilmPresentation)
        } else{
            return res.status(422).json({
                success: false,
                error: 'The film is already available at that time in the city.'
            })
        }
    } catch (err) {
        res.status(422).json({
            success: false,
            errors: err
        })
    }
});

router.put('/:presentationId', async (req, res) => {
    try{
        const checkFilmPresentation = await FilmPresentation.findOne({ where: {filmId: req.body.filmId, cityId: req.body.cityId, date: req.body.date}});
        if (!checkFilmPresentation){
            await FilmPresentation.update(req.body, {
                where: {id: req.params.presentationId}
            });
            res.json({
                success: true,
                msg: 'Modified film presentation.'
            });
        } else{
            return res.status(422).json({
                success: false,
                error: 'The film is already available at that time in the city.'
            })
        }
    } catch (err) {
        res.status(422).json({
            success: false,
            errors: err
        })
    }
});

router.delete('/:presentationId', async (req, res) => {
    await FilmPresentation.destroy({
        where: {id: req.params.presentationId}
    });
    res.json({
        success: true,
        msg: 'Deleted film presentation.'
    })
});

module.exports= router;