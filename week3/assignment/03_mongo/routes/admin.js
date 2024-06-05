const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course}=require('../db')
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;

    await Admin.find({username:username}).then(async(isExist)=>{
        if(isExist.length>0)
        {
            res.send("User name already in used");
        }else{
            Admin.create({
                username:username,
                password:password
            })
            res.json({
                message:"Admin Create Successfully"
            })
        } 
})
})

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
   // { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' } Output: { message: 'Course created successfully', courseId: "new course id" }
   const title=req.body.title;
   const description=req.body.description;
   const price=req.body.price;
   const imageLink=req.body.imageLink;
   const published=req.body.published

   await Course.create({
    title:title,
    description:description,
    price:price,
    imageLink:imageLink,
    published:published
   })
   res.json({
    message:"Course Create Successfully"
})
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    await Course.find({}).then((result)=>{
        if(result.length>0){
            res.json(result)
        }else{
            res.json({
                message:"not geting data"
            })
        }
    })

});

module.exports = router;