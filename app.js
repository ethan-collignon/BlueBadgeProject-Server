  require("dotenv").config();
  const Express = require('express');
  const app = Express();
  const dbConnection = require("./db");

    app.use(Express.json());

const controllers = require("./controllers");
const middleware = require("./middleware");

   app.use("/user", controllers.userController);
   app.use(middleware.validateSession);
   app.use("/review", controllers.reviewController);

    dbConnection.authenticate()
    .then(() => dbConnection.sync({alter: true}))
    .then(() => {
        app.listen(3001, () => {
            console.log(`[Server]: App is listening on 3001`);
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });
     

app.use(middleware.CORS);