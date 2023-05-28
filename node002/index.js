//Dependencies 

const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
//Module Scaffolding

const app = {};

//Configuration

app.config = {
  port: 4000,
};

//Create Server

app.createServer = ()=>{
  const server = http.createServer(handleReqRes);
  server.listen(app.config.port,()=>{
    console.log(`Your Node JS Server Is Listening On http://localhost:${app.config.port}`);
  })
}

//Handle Request Response 

app.createServer();