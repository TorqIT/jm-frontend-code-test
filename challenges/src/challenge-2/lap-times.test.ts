import { lapTimes, LapTime } from "./lap-times"

describe('lapTimes', () => {
  const laps: LapTime[] = [
    { driver: "Lapo McMahon", lapTime: 2.50 },
    { driver: "Tiidrik Araujo", lapTime: 1.12 },
    { driver: "Michaela Tobin", lapTime: 2.19 },
    { driver: "Michaela Tobin", lapTime: 3.26 },
    { driver: "Michaela Tobin", lapTime: 3.26 },
    { driver: "Liliana Loris", lapTime: 3.33 },
    { driver: "Lapo McMahon", lapTime: 2.03 },
    { driver: "Yanis Rovigatti", lapTime: 1.43 },
    { driver: "Biddy Penzig", lapTime: 2.59 },
    { driver: "Pepe Dalgaard", lapTime: 3.10 },
    { driver: "Tiidrik Araujo", lapTime: 1.40 },
    { driver: "Marie-Christine Mac Cnáimhín", lapTime: 2.30 },
    { driver: "Michaela Tobin", lapTime: 1.54 },
    { driver: "Marie-Christine Mac Cnáimhín", lapTime: 1.59 },
    { driver: "Radha Alfero", lapTime: 1.42 },
    { driver: "Inma Johannessen", lapTime: 3.14 },
    { driver: "Dharma Van Amelsvoort", lapTime: 3.00 },
    { driver: "Pepe Dalgaard", lapTime: 2.26 },
    { driver: "Tiidrik Araujo", lapTime: 1.11 },
    { driver: "Emmanuel Kwan", lapTime: 2.21 },
    { driver: "Marie-Christine Mac Cnáimhín", lapTime: 3.03 },
    { driver: "Emmanuel Kwan", lapTime: 2.26 },
    { driver: "Liliana Loris", lapTime: 2.29 },
    { driver: "Radha Alfero", lapTime: 1.11 },
    { driver: "Aditya Dyson", lapTime: 1.24 },
    { driver: "Emmanuel Kwan", lapTime: 3.31 },
    { driver: "Biddy Penzig", lapTime: 1.02 },
    { driver: "Radha Alfero", lapTime: 3.16 },
    { driver: "Inma Johannessen", lapTime: 2.56 },
    { driver: "Aditya Dyson", lapTime: 2.24 },
    { driver: "Pepe Dalgaard", lapTime: 3.17 },
    { driver: "Yanis Rovigatti", lapTime: 2.00 },
    { driver: "Aditya Dyson", lapTime: 3.13 },
    { driver: "Lapo McMahon", lapTime: 2.13 },
    { driver: "Yanis Rovigatti", lapTime: 2.40 },
    { driver: "Liliana Loris", lapTime: 2.28 },
    { driver: "Stan Lee", lapTime: 2.20 },
    { driver: "Inma Johannessen", lapTime: 2.50 },
    { driver: "Dharma Van Amelsvoort", lapTime: 2.58 },
    { driver: "Biddy Penzig", lapTime: 3.09 },
    { driver: "Dharma Van Amelsvoort", lapTime: 3.18 },
  ];

  it('should pass', () => {
    const results = lapTimes(laps);

    expect(results.findIndex(i => i.driver === 'Biddy Penzig')).toEqual(0);
    expect(results.filter(i => i.driver === 'Michaela Tobin').length).toEqual(1);
    expect(results.find(i => i.driver === 'Michaela Tobin')?.lapTime).toEqual(1.54);
  })
})