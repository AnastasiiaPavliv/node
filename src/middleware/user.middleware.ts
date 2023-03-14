import {Request, Response, NextFunction} from "express";

class UserMiddleware{
    public async getByIdAndThrow(req: Request, res: Response, next:NextFunction): Promise<void>{
try{

}catch (e) {
    next(e)
}
    }
}
export const userMiddleware= new UserMiddleware