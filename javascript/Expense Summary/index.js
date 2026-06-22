
const expenses = [
  { id: 1, category: 'food', amount: 24 },
  { id: 2, category: 'transport', amount: 15 },
  { id: 3, category: 'food', amount: 18 },
  { id: 4, category: 'books', amount: 40 },
];

function calculateTotal(expenses){
  const total = expenses.map(d=>d.amount)
  const sum = total.reduce((acc, n) => acc + n, 0)
  return sum
  }

function calculateCategoryTotal(expenses, category){
  const find = expenses.filter(d=> d.category === category).map(d=>d.amount)
  const sum = find.reduce((acc, n) => acc + n, 0)
  return sum
}

function findLargestExpense(expenses){
  const total = expenses.map(d=>d.amount)
  const largest = Math.max(...total);
  const find = expenses.find(d=>d.amount === largest)
  return find
}

function createExpenseSummary(expenses){
 return {
   total:calculateTotal(expenses),
   foodTotal:calculateCategoryTotal(expenses, 'food'),
   transportTotal: calculateCategoryTotal(expenses, 'transport'),
   largestExpense: findLargestExpense(expenses),
   
 }
}
console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));