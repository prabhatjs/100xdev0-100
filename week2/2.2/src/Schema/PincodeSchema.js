const mongoose=require('mongoose')

const PincodeSchema=new mongoose.Schema({
    PostOfficeName:{
                ty
    },
    Pincode:{

    },
    DistrictsName:{

    },
    City:{

    },
    State:{

    }
})

const pincodeschema=mongoose.model('pincodeschema',PincodeSchema);
module.exports=pincodeschema;