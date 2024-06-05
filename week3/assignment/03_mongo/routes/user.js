const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;

    await User.find({username:username}).then((isExist)=>{
        if(isExist.length>0){
            res.send("User name already in used");
        }else{
            User.create({
                username:username,
                password:password
            })
            res.json({
                message:"User Create Successfully"
            })
        }
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    await Course.find({}).then((result)=>{
            if(result.length>0){
                res.json(result)
            }
            else{
                res.json({
                    message:"not geting data"
                })
            }
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const coursid=req.params.courseId;
    const username=req.headers.username;
    await User.updateOne({
        username:username
    },{
        "$push":{
            parchaseCourse:coursid
        }
    })
        res.json({
            message:"Purchases completed"
        })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user=await User.findOne({username:req.headers.username});
    console.log(user.parchaseCourse)
    const course=await Course.find({
       _id:{
        "$in":user.parchaseCourse
       } 
    });
    res.json({
        course:course
    })

});

module.exports = router