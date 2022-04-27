import AWS from "aws-sdk"
import * as dotenv from 'dotenv';
dotenv.config();

export const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

});

// export default{
    // s3
// }