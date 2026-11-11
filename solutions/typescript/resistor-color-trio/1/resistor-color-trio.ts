export function decodedResistorValue([band1, band2, band3]: string[]) {
  const COLORS = [
  "black", "brown", "red", "orange", "yellow",
  "green", "blue", "violet", "grey", "white"
];
const baseValue = COLORS.indexOf(band1) * 10 + COLORS.indexOf(band2);
  const exponent = COLORS.indexOf(band3);
  let totalOhms = baseValue * Math.pow(10, exponent);

  if (totalOhms >= 1_000_000_000) {
    return `${totalOhms / 1_000_000_000} gigaohms`;
  }
  if (totalOhms >= 1_000_000) {
    return `${totalOhms / 1_000_000} megaohms`;
  }
  if (totalOhms >= 1_000) {
    return `${totalOhms / 1_000} kiloohms`;
  }

  return `${totalOhms} ohms`;
}
