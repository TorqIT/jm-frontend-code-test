import { Bill, Meals, splitTheBill } from "./split-the-bill";

describe('splitTheBill', () => {
  const bill: Bill = {
    "Nachos": 14.99,
    "Fish and Chips": 16.99,
    "Chicken Korma": 13,
    "Steak Tenderloin": 49,
    "Burger and Fries": 12.99
  };
  const meals: Meals = {
    "Steve": ["Steak Tenderloin"],
    "Mark": ["Nachos", "Fish and chips"],
    "Ian": ["Chicken Korma"],
    "Bill": ["Burger and Fries", "Nachos"]
  }
  
  it('should pass', () => {
    const results = splitTheBill(bill, meals);
  
    expect(results['Steve']).toEqual(49);
    expect(results['Bill']).toEqual(27.98);
  })
})