const jwt = require("jsonwebtoken");
module.exports = {
    checkAuth(req, res, next) {
        try {
            const token = req.headers['authorization'];
            if (!token) {
                res.status(401).send({
                    error: 'No se ha enviado el token'
                });
            }
            console.log(token)
            let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
            //let reqUser = decoded;
            //const verify = verifyToken(token);
            console.log(decoded)
            if (!decoded.id) {
                res.status(401).send({ error: 'Token incorrecto.' });
            }
            req.userData = decoded;
            next();
        } catch (error) {
            res.status(401).send({ error });
        }
    }
}