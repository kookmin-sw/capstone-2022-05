import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Parent} from "./entity/Parent";

import express, { Request, Response, NextFunction } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, Capstone Team 5');
});

app.listen(3000, () => {
    console.log('Start Server with 3000 port');
});

createConnection().then(async connection => {
    // console.log("connect DB")
    // console.log("Inserting a new user into the database...");
    // const users = await connection.manager.findOne(User, 1);
    // const parent = new Parent();

    // parent.babyName = "ho";
    // parent.babyBirth = "11/23";
    // parent.babyGender = "male";
    // parent.region = "cheonan";
    // parent.career = "asdfsda";
    // parent.user = users;
    // await connection.manager.save(parent);
    // // console.log("Saved a new user with id: " + user.userId);

    // // console.log("Loading users from the database...");
    
    // // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));