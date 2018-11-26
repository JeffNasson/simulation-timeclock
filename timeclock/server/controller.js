module.exports={

    //Get all punches
    getPunches:(req,res,next)=>{
        const db = req.app.get('db')

        db.get_all_punches()
            .then(punches=>res.status(200).send(punches))
            .catch(err=>console.log(err))
    },

    //Delete punch by /:id
    deletePunch:(req,res,next)=>{
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_punch([+id])
            .then(punches=>res.status(200).send(punches))
            .catch(err=>console.log(err))
    },

    //Post new punch
    newPunch:(req,res,next)=>{
        const db = req.app.get('db')
        const {punchType,punchDay,punchHr,punchMin,punchDate,am_pm} = req.body

        db.new_punch([punchDate,punchDay,punchHr,punchMin,am_pm,punchType])
            .then(punch=>console.log(punch)||res.status(200).send(punch))
            .catch(err=>console.log(err))
    },

    //Get punch by /:id
    getPunch:(req,res,next)=>{
        const db = req.app.get('db')
        const {id} = req.params

        db.get_punch([id])
            .then(punchId=>console.log(punchId)||res.status(200).send(punchId))
            .catch(err=>console.log(err))
    },

    //Put punch by /:id
    editPunch:(req,res,next)=>{
        const db = req.app.get('db')
        const {id} = req.params
        const {date_punch,days,hours,minutes,am_pm,punch_type} = req.body

        db.edit_punch([date_punch,days,hours,minutes,am_pm,punch_type,id])
            .then(punchId=>console.log(punchId)||res.status(200).send(punchId))
            .catch(err=>console.log(err))
    }
}