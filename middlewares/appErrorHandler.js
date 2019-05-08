
let errorHandler= (err, req, res, next)=>{
      console.log("Some error occured");
      console.log(err);
      console.log("Global error handler called");

}

let routeNotFoundHandler= (err, req, res,next)=>{
    console.log("Global not found handler called");
    res.status(404).send('Route not found in the application')

}

module.exports={
    globalErrorHandler:errorHandler,
    routeNotFoundHandler:routeNotFoundHandler
}