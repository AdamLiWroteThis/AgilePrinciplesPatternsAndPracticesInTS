class PrimeGenerator {
  private static crossedOut: boolean[];
  private static result: number[];

  public static GeneratePrimeNumbers(maxValue: number): number[] {
    if (maxValue < 2) return new Array<number>(0);
    else {
      this.UnCrossIntegersUpTo(maxValue);
      this.CrossOutMultiples();
      this.PutUncrossedIntersIntoResult();
      return this.result;
    }
  }
  private static UnCrossIntegersUpTo(maxValue: number): void {
    this.crossedOut = new Array<boolean>(maxValue + 1);
    for (let i = 2; i < this.crossedOut.length; i++) this.crossedOut[i] = false;
  }
  private static PutUncrossedIntersIntoResult(): void {
    this.result = new Array<number>(this.NumberOfUncrossedInters());
    for (let j = 0, i = 2; i < this.crossedOut.length; i++) {
      if (this.NotCrossed(i)) this.result[j++] = i;
    }
  }
  private static NumberOfUncrossedInters(): number {
    let count: number = 0;
    for (let i = 2; i < this.crossedOut.length; i++) {
      if (this.NotCrossed(i)) count++;
    }
    return count;
  }
  private static CrossOutMultiples(): void {
    let maxPrimeFactor: number = this.DetermineIterationLimit();
    for (let i = 2; i < maxPrimeFactor + 1; i++) {
      if (this.NotCrossed(i)) this.CrossOutputMultiplesOf(i);
    }
  }
  private static DetermineIterationLimit(): number {
    let maxPrimeFactor: number = Math.sqrt(this.crossedOut.length) + 1;
    return maxPrimeFactor;
  }
  private static CrossOutputMultiplesOf(i: number): void {
    for (let multiple = 2 * i; multiple < this.crossedOut.length; multiple += i)
      this.crossedOut[multiple] = true;
  }
  private static NotCrossed(i: number): boolean {
    return this.crossedOut[i] === false;
  }
}

export { PrimeGenerator };
