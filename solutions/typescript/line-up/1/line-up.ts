export function format(name: string, number: Number): string {
  const numStr: string = `${number}`;
  let form = 'th';
  if (numStr[numStr.length -1] === '1' && numStr[numStr.length -2] !== '1') {
    form = 'st';
  }
  if (numStr[numStr.length -1] === '2' && numStr[numStr.length -2] !== '1') {
    form = 'nd';
  }
  if (numStr[numStr.length -1] === '3' && numStr[numStr.length -2] !== '1') {
    form = 'rd';
  }
  return `${name}, you are the ${number}${form} customer we serve today. Thank you!`
}
