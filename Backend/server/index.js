import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import bodyParser from "body-parser";
import conDB  from "./db.js"
import userModel from "./UserModel.js";
import cookieParser from "cookie-parser";


const validateToken = (req, res, next) => {
  const token = req.cookies.santosh;
  if (!token) {
      return res.status(401).send('Unauthorized: No session found. Please log in.');
  }
  const isValidToken=jwt.verify(token,process.env.SECRET_CODE);
  console.log(isValidToken);
  if (isValidToken) {
      next();
  } else {
      res.status(401).send('Unauthorized: Invalid session. Please log in.');
  }
}; 

const app=express();
app.use(bodyParser.json());
conDB();

app.use(cookieParser());
app.use("/protected",validateToken);

app.get("/protected/mysecret",(req,res)=>{
  res.json({
    comment:"Yahhoo"
  })
})
app.get("/",(req,res)=>{
    res.send("Hello");
})
// register Route
app.post('/register', async(req, res) => {
    const saltRounds = 1;
    const salt = bcrypt.genSaltSync(saltRounds);
    const {fullname, email, password} = req.body;
    console.log(req.body)
    const hashedpassword = await bcrypt.hash(password, salt); 
    
    const newUser =  new userModel({
      fullname,
      email,
      password: hashedpassword
    })
  
    const userCreated = await newUser.save()
    if(!userCreated) {
      console.log("user cannot be created");
      return res.status(500).send("user cannot be created")
    } else {
      console.log("user has been created to the database");
      return res.json({
        comment:"user created successfully"
      })
    }
  });


app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await userModel.findOne({ email });
    // console.log(user)
    if (user===null) {
      return res.status(401).send('Invalid email or password');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // console.log(" ",isPasswordCorrect);
    if (isPasswordCorrect) {
      const mysecretkey = process.env.SECRET_CODE;
  
    const payload = {
      fullName: user.fullName,
      email: user.email,
      password: user.password,
    };
    const token = jwt.sign(payload, mysecretkey, { expiresIn: '5d' });
    // console.log(token);
    res.cookie('santosh',token, {
      httpOnly: true, 
      secure: true,  
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'Strict'
  });
      return res.json({
        comment:"User validated"
      });
    }
  
  });

app.listen(process.env.PORT,(res)=>{
    console.log(`server is runnin on ${process.env.PORT}`);
});
