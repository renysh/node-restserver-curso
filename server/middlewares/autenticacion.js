const jwt = require('jsonwebtoken');

/**
 * Verificar token
 */
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    //console.log(token);

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};

/**
 * Verificar AdminRole
 */

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    console.log(usuario);

    if (usuario.rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El usuario no es Administrador'
            }
        });
    }

    next();


};

/**
 * Verifica token para Imagen
 */

let verificaTokenImg = (req, res, next) => {
    let token = req.query.token;
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}



module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}