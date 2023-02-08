export const randomText = (length = 10) => {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let str = '';
  for (let i = 0; i < length; i++){
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str
}