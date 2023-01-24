import bcrypt from 'bcrypt';

const hash = (text: string | Buffer) => {
  return bcrypt.hash(text, 10);
};

const compare = (plain: string, hash: string) => {
  return bcrypt.compare(plain, hash);
};

export { hash, compare };
