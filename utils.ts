export const _createResponseMessage = (res, {data,message,code,status})=>{
    res.status(code).json({data,message,status})
}

export const _saltRounds = ()=>(  Math.ceil(Math.random() * Date.now() / 100000000000) )