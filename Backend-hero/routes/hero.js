const express = require ('express');
const router = express.Router();
const multer = require ('multer');
const Hero = require ('../models/hero');
let filenameGlobal='';
const myStorage = multer.diskStorage({
    destination :'./uploads',
    filename:(req,file,redirect)=>{
       let date = Date.now();
       let fl = date + '.'+ file.mimetype.split('/')[1];
       filenameGlobal = fl;
       redirect(null , fl);


    }
})

const upload = multer ({storage : myStorage});

//request 
// http://127.0.0.1:3000/hero

router.post('/ajout', upload.any('image'), (req, res)=>{
    let data = req.body;
    let h = new Hero (data);
    h.image=filenameGlobal;
    h.save()
    .then(
        (newHero)=>{
            filenameGlobal='';
            res.send(newHero)
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
})

router.get('/getall', (req,res)=>{
    Hero.find()
    .then(
        (heros)=>{res.send(heros)}
    )
    .catch(
        (error)=>{
            res.send(error)
        }
    )
})

router.get('/getbyid/:id',(req,res)=>{
    let myid = req.params.id
    Hero.findOne({_id:myid})
    .then(
        (reslt)=>{
            res.send(reslt)
        }
    )
    .catch(
        (error)=>{
            res.send(error)
        }
        
    )
})


router.delete('/del/:id',(req,res)=>{
    let myId = req.params.id;
    Hero.findByIdAndDelete({_id:myId})
    .then(
        (deletedHero)=>{
            res.send(deletedHero)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})


router.put('/update/:id', (req,res)=>{
    let id = req.params.id;
    let newHero = req.body;
    Hero.findByIdAndUpdate({_id:id},newHero)

    .then(
        (updatedHero)=>{
            res.send(updatedHero)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})





module.exports=router;