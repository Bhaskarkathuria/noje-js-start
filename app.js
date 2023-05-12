const http=require('http');

const port=4000;

const server=http.createServer(function(request,response)
{
    response.write("Bhaska Kathuria made this server")
    response.end()
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong',error)
    }else{
        console.log('server is listning on port',port)
    }
})