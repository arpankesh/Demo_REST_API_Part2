import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log("Hi There Buddy");
    console.log(users);
    res.send(users);
};

export const createUsers = (req, res) => {
    console.log("POST route reached");

    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} ${user.lastName} added to the database`);

};

export const getUser = (req, res) => {
    console.log("The GET ID route");
    console.log(req.params);

    const { id } = req.params;  //We can also do :- const id = req.params.id;
    const foundUsers = users.find((user) => user.id === id);
    res.send(foundUsers);
};

export const deleteUser = (req, res) => {
    console.log("THe DELETE ID route");
    console.log(req.params);

    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User with Id :- ${id}, has been deleted from the database`);
};

export const updateUser = (req, res) => {
    console.log("The PATCH ID route ");

    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the Id :- ${id} has been updated`);
};