//authentication
//2 end point 
// --post/signin
// Body{
//     username:String,
//     password:string

// }
//Return a json web token with username encrypted

//get /users 
    //headers-
    //authorization header
    //returns an array of all users if users is signed in(token is correct) return 403 status code if not

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  
  const userf=ALL_USERS.find((data)=>data.username===username && data.password===password);
  console.log(userf);
  return userf?true:false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
   res.json({
    users:ALL_USERS.filter(function(val){
        if(val.username==username){
            return false
        }else{
            return true;
        }
    })
    
   })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)