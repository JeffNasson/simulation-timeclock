module.exports={

    //Get all punches
    getPunches:(req,res,next)=>{
        const db = req.app.get('db')

        db.get_all_punches()
            .then(punches=>console.log(punches)||res.status(200).send(punches))
            .catch(err=>console.log(err))
    },

    //Delete punch by /:id
    deletePunch:(req,res,next)=>{},

    //Post new punch
    newPunch:(req,res,next)=>{},

    //Get punch by /:id
    getPunch:(req,res,next)=>{},

    //Put punch by /:id
    editPunch:(req,res,next)=>{}
}