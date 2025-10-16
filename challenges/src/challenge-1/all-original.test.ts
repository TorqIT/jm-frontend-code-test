import { allOriginal } from "./all-original";

type Result = { [key: string]: any };

describe('allOriginal', () => {
  it('should pass', () => {
    const results: Result = {
      a: allOriginal([0, 1, 2, 3, 1, 4, 5, 2, 3, 6, 7, 6, 8, 10, 0]),
      b: allOriginal([0, 1, 2, 1, 3, 4, 5, 6, 4, 6, 3, 7, 8, 9, 10]),
      c: allOriginal([0, 1, 2, 1, 2, 1, 2, 3, 4, 5, 6, 3, 4, 5, 6])
    }
  
    expect(results.a.indexOf(0)).toEqual(-1);
    expect(results.b.indexOf(9)).toBeGreaterThan(-1);
    expect(results.c.indexOf(0)).toBeGreaterThan(-1);
  })
})