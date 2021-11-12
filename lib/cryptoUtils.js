const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const comparePassword = async(reqPassword, dbPassword ) => {
    
    return await  bcrypt.compare(reqPassword, dbPassword)
}

module.exports = { encryptPassword, comparePassword }