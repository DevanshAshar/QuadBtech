const express=require('express')
const axios=require('axios')
const Task=require('./schema')
const data=async(req,res)=>{
    try {
        const r=await axios.get('https://api.wazirx.com/api/v2/tickers')
        const resp=r.data
        const arr=Object.entries(resp)
        await Task.deleteMany({})
        for(i=0;i<10;i++)
        {
            const task=await new Task({
                name:arr[i][1].name,
                last:arr[i][1].last,
                buy:arr[i][1].buy,
                sell:arr[i][1].sell,
                volume:arr[i][1].volume,
                base_unit:arr[i][1].base_unit
            })
            await task.save()
        }
        const result=await Task.find()
        res.status(200).json(result)    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports={data}