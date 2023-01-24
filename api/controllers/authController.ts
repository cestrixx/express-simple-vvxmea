import { Request, Response, NextFunction as Next } from 'express';

const login = (req: Request, res: Response, next: Next) => {
  try {
    throw new Error('Not Implemented');
  } catch (err: any) {
    next(err);
  }
};

const logout = (req: Request, res: Response, next: Next) => {
  try {
    throw new Error('Not Implemented');
  } catch (err: any) {
    next(err);
  }
};

export { login, logout };
