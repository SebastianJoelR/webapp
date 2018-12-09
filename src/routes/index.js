const express= require ('express');
const router= express.Router();

router.get('/',(req,res) =>{
    res.render('index.ejs');
   //console.log(__dirname+'/views/index.html');

  });
    
   

router.get('/contact',(req,res)=>{
   res.render('contact.ejs',{contacttitle:'New Route'})
});

  module.exports=router;