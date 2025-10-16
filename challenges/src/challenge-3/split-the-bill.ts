/**
 * Split The Bill
 * 
 * Given the list of bill items, and the list of who ate what, calculate what everyone owes rounded to two decimal points.
 * 
 * @param val 
 * @returns 
 */

export type Bill = {
  [item: string]: number;
}

export type Meals = {
  [person: string]: string[];
}

export function splitTheBill(bill: Bill, meals: Meals): Bill {
  return {};
}