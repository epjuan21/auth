const jwt = require('jsonwebtoken')

const verifyToken  = async (req, res, next) => {

    const token = req.header('auth-token')

    if(!token) return res.status(401).json({error: "Acceso denegado"});

    try {
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified
        next()
    } 
    catch (error) {

        res.status(400).json({error: 'El token no es válido'})
    }
}

module.exports = { verifyToken }