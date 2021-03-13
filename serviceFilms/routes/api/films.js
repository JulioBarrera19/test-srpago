const router = require('express').Router();

const { Film, FilmPresentation } = require('../../db');

router.get('/',  async (req, res) => {
    const { city } = req.query
    if(city){
        const films = await Film.findAll({
            include: [{
                model: FilmPresentation,
                where: { cityId: city}
            }]
        });
        res.json(films);
    }else {
        const films = await Film.findAll();
        res.json(films);
    }
});

router.post('/', async (req, res) => {
    const film = await Film.create(req.body);
    res.json(film)
});

router.put('/:filmId', async (req, res) =>{
    await Film.update(req.body , {
        where: {id: req.params.filmId}
    });
    res.json({
        success: true,
        msg: 'Modified film'
    });
});

router.delete('/:filmId', async (req, res) => {
    await Film.destroy({
        where: {id: req.params.filmId}
    });
    res.json({
        success: true,
        msg: 'Deleted film'
    })
});

module.exports= router;