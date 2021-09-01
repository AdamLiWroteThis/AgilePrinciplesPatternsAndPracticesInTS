class PrimeGenerator {
  private static s: number;
  private static f: boolean[];
  private static primes: number[];

  public static GeneratePrimeNumbers(maxValue: number): number[] {
    if (maxValue < 2) return new Array<number>(0);
    else {
      this.InitializeSieve(maxValue);
      this.Sieve();
      this.LoadPrimes();

      return this.primes;
    }
  }
  private static LoadPrimes(): void {
    let i;
    let j;
    let count: number = 0;
    for (i = 0; i < this.s; i++) {
      if (this.f[i]) count++;
    }

    this.primes = new Array<number>(count);
    for (i = 0, j = 0; i < this.s; i++) {
      if (this.f[i]) this.primes[j++] = i;
    }
  }
  private static InitializeSieve(maxValue: number): void {
    this.s = maxValue + 1;
    this.f = new Array<boolean>(this.s);
    let i;

    for (i = 0; i < this.s; i++) this.f[i] = true;

    this.f[0] = this.f[1] = false;
  }
  private static Sieve(): void {
    let i;
    let j;
    for (i = 2; i < Math.sqrt(this.s) + 1; i++) {
      if (this.f[i]) {
        for (j = 2 * i; j < this.s; j += i) this.f[j] = false;
      }
    }
  }
}

export { PrimeGenerator };
