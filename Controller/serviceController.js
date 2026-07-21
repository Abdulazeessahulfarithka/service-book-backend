import Service from "../Model/Service.js";

//add service

export const addSerivce = async (req,res) =>{
    try{
        const {serviceName,category,description,serviceCharge,image}=req.body

        if(!serviceName || !category || !description ||!serviceCharge){
            return res.status(400).json({
                success:false,
                message:"please fill all requires fields"
            })
        }
        const service = await Service.create({
            serviceName,
            category,
            description,
            serviceCharge,
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

export const getAllService = async(req,res)=>{
    try{
      const services = await Service.find()
      res.status(200).json({
        success:true,
        message:"All services fetched successfully",
        services,
      })
      }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }

}