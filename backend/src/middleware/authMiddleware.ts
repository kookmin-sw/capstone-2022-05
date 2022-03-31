import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const auth = async (req: Request, res: Response, next: NextFunction) => {

    // 인증 성공
    try {
        const isVerify = await jwt.verify(req.headers.authorization, process.env.SECRET_KEY);

        if (isVerify) {
            return next();
        }
    }
    // 인증 실패
    catch (error) {
        // 유효시간이 초과된 경우
        if (error.name === 'TokenExpiredError') {
            return res.status(419).json({
                code: 419,
                message: '토큰이 만료되었습니다.'
            });
        }
        // 토큰의 비밀키가 일치하지 않는 경우
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                code: 401,
                message: '유효하지 않은 토큰입니다.'
            });
        }
    }
}

export = auth;