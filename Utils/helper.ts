export const generateRandomHexString = () => {
    const characters = '0123456789abcdef';
    let result = '';
  
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
}

export const stringToHex = (name: string) => {
  return name
      .split('')
      .map(char => char.charCodeAt(0).toString(16))
      .join('');
}