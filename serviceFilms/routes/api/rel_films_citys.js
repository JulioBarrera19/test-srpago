const router = require('express').Router();

const { RelFilmsCitys, Film, City } = require('../../db');

router.get('/',  async (req, res) => {
    const relFilms = await RelFilmsCitys.findAll();
    res.json(relFilms);
});

router.post('/', async (req, res) => {
    try{
        const checkRel = await RelFilmsCitys.findOne({ where: {filmId: req.body.filmId, cityId: req.body.cityId}})
        if (!checkRel){
            const newRel = await RelFilmsCitys.create(req.body);
            res.json(newRel)
        } else{
            return res.status(422).json({
                success: false,
                error: 'The movie is already available in the city'
            })
        }
    } catch (err) {
        res.status(422).json({
            success: false,
            errors: err
        })
    }
});

router.put('/:relId', async (req, res) => {
    try{
        const checkRel = await RelFilmsCitys.findOne({ where: {filmId: req.body.filmId, cityId: req.body.cityId}})
        if (!checkRel){
            await RelFilmsCitys.update(req.body, {
                where: {id: req.params.relId}
            });
            res.json({
                success: true,
                msg: 'Modified relation'
            });
        } else{
            return res.status(422).json({
                success: false,
                error: 'The movie is already available in the city'
            })
        }
    } catch (err) {
        res.status(422).json({
            success: false,
            errors: err
        })
    }
});

router.delete('/:relId', async (req, res) => {
    await Film.destroy({
        where: {id: req.params.relId}
    });
    res.json({
        success: true,
        msg: 'Deleted relation'
    })
});

module.exports= router;