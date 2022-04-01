import {createConnection} from "typeorm";

export default function connectDB() {
    createConnection().then(async connection => {console.log("success db connection.")}).catch(error => console.log(error));
};