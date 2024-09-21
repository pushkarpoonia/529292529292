const express = require('express');
const router = express.Router();





router.get('/', (req,res)=>{
   const arr = ["a","a","a","a"]
   res.send(arr[0])

});


router.route('/chk').get((req,res)  => { res.send("This is the check route")});

module.exports = router;
  