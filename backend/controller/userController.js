const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    try{
        const {username, password, role} = req.body; 

        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username, password: hashedPassword, role
        }); 

        await user.save(); 

        res.json({message: "User Registered successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const login = async(req, res) =>{
    try{
        const { username, password } = req.body; 

        const user = await User.findOne({username}); 
        if(!user){
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign(
            { id: user._id, role: user.role},
            process.env.JWT_SECRET,
            { expiresIn: "1h"}
        );

        res.json({token}); 
    } catch (error){
        res.status(500).json({error: error.message});
    }
};

module.exports = {register, login};