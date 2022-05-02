import { Request, Response, NextFunction } from "express";
import { User } from '../entity/User';
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';

const signup = async (req: Request, res: Response, next: NextFunction) => {
    const saltRound = 10;

    const {
        email,
        username,
        nickname,
        password,
        code
    } = req.body;

    const userCheck = await User.find({email: email}); // 중복된 이메일이 있는지 확인

    // 중복된 이메일 없는 경우
    if(userCheck.length === 0) {

        const user = new User();

        // 입력받은 비밀번호 암호화
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPW = await bcrypt.hash(password, salt);

        user.email = email;
        user.nickname = nickname;
        user.username =username;
        user.code = code;
        user.password = hashedPW;

        await user.save()
        .then((user) => {
            res.status(201).json({
                message: "회원가입이 완료되었습니다.",
                userInfo: user
            });
        })
        .catch((err) => {
            res.send(err);
        });
    }
    else { // 중복된 이메일이 존재하는 경우
        res.status(400).json({
            message: "이미 존재하는 이메일 입니다.",
        })
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    
    const user = await User.find({
        email: email
    })
    
    if (user.length === 0) {
        return res.status(404).json({
            message: "등록되지 않은 이메일입니다."
        })
    }
    else {
        const check = await bcrypt.compare(password, user[0].password);

        if(check) { // 패스워드 일치 시 토큰 발행
            const token = jwt.sign({
                type: 'JWT',
                email: email,
                }, process.env.SECRET_KEY, {
                expiresIn: '24h', // 만료시간 24h
                issuer: 'icare',
                }
            );
            
            res.status(200).json({
                success: true,
                message: "토큰 발행 완료",
                token: token
            });
            
        }
        else {
            res.status(400).json({
                message: "비밀번호가 일치하지 않습니다."
            })
        }
    }
};

export default {signup, login};
