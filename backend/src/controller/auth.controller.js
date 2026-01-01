const usermodel=require('../models/user.model')
//bcrypt,jsonwebtoken,Cookie parser
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
async function registeruser(req, res) {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ message: 'fullname, email and password are required' });
        }

        const isuserexist = await usermodel.findOne({ email });
        if (isuserexist) {
            return res.status(400).json({ message: 'user already exist' });
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await usermodel.create({ fullname, email, password: hashedpassword });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || '5e3041057cd2ee9871496f211f14a05f');

        // set token as httpOnly cookie and send 201
        res.cookie('token', token, { httpOnly: true }).status(201).json({
            message: 'user created successfully',
            user: {
                _id: user._id,
                email: user.email,
                fullname: user.fullname
            }
        });
    } catch (err) {
        console.error('registeruser error', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports={
    registeruser
}