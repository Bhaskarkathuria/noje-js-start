const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
if(url==='/'){

    fs.readFile('message.txt',(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log('data from file',data)
        res.write('<html>')
        res.write('<head><title>Enter Message </title></head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body');
        res.write('</html>');
        return res.end();
    })    
    
 

    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString()
            console.log(parseBody)
            const message=parseBody.split('=')[1]

            fs.writeFile('message.txt',message,err=>{
            res.statusCode=302;
            res.setHeader('Location','/')
            return res.end();
            });

        })

        //fs.writeFileSync('message.txt','DUMMY');
        
    }
    if(url==='/home'){
       res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>MY First Page</title><head>');
    res.write('<body><h1> Welcome Home</h1></body');
    res.write('</html>');
    res.end();
 

    }
    if(url==='/about'){
        res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>MY First Page</title><head>');
    res.write('<body><h1> Welcome to about us page</h1></body');
    res.write('</html>');
    res.end()
    }
    if(url==='/node'){
                res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title>MY First Page</title><head>');
    res.write('<body><h1> Welcome to my node Js project</h1></body');
    res.write('</html>');
    res.end()
    }
}

module.exports = requestHandler;