const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');
    const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);
    
    // One way to read and write data in Node Js

    // readStream.on('data',(chunk)=>{
    //     writeStream.write(chunk);
    // });

    // More easier to read and write data in Node JS

    readStream.pipe(writeStream);

    if(req.url==='/')
    {
        res.write('<html><head><title>Enter big data file</title></head>');
        res.write('<body><form method="POST" action="/posts"><input name=\'message\' type=\'text\' placeholder = \'Enter your message here\' />');
        res.write('</form></body></html>');
        res.end();
    }
    else if(req.url === '/posts' && req.method === 'POST'){
        let post = [];
        req.on('data',(chunk)=>{
            post.push(chunk);
        });
        req.on('end',()=>{
            let postBody = Buffer.concat(post).toString();
            res.write(postBody);
            res.end();
        })
    }
})

server.listen(3000);
console.log(`server is listening on port 3000`);