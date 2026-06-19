function formatName(firstname,lastname){
  return `${firstname} ${lastname}`
}
console.log(formatName('ibrahim','qoyum'))

function getGreeting(timeOfDay) {
  
  return timeOfDay < 12
    ? "Good Morning"
    : timeOfDay < 18
      ? "Good Afternoon"
      : "Good night";
}


function createGreeting(firstname, lastname, timeOfDay){
const greeting = getGreeting(timeOfDay);
const name = formatName(firstname,lastname)
  return `${greeting}, ${name}`
}
const timeOfDay = new Date().getHours()


console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));