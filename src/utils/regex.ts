export const regularExp: {
  [ x: string ]: RegExp;
} = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._.-]+\.[A-Za-z]{2,}$/i,
  positiveNumber: /^\d+(\.\d+)?$/,
  onlyLetters: /^[\p{L}\p{M}\s'-]+$/u,
};
