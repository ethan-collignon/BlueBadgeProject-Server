require("dotenv").config();
  const Express = require('express');
  const app = Express();
  const dbConnection = require("./db");
  const middleware = require("./middleware");
  app.use(require('./middleware/headers'));


   const controllers = require("./controllers");
   app.use(Express.json());
   

    app.use("/user", controllers.userController);
    app.use("/review", controllers.reviewController);
    
    dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3001, () => {
            console.log(`[Server]: App is listening on 3001`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });


app.use(middleware.CORS);
