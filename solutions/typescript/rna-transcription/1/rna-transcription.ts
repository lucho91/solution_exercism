export function toRna(adn: string) {
  const mapArn: Record<string, string> = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
  };
    let result = "";
    for (let name of adn.split("")) {
      if (mapArn[name]) {
        result += mapArn[name];
      } else {
        throw new Error('Invalid input DNA.');
      }
    }
    return result;
}
