// dependencies 
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../route');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const handler = {};
handler.handleReqRes = (req,res)=>{
    const parsedUrl = url.parse(req.url,true);
    const queryStringObject = parsedUrl.query;
    const pathname = parsedUrl.pathname;
    const trimmedPath = pathname.replace(/^\/+|\/+$/g,'');
    const headerObject = req.header;
    const method = req.method.toLowerCase();
    const requestProperties = {
        parsedUrl,
        pathname,
        queryStringObject,
        trimmedPath,
        method,
        headerObject,
    };
    const chosenHandler = routes[trimmedPath]?routes[trimmedPath]:notFoundHandler;
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    chosenHandler(requestProperties, (statusCode, payload)=>{
        statusCode = typeof(statusCode)==='number'?statusCode: 200;
        payload = typeof(payload)==='object'?payload: {};
        const payloadString = JSON.stringify(payload);
        res.writeHead(statusCode);
        res.write(payloadString);
    });
    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer);
    })
    req.on('end',(buffer)=>{
        realData+=decoder.end(buffer);
        res.end(realData);
    })
}
module.exports = handler;