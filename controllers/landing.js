const home = async(req,res)=>{
    try {
        
        res.status(200).json({mss:req.body});
          
    } catch (error) {
        console.log("There is a problem");
    }
};

module.exports =  home ;


