import { PrimeGenerator } from "./PrimeGenerator";

test("TestPrimes", () => {
  const nullArray: number[] = PrimeGenerator.GeneratePrimeNumbers(0);
  expect(nullArray.length).toBe(0);

  const minArray: number[] = PrimeGenerator.GeneratePrimeNumbers(2);
  expect(minArray.length).toBe(1);
  expect(minArray[0]).toBe(2);

  const threeArray: number[] = PrimeGenerator.GeneratePrimeNumbers(3);
  expect(threeArray.length).toBe(2);
  expect(threeArray[0]).toBe(2);
  expect(threeArray[1]).toBe(3);

  const centArray: number[] = PrimeGenerator.GeneratePrimeNumbers(100);
  expect(centArray.length).toBe(25);
  expect(centArray[24]).toBe(97);
});
