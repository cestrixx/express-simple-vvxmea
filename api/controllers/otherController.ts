import { Request, Response, NextFunction as Next } from 'express';

const other1 = (req: Request, res: Response, next: Next) => {
  try {
    throw new Error('Not Implemented');
  } catch (err: any) {
    next(err);
  }
};

const other2 = (req: Request, res: Response, next: Next) => {
  try {
    throw new Error('Not Implemented');
  } catch (err: any) {
    next(err);
  }
};

export { other1, other2 };
