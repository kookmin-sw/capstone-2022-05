import {s3} from "../../config/s3"
import multerS3 from "multer-s3"
import multer from "multer"

const upload = multer({
    storage: multerS3({ 
        s3: s3,
        bucket: 'icare-s3',
        contentType: multerS3.AUTO_CONTENT_TYPE, 
        acl: 'public-read',
        
        key: function (req, file, cb) { 
            // console.log(req)
            cb(null, `workdiary/${Date.now()}_${file.originalname}`)
        },
    })
    // Response.status(201).end()
})

export default{
    upload
}