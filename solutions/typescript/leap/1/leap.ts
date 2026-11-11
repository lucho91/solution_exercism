export function isLeap(anio: number): boolean {
  
  return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 4 === 0 && anio % 100 === 0 && anio % 400 === 0);
}
