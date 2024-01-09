const UserModel=require('../models/Users')

const login=async (req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(users=>{
        if(users){
            if(users.password===password){
                res.json("Success")
            }
            else{
                res.json("Password is incorrect")
            }
        }
        else{
            res.json("No record existed");
        }
    })
}

const register =async(req,res)=>{
    try {
        const existingUser = await UserModel.findOne({ email: req.body.email });
        if (existingUser) {
          // User with the provided email already exists
          return res.status(409).json({ message: 'User already registered' });
        }
        // Proceed with creating the new user
        const newUser = await UserModel.create(req.body);
        res.json(newUser);
    } 
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports={register,login};