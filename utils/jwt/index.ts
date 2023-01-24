import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';

const sign = (payload: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {},
      'Secret',
      { algorithm: 'PS384', audience: payload },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

const verify = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'Secret', { algorithms: ['PS384'] }, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });
};

export { sign, verify };
