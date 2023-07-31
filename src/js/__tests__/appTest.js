import healthIndicators from '../app';

test.each([
  [90, { name: 'Маг', health: 90 }, 'healthy'],
  [40, { name: 'Маг', health: 40 }, 'wounded'],
  [10, { name: 'Маг', health: 10 }, 'critical'],
])('testing level of health  with %s status and %i value', (__, player, expected) => {
  const result = healthIndicators(player);
  expect(result).toBe(expected);
});