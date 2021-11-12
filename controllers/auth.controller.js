const User = require('../models/User');
const bcrypt = require('bcrypt');
const { encryptPassword, comparePassword } = require('../lib/cryptoUtils');
const { registerValidation, loginValidation } = require('../validations/validation');

exports.register = async(req, res) => {

    const {error} = registerValidation(req.body);
    
    if (error) return res.status(400).json({error: error.details[0].message})

    const { name, email, password} = req.body;

    // Validar Email Unico
    const isEmailExists = await User.findOne({email: email})
    
    if(isEmailExists) return res.status(400).json({error: true, message: `El Email ${email} ya ha sido registrado`})
    
    const user = new User({
        name,
        email,
        password: await encryptPassword(password)
    })

    try {

        const userDb = await user.save()

        res.status(200).json({
            error: null,
            data: userDb
        })
        
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.login = async(req, res) => {

    const { error } = loginValidation(req.body)

    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const { name, email, password} = req.body;

    try {
        
        const user = await User.findOne({ email: email})
    
        if(!user) return res.status(400).json({ error: true, message: 'Usuario no encontrado' });
    
        const validPassword = await comparePassword(password, user.password);
    
        if(!validPassword) return res.status(400).json({ error: 'contraseña incorrecta' })

        res.status(200).json({
            error: null,
            message: 'Bienvenido'
        })
    } catch (error) {
        res.status(400).json(error)
    }

}