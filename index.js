import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get('/', (req, res) => {
    console.log("Testing !!");
    res.send("Welcome to Home Page");
});

app.listen(PORT, () => {
    console.log(`Server running on port :- ${PORT}`);
})

/**
 * At line 10, we can do the below things instead too :-
 *   In the users.js file, change the routes from "/" and "/:id" to "/users" and "/users/:id"
 *   At line 10, write :-   app.use(usersRoutes)
 * 
 * Don't do :- app.use("/users", userRoutes)
 * after changing the routes in user.js to "/users" and "/users/:id" because
 * when an API call is made with an url of the form "/users....", the above thing would mean
 * we first have to go to the route "/users" (as mentioned in the index.js) and then again "/users"
 * (as mentioned in the users.js), i.e. , the url will make a successful API call only if,
 * the url is of the form "/users/users", which is illogical
 */