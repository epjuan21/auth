const User = require('../models/User');

exports.register = async (req, res) => {

    const { name, email, password} = req.body;
    
    const user = new User({
        name,
        email,
        password
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