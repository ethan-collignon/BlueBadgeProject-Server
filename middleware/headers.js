module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
};


//! COMMENTS
/*
?  CORS => Cross-Origin Resource Sharing 
?       -Uses additional HTTP headers to tell browsers to give a web app running at one origin, 
?        access to selected resources from a different origin

?  access-control-allow-origin => tells the browser to allow code from any origin
?  '*' => the asterisk tells it that it is any origin 

?  access-control-allow-methods => specifies the methods allowed when accessing the resources in 
?                                  response to a "pre-flight" request

? access-control-allow-headers => used in response to a preflight request that indicates which HTTP
?                                 headers can be used during an actual request

?  Preflight Request => checks to see if the CORS protocol is understood
?                        -ex: a client might be asking a server if it would allow a DELETE request 
?                             before actually sending that DELETE request


*/

