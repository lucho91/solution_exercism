const PLANET_FACTORS: Record<string, number> = {
  "mercury":	0.2408467,
  "venus":	0.61519726,
  "earth":	1.0,
  "mars":	1.8808158,
  "jupiter":	11.862615,
  "saturn":	29.447498,
  "uranus":	84.016846,
  "neptune":	164.79132
};

type Planet = keyof typeof PLANET_FACTORS;

const EARTH_YEAR_SECONDS = 31_557_600;

export function age(planet: string, seconds: number): number {
  const factor = PLANET_FACTORS[planet.toLowerCase() as Planet];

  if (!factor) {
    throw new Error(`Invalid planet: ${planet}`);
  }

  return Number((seconds / (EARTH_YEAR_SECONDS * factor)).toFixed(2));
}
