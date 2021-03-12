const router = require('express').Router();

const { City } = require('../../db');

router.get('/',  async (req, res) => {
    const citys = await City.findAll();
    res.json(citys);
});

router.post('/', async (req, res) => {
    const city = await City.create(req.body);
    res.json(city)
});


router.put('/:cityId', async (req, res) =>{
    await City.update(req.body , {
        where: {id: req.params.cityId}
    });
    res.json({
        success: true,
        msg: 'Modified city'
    });
});

router.delete('/:cityId', async (req, res) => {
    await City.destroy({
        where: {id: req.params.cityId}
    });
    res.json({
        success: true,
        msg: 'Deleted city'
    })
})

module.exports= router;