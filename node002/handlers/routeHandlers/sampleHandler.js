const handler = {}

handler.sampleHandler= (requestProperties, callback)=>{
    console.log(requestProperties);
    callback(500,{
        message: 'This is a sample url',
    });
}

module.exports = handler;