const handler = {}

handler.notFoundHandler = (requestProperties, callback)=>{
    console.log(requestProperties);
    callback(500, {
        message:'This route is missing',
    });
}

module.exports = handler;