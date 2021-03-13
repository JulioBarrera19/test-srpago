const router = require('express').Router();

const { Reservation, FilmPresentation } = require('../../db');

router.get('/',  async (req, res) => {
    const reservations = await Reservation.findAll();
    res.json(reservations)
});

router.post('/', async (req, res) => {
    try{
        const filmPresentation = await FilmPresentation.findOne({ where: {id: req.body.filmPresentationId}})
        console.log(filmPresentation.seatsAvailable)
        if(filmPresentation){
            if(filmPresentation.seatsAvailable > 0) {
                await Reservation.create(req.body).then(()=>{
                    FilmPresentation.decrement({seatsAvailable: req.body.numTickets}, 
                        {where: {id: req.body.filmPresentationId}
                    });
                    res.json({
                        success: true,
                        errors: 'Reserved tickets'
                    })
                })
            } else{
                res.json({
                    success: false,
                    msg: 'No seats available'
                });
            }
        } else {
            res.status(422).json({
                success: false,
                errors: 'There is no movie presentation'
            })
        }
    } catch (err) {
        res.status(422).json({
            success: false,
            errors: err
        })
    }
});

router.delete('/:reservationId', async (req, res) => {
    const reservation = await Reservation.findOne({ where: {id: req.params.reservationId}})
    await Reservation.destroy({
        where: {id: req.params.reservationId}
    }).then(() => {
        FilmPresentation.increment({seatsAvailable: reservation.numTickets}, 
            {where: {id: reservation.filmPresentationId}
        });
        res.json({
            success: true,
            msg: 'Deleted reservation'
        })
    });
});

module.exports= router;