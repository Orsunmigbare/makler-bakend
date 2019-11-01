export const _createResponseMessage = (res, {data,message,code,status})=>{
    res.status(code).json({data,message,status})
}

export const _saltRounds = () => (Math.ceil(Math.random() * Date.now() / 100000000000))

export const _isValidEmail = (email) => (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))