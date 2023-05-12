const http=require('http');
const fs=require('fs')

const port=4000;

const server=http.createServer(function(request,response)
{   
    //console.log(request.url,request.method,request.headers)

    response.writeHead(200,{'Contenr-Type':'text/html'})
    fs.readFile('index.html',function(error,data)
    {
        if(error){
            response.writeHead(404)
            response.write('ERROR:File not Found')
        }else{
            response.write(data)
        }
        response.end()
    })

   
    
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        console.log('server is listning on port',port)
    }
})