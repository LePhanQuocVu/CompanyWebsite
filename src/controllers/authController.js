const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
exports.register = async(req,res) => {
    const { email, password, role } = req.body;
    const existingUser = await userModel.getUserByEmail(email);
    if(existingUser) return res.status(400).json({msg: 'User Exist'});
    const hashPassword = await bcrypt.hash(password, 10);
    await userModel.createUser(email,hashPassword,role || 'user');
    res.json({msg: "Register successed!"});
}

exports.login = async (req,res) => {
    const {email, password} = req.body;
    console.log(email)
    const user = await userModel.getUserByEmail(email);
    if(!user) return res.status(400).json({msg: 'User Exist'});

    const isMatch = await bcrypt.compare(password,  user.password);
    if(!isMatch) return res.status(401).json({msg: "Invalid  password"});
    const token = jwt.sign({id: user.userId, role: user.role},process.env.SECRET_JW, {expiresIn: '1h'});
    res.json({msg: "Login Success", token: token});
}