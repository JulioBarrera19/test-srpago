const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    if(!req.headers['user-token']) {
        return res.json({
            succes: false,
            msg: 'The token is not included'
        });
    }
    const userToken = req.headers['user-token'];
    let payload = {}
    try {
        payload = jwt.decode(userToken, 'llave unica');
    } catch (err) {
        console.log(err)
        return res.json({
            succes: false,
            msg: 'The token is incorrect'
        });
    }

    if(payload.expiredAt < moment().unix()) {
        return res.json({
            succes: false,
            msg: 'The token has expired'
        });
    }

    req.usuarioId = payload.usuarioId
    next();
}

module.exports= {
    checkToken: checkToken
}