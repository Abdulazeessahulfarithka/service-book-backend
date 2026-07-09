import Service from "../Model/Service.js";

//add service

export const addSerivce = async (req,res) =>{
    try{
        const {serviceName,category,description,price,image}=req.body

        if(!serviceName || !category || !description ||!price){
            return res.status(400).json({
                success:false,
                message:"please fill all requires fields"
            })
        }
        const service = await Service.create({
            serviceName,
            category,
            description,
            price,
            image,
        })
        res.status(201).json({
            success:true,   
            message:"Service added successfully",
            service,
        })
    }catch(error){
      res.status(500).json({
        success:false,
        message:error.message,
      })
    }
}